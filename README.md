# ai-chat-cli

This is a tool for conducting interactive chats in CLI with OpenAI GPT-4 / GPT-3.5-turbo using Node.js (TypeScript).

<img width="1242" alt="Screenshot 2023-05-06 at 14 27 46" src="https://user-images.githubusercontent.com/25294178/236602136-5c47cb16-c3e3-4a51-99af-e2d1a71a1c36.png">

## Prerequisites

Before using this tool, you will need to have the following:

- Node.js (version 18 or higher)
- Yarn (version 1.x) or npm (version 7.x)

You will also need an **OpenAI API key**, which you can obtain from the OpenAI website. Please refer to the [OpenAI documentation](https://platform.openai.com/account/api-keys) for instructions on how to obtain an API key.

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
