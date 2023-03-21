import axios from "axios";
import * as dotenv from "dotenv";
import readline from "readline";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("APIキーが.envファイルに設定されていません。");
  process.exit(1);
}

let conversationHistory: string[] = [];

async function chatGPT(prompt: string): Promise<string> {
  try {
    const fullPrompt = `${conversationHistory.join("\n")}\nUser: ${prompt}\nAI: `;

    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-002/completions",
      {
        prompt: fullPrompt,
        max_tokens: 100,
        n: 1,
        stop: null,
        temperature: 0.7,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,
        },
      }
    );

    const reply = response.data.choices[0].text.trim();
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
