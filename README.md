# ai-chat-cli

This is an interactive chat tool for conducting consecutive conversation on CLI, powered by GPT-4 / GPT-3.5-turbo.

<img width="1242" alt="Screenshot 2023-05-06 at 14 27 46" src="https://user-images.githubusercontent.com/25294178/236602136-5c47cb16-c3e3-4a51-99af-e2d1a71a1c36.png">

## Prerequisites

Before using this tool, you will need to have the following:

- Node.js (version 18 or higher)
- Yarn (version 1.x) or npm (version 7.x)

You will also need an **OpenAI API key**, which you can obtain from the OpenAI website. Please refer to the [OpenAI documentation](https://platform.openai.com/account/api-keys) for instructions on how to obtain an API key.

## Installation and API Configuration

1. Clone the project and install the packages:

```
yarn
```

2. Load the environment variables such as the API key from the .env file:

.env

```
OPENAI_API_KEY=your_api_key
OPENAI_ORGANIZATION=your_org_id
```

## Model Configuration

You can configure the OpenAI model used in this application by modifying the `config.ts` file. Currently, the supported models are "gpt-4" and "gpt-3.5-turbo".

To change the model, open the `config.ts` file and update the `model` variable with the desired model name:

```typescript
export const model: "gpt-4" | "gpt-3.5-turbo" = "gpt-4";
```

Please note that different models may have different performance and pricing. Make sure to check OpenAI's documentation and pricing information before switching models.

When you change the model, ensure that the necessary API keys and organization ID are set in the `.env` file as mentioned in the [API Configuration](#api-configuration) section.


## Run

You can start an interactive chat by running the following command:

```
yarn start
```

You can continue the conversation by entering questions on the command line and receiving answers. To end the conversation, input "exit" or press `Ctrl + C`.

## Disclaimer

Each request will use the token associated with your API KEY and account. Please use this tool at your own risk and discretion, as we cannot be responsible for any consequences resulting from the use of this tool.
