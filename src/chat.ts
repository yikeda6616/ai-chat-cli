import { model } from "./config";
import apiManager from "./ApiManager";

class Chat {
  private conversationHistory: string[] = [];

  public async getChatResponse(prompt: string): Promise<string> {
    try {
      const fullPrompt = `${this.conversationHistory.join(
        "\n"
      )}\nUser: ${prompt}\nAI: `;

      const response = await apiManager.generateResponse(fullPrompt, model);
      const reply = response.data.choices[0].message?.content;
      this.conversationHistory.push(`User: ${prompt}`, `AI: ${reply}`);

      return reply;
    } catch (error) {
      console.error("Error:", error);
      return "An error occurred.";
    }
  }
}

export default Chat;
