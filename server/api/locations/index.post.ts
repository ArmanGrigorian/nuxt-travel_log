import db from "~/lib/db";
import { InsertLocation, location } from "~/lib/db/schema";

export default defineEventHandler(async (event) => {
  if (!event.context.user) {
    return sendError(
      event,
      createError({
        statusCode: 401,
        statusMessage: "Unauthorized",
      }),
    );
  }

  const result = await readValidatedBody(event, (body) =>
    InsertLocation.safeParse(body),
  );

  if (!result.success) {
    const statusMessage = result.error.issues.reduce((acc, issue) => {
      acc += `${issue.path}: ${issue.message}; \n`;

      return acc;
    }, "");

    const data = result.error.issues.reduce(
      (acc, issue) => {
        acc[issue.path.join("")] = issue.message;

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

  const [createdLocation] = await db
    .insert(location)
    .values({
      ...result.data,
      slug: result.data.name.replaceAll(" ", "-").toLowerCase(),
      userId: event.context.user.id,
    })
    .returning();

  return createdLocation;
});
