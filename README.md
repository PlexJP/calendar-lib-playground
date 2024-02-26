# カレンダー（タイムライン）のライブラリをPoCするアプリケーション
## 概要
- Next.jsに組み込んで検証ができます
- Storybookにライブラリを組み込んだコンポーネントを表示してインタラクティブに検証もできます
- その他TypeScriptなどを導入しているため型の確認ができます

## Usage
### インストール
```bash
yarn
```

※Bunの利用は調整中です

## Next.js
```bash
yarn dev
```

localhost:3000でアクセスできます


## Storybook
```bash 
yarn storybook
```

localhost:6006でアクセスできます

### 開発
自由ですが開発するためのおすすめ情報があります。

- meta.titleはディレクトリで分けつつ、Storyのタイトルをディレクトリに合わせると良いでしょう
  - MUIのコンポーネント検証をする場合
    - src/stories/components/mui/MUIButton
      - index.stories.ts
        - `meta.title: 'MUI/MUIButton'`
      - index.tsx 

## デプロイ
mainにPRをマージするとStorybookがビルドされデプロイされるようになっています。
もちろん、コミットせず手元で見るだけでも問題ありません。
