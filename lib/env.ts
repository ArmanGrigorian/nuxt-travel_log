import z from "zod";
import tryParseEnv from "./try-parse-env";

const EnvSchema = z.object({
  NODE_ENV: z.string(),
  LIVE_URL: z.string(),
  TURSO_DATABASE_URL: z.string(),
  TURSO_AUTH_TOKEN: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.string(),
  GHUB_CLIENT_ID: z.string(),
  GHUB_CLIENT_SECRET: z.string(),
});

export type T_EnvSchema = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema, process.env);

export default EnvSchema.parse(process.env);
