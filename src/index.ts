import axios from "axios";
import * as dotenv from "dotenv";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY;

if (!apiKey) {
  console.error("APIキーが.envファイルに設定されていません。");
  process.exit(1);
}

async function chatGPT(prompt: string) {
  const response = await axios.post(
    "https://api.openai.com/v1/engines/davinci-codex/completions",
    {
      prompt: prompt,
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

  const completion = response.data.choices[0].text.trim();
  return completion;
}

(async () => {
  const prompt = "What is the capital of France?";
  const answer = await chatGPT(prompt);
  console.log(`Prompt: ${prompt}`);
  console.log(`Answer: ${answer}`);
})();
