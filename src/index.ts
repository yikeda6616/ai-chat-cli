import Chat from "./chat";
import InputManager from "./InputManager";

async function main() {
  const chat = new Chat();
  const inputManager = new InputManager();

  // Accept user input in an infinite loop
  while (true) {
    const question = await inputManager.getUserInput("Input your question: ");
    if (question.toLowerCase() === "exit") {
      break;
    }
    const reply = await chat.getChatResponse(question);
    console.log(`Answer: ${reply}`);
  }

  inputManager.close();
}

main();
