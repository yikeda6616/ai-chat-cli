import { model } from "./config";
import apiManager from "./ApiManager";

class Chat {
  private conversationHistory: string[] = [];

  public async generateReply(prompt: string): Promise<string> {
    const fullPrompt = `${this.conversationHistory.join("\n")}\nUser: ${prompt}\nAI: `;

    try {
      const response = await apiManager.getApiResponse(fullPrompt, model);
      const reply = response.data.choices[0].message?.content;

      if (!reply) {
        throw new Error('API response is missing a message content');
      }

      this.conversationHistory.push(`User: ${prompt}`, `AI: ${reply}`);
      return reply;
    } catch (error) {
      console.error("Error:", error);
      return "An error occurred.";
    }
  }
}

export default Chat;
