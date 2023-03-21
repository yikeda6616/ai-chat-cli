# ai-chat-cli

Node.js (TypeScript) で OpenAI GPT-3 とCLI上で対話形式でチャットを行うツールです。

## 導入

1. プロジェクトをクローン後パッケージをインストールします。
```
yarn
```

2. APIキーなどの環境変数は .env ファイルから読み込みます。

.env
```
OPENAI_API_KEY=your_api_key
```

## 実行

以下のコマンドを実行することで、対話を開始できます。

```
yarn start
```

コマンドラインで質問を入力し、回答を受け取りながら、対話を続けることができます。会話を終了するには、 `Ctrl + C` を押してください。

## 補足

text-davinci-002 は OpenAI GPT-3 エンジンの一部であり、現在Webで利用できるChatGPT とは異なります。ChatGPT は GPT-3.5-turbo をベースにした OpenAI の独自の会話型AIモデルです。