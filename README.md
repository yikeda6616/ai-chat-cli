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

以下のコマンドを実行することで、ChatGPTとの対話を開始できます。

```
yarn start
```

コマンドラインで質問を入力し、回答を受け取りながら、対話を続けることができます。会話を終了するには、 `Ctrl + C` を押してください。