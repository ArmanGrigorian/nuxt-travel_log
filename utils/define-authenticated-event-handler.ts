import type { H3Event, H3EventContext } from "h3";
import type { T_UserWithId } from "~/types/db";

type T_AuthenticatedEvent = H3Event & {
  context: H3EventContext & {
    user: T_UserWithId;
  };
};

export default function defineAuthenticatedEventHandler<T>(
  handler: (event: T_AuthenticatedEvent) => T,
) {
  return defineEventHandler(async (event) => {
    const user = event.context.user;

    if (!user) {
      return sendError(
        event,
        createError({
          statusCode: 401,
          statusMessage: "Unauthorized",
        }),
      );
    }

    return handler(event as T_AuthenticatedEvent);
  });
}
