import readline from "readline";
import Chat from "./chat";

async function main() {
  const chat = new Chat();

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.setPrompt("Input your question: ");
  rl.prompt();

  rl.on("line", async (line) => {
    const reply = await chat.getChatResponse(line);
    console.log(`Answer: ${reply}`);
    rl.prompt();
  });
}

main();
