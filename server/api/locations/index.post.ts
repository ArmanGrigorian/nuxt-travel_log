import type { DrizzleError } from "drizzle-orm";
import { customAlphabet } from "nanoid";
import slugify from "slug";
import {
  findLocationByNameAndUser,
  findLocationBySlug,
  insertLocation,
} from "~/lib/db/queries";
import { InsertLocation } from "~/lib/db/schema";
import defineAuthenticatedEventHandler from "~/utils/define-authenticated-event-handler";

const nanoid = customAlphabet("1234567890abcdefghijklmnopqrstuvwxyz", 12);

export default defineAuthenticatedEventHandler(async (event) => {
  const user = event.context.user;

  const result = await readValidatedBody(event, (body) =>
    InsertLocation.safeParse(body),
  );

  if (!result.success) {
    const statusMessage = result.error.issues.reduce((acc, issue) => {
      acc += `${issue.path}: ${issue.message};`;

      return acc;
    }, "");

    const data = result.error.issues.reduce(
      (acc, issue) => {
        acc[issue.path.join(".")] = issue.message;

        return acc;
      },
      {} as Record<string, string>,
    );

    return sendError(
      event,
      createError({
        statusCode: 422,
        statusMessage,
        data,
      }),
    );
  }

  const existingLocation = await findLocationByNameAndUser(
    result.data.name,
    user.id,
  );

  if (existingLocation) {
    return sendError(
      event,
      createError({
        statusCode: 409,
        statusMessage: "A location with that name already exists!",
      }),
    );
  }

  let slug = slugify(result.data.name, { lower: true });

  let isExisting = !!(await findLocationBySlug(slug));

  while (isExisting) {
    const id = nanoid();
    const idSlug = `${slug}-${id}`;
    isExisting = !!(await findLocationBySlug(idSlug));
    if (!isExisting) {
      slug = idSlug;
    }
  }

  try {
    const [createdLocation] = await insertLocation({
      ...result.data,
      slug,
      userId: user.id,
    });

    return createdLocation;
  } catch (err) {
    const error = err as DrizzleError;

    if (
      error.message ===
      "SQLITE_CONSTRAINT: SQLite error: UNIQUE constraint failed: location.slug"
    ) {
      return sendError(
        event,
        createError({
          statusCode: 409,
          statusMessage:
            "Slug must be unique (the location name is used to generate the slug).",
        }),
      );
    }

    throw error;
  }
});
