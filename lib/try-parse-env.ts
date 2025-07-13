import type { ZodObject, ZodRawShape } from "zod";
import { ZodError } from "zod";

export default function tryParseEnv<T extends ZodRawShape>(
  EnvSchema: ZodObject<T>,
  buildEnv: Record<string, string | undefined> = process.env,
) {
  try {
    EnvSchema.parse(buildEnv);
  } catch (error) {
    if (error instanceof ZodError) {
      let message = "Missing required values in .env:\n";

      error.issues.forEach((issue) => {
        message += `${String(issue.path[0])}\n`;
      });

      const errorMessage = new Error(message);
      errorMessage.stack = "";
      throw errorMessage;
    } else {
      console.error("An unexpected error occurred:", error);
    }
    throw error;
  }
}
