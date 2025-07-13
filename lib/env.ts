import z from "zod";
import tryParseEnv from "./try-parse-env";

const EnvSchema = z.object({
  LIVE_URL: z.url(),
});

export type EnvSchema = z.infer<typeof EnvSchema>;

tryParseEnv(EnvSchema, process.env);

export default EnvSchema.parse(process.env);
