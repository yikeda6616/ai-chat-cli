import readline from "readline";

class InputManager {
  private rl: readline.Interface;

  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  public async getUserInput(prompt: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(prompt, (input) => {
        resolve(input);
      });
    });
  }

  public close() {
    this.rl.close();
  }
}

export default InputManager;
