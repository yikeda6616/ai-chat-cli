import * as dotenv from "dotenv";

dotenv.config();

export const apiKey = process.env.OPENAI_API_KEY;
export const orgId = process.env.OPENAI_ORGANIZATION;
export const model: "gpt-4" | "gpt-3.5-turbo" = "gpt-4";

if (!apiKey) {
  console.error("API KEY Not Found");
  process.exit(1);
}
