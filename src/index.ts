import axios from "axios";
import * as dotenv from "dotenv";
import readline from "readline";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;
const orgId = process.env.OPENAI_ORGANIZATION;
const model: "gpt-4" | "gpt-3.5-turbo" = "gpt-4";

if (!apiKey) {
  console.error("APIキーが.envファイルに設定されていません。");
  process.exit(1);
}

const configuration = new Configuration({
  organization: orgId,
  apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

export async function ask(content: string, model: string) {
  try {
    const response = await openai.createChatCompletion({
      model: model,
      messages: [{ role: "user", content: content }],
    });
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
}

let conversationHistory: string[] = [];

async function chatGPT(prompt: string): Promise<string> {
  try {
    const fullPrompt = `${conversationHistory.join(
      "\n"
    )}\nUser: ${prompt}\nAI: `;

    const response = await ask(fullPrompt, model);
    const reply = response.data.choices[0].message?.content;
    conversationHistory.push(`User: ${prompt}`, `AI: ${reply}`);

    return reply;
  } catch (error) {
    console.error("Error:", error);
    return "An error occurred.";
  }
}

async function main() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt("Input your question: ");
  rl.prompt();

  rl.on("line", async (line) => {
    const reply = await chatGPT(line);
    console.log(`Answer: ${reply}`);
    rl.prompt();
  });
}

main();
