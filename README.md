# 名言ジェネレータ

シンプルに名言をランダム表示するジェネレーターです。<br>
フロントは React + TypeScript + Viteで構築し、スタイルは Tailwind CSS、 <br>
API 部分は Vercel のサーバーレス関数として実装しています。<br>
フロントと API を同一リポジトリで管理し、自動デプロイまで一元化しました。

　　
## デモ

本番環境（Vercel）で動作確認できます。

[https://honjitsu-no-meigen.vercel.app/](https://honjitsu-no-meigen.vercel.app/)


　　
## 技術スタック

- **フロントエンド:** React + TypeScript + Vite  
- **スタイル:** Tailwind CSS  
- **バックエンド:** Vercel Serverless Function (Node.js,`/api/quote`)  
- **デプロイ:** Vercel 無料プラン<br>

| 言語・フレームワーク | バージョン       |
|---------------------|----------------|
| React               | 19.1.1         |
| TypeScript          | 5.8.3          |
| Vite                | 7.1.7          |
| Tailwind CSS        | 3.4.10         |
| Node.js             | 22.20.0        |
| Vercel              | 無料プラン     |


　　
## ポイント

- 高速表示: Vite でビルドされた静的ファイルを Vercel の CDN から配信
- 軽量 API: サーバーレス関数で必要時のみ起動
- 簡単デプロイ: GitHub 連携により git push で自動反映
- オールインワン構成: 1つのリポジトリでフロントと API をまとめて管理


　　
## 機能

- ボタンを押すとランダムで名言を表示  
- 名言の著者も同時に表示  
- 背景色もランダムに変えて演出


　　
## 開発環境
- ローカル: ダミーデータで確認
- 本番: Vercel API (/api/quote) から取得


　　
## 使い方（ローカル開発）

1. リポジトリをクローン  
```bash
git clone https://github.com/1shihara/honjitsu-no-meigen.git
cd honjitsu-no-meigen
```
2. 依存関係をインストール
```bash
npm install
```
3. 開発サーバーを起動
```bash
npm run dev
```
4. ブラウザで確認
http://localhost:5173

ボタンを押すと名言が表示されます。<br>
ローカルではダミーデータで動作を確認できます。


　　
## デプロイ
- GitHub に push すると自動で Vercel にデプロイされます
- プレビュー URL はコミットごとに生成されます


　　
## フォルダ構成

```
honjitsu-no-meigen/
├── public/                # 静的ファイル（直リンク可能）
│   ├── cat.png
│   ├── cat2.png
│   ├── halloween.png
│   ├── witch.png
│   ├── witch2.png
│   └── favicon.ico
│
├── src/
│   ├── assets/            # Viteが処理するアセット
│   │   └── react.svg
│   │
│   ├── App.tsx            # メインコンポーネント（フロント画面）
│   ├── main.tsx           # Reactエントリーポイント
│   └── index.css          # TailwindCSS 読み込み用
│
├── api/                   # Vercel サーバーレス関数
│   └── quote.ts           # ランダム名言を返すAPI
│
├── .gitignore
├── index.html             # Viteエントリーポイント
├── package.json
├── postcss.config.js      # Tailwind/PostCSS設定
├── tailwind.config.js     # Tailwind設定
├── tsconfig.json          # TypeScript設定
├── vite.config.ts         # Vite設定
└── README.md              # プロジェクト説明

```


　　
## 注意点
- 無料プランでは API リクエスト上限やビルド回数制限があります
- 本番 URL とプレビュー URL を間違えないようにしてください
- fetch は相対パス /api/quote を使用


　　
## カスタマイズ
- 名言の内容は /api/quote.ts で自由に追加・変更可能
- Tailwind CSS を使って見た目も簡単に変更可能
