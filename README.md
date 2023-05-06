# ai-chat-cli

This is a tool for conducting interactive chats in CLI with OpenAI GPT-4 / GPT-3.5-turbo using Node.js (TypeScript).

## Installation

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

## Run

You can start an interactive chat by running the following command:

```
yarn start
```

You can continue the conversation by entering questions on the command line and receiving answers. To end the conversation, input "exit" or press `Ctrl + C`.

## Disclaimer

Each request will use the token associated with your API KEY and account. Please use this tool at your own risk and discretion, as we cannot be responsible for any consequences resulting from the use of this tool.
