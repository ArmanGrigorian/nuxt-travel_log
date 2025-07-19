import { auth } from "~/lib/auth";

export default defineEventHandler(async (event) => {
  const session = await auth.api.getSession({
    headers: event.headers,
  });

  if (session?.user) {
    const { id, ...rest } = session.user;
    
    event.context.user = {
      id: Number(id),
      ...rest,
    };
  } else {
    event.context.user = undefined;
  }

  if (event.path.includes("/dashboard")) {
    if (!session?.user) {
      await sendRedirect(event, "/", 302);
    }
  }
});
