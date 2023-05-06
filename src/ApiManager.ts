import { Configuration, OpenAIApi } from "openai";
import { apiKey, orgId } from "./config";

class ApiManager {
  private static instance: ApiManager;
  private openai: OpenAIApi;

  private constructor() {
    const configuration = new Configuration({
      organization: orgId,
      apiKey: apiKey,
    });
    this.openai = new OpenAIApi(configuration);
  }

  public static getInstance(): ApiManager {
    if (!ApiManager.instance) {
      ApiManager.instance = new ApiManager();
    }
    return ApiManager.instance;
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

const apiManager = ApiManager.getInstance();
export default apiManager;
