import { Configuration, OpenAIApi } from "openai";
import { apiKey, orgId } from "./config";

class ApiManager {
  private openai: OpenAIApi;

  constructor() {
    const configuration = new Configuration({
      organization: orgId,
      apiKey: apiKey,
    });
    this.openai = new OpenAIApi(configuration);
  }

  public async generateResponse(content: string, model: string) {
    try {
      const response = await this.openai.createChatCompletion({
        model: model,
        messages: [{ role: "user", content: content }],
      });
      return response;
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

const apiManager = new ApiManager();
export default apiManager;
