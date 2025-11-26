# GitHub Actions Workflows

## deploy-storybook.yml

このワークフローは、Storybook を自動的に GitHub Pages にデプロイします。

### セットアップ手順

1. **GitHub Pages を有効化**

    - リポジトリの Settings > Pages に移動
    - Source を "GitHub Actions" に設定

2. **main ブランチにプッシュ**

    ```bash
    git add .
    git commit -m "Deploy Storybook to GitHub Pages"
    git push origin main
    ```

3. **デプロイ完了**
    - Actions タブでデプロイの進行状況を確認
    - 完了後、`https://<username>.github.io/<repository>/` でアクセス可能
    - ベースパスは自動的にリポジトリ名に設定されます

### 手動トリガー

GitHub の Actions タブから手動で実行することも可能です。

### カスタムドメイン

Settings > Pages でカスタムドメインを設定できます。カスタムドメインを使用する場合は、`.storybook/main.ts` の `STORYBOOK_BASE_PATH` 環境変数を空文字列に設定してください。

### その他のデプロイ方法

#### Chromatic（推奨・ビジュアルテスト機能付き）

```bash
bun run chromatic
```

#### Vercel

```bash
bunx vercel --prod
```

#### Netlify

```bash
bunx netlify-cli deploy --prod --dir=storybook-static
```
