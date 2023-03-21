# ChatGPT-CLI

Node.js (TypeScript) で ChatGPT をCLIで使うプログラムです。

## 導入

1. プロジェクトをクローン後パッケージをインストールします。
```
yarn
```

2. APIキーなどの環境変数は .env ファイルから読み込みます。

.env
```
OPENAI_API_KEY=your_api-key
```

## 実行

プロンプトをCLIから受け取るために、以下のコマンドを実行してください。

```
yarn start --prompt 日本の首都は？"
```

または、エイリアスを使用して実行できます。

```
yarn start -p "日本の首都は？"
# Prompt: 日本の首都は？
# Answer: 日本の首都は東京です。
```