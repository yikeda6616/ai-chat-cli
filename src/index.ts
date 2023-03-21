import axios from "axios";
import * as dotenv from "dotenv";
import yargs from "yargs";
import { hideBin } from "yargs/helpers";

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
interface Arguments {
  prompt: string;
  _: (string | number)[];
  $0: string;
}

const argv = (yargs(hideBin(process.argv))
  .option("prompt", {
    alias: "p",
    type: "string",
    demandOption: true,
    description: "プロンプトを指定してください",
  })
  .argv as unknown) as Arguments;

(async () => {
  const prompt = argv.prompt;
  const answer = await chatGPT(prompt);
  console.log(`Prompt: ${prompt}`);
  console.log(`Answer: ${answer}`);
})();
