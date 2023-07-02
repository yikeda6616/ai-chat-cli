import { Configuration, OpenAIApi } from "openai";
import { apiKey, orgId } from "./config";

class ApiManager {
  private static instance: ApiManager;
  private openai: OpenAIApi;

  private constructor() {
    if (!apiKey || !orgId) {
      throw new Error("API key and/or Organization ID is missing in the configuration");
    }

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

  public async getApiResponse(content: string, model: string) {
    if (!content || !model) {
      throw new Error("Content and/or model is missing");
    }

    try {
      const response = await this.openai.createChatCompletion({
        model: model,
        messages: [{ role: "user", content: content }],
      });
      return response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }
}

const apiManager = ApiManager.getInstance();
export default apiManager;
