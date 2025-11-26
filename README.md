# GrowGroup StyleGuide - Next.js Edition

Next.js 16、TypeScript、Storybook、Hono、Drizzle ORM を使用したモダンな Web サイト構築ソリューション。

## 特徴

-   🎨 **コンポーネント管理**: Storybook 9 で全コンポーネントを管理
-   🌍 **多言語対応**: next-intl による完全な国際化サポート（日本語/英語）
-   🎯 **型安全**: TypeScript strict モードで型安全な開発
-   ⚡ **高速**: Next.js 16 App Router + React 19 + Turbopack
-   🎨 **モダンなスタイリング**: Tailwind CSS v4
-   🔌 **フルスタック**: Hono + Drizzle ORM で API も統合
-   ♿ **アクセシビリティ**: a11y 対応コンポーネント
-   📱 **レスポンシブ**: モバイルファーストデザイン
-   🛠️ **ユーティリティ**: ScrollToTop、CopyButton、ShareButton 等の便利なコンポーネント
-   🔍 **フィルター機能**: 複数条件での絞り込み検索対応
-   ✨ **アニメーション**: Framer Motion による滑らかなスライダーと画面遷移
-   🎬 **スクロールアニメーション**: ビューポート検知による要素のアニメーション表示
-   🔗 **OGP/SEO**: 多言語対応のメタデータ自動生成と SNS 最適化

## 技術スタック

### フロントエンド

-   **Next.js 16** (App Router)
-   **React 19**
-   **TypeScript**
-   **Tailwind CSS v4**
-   **Framer Motion** (アニメーション)
-   **next-intl** (多言語対応)
-   **Noto Sans JP** (Web フォント)

### コンポーネント管理

-   **Storybook 9**
-   **Class Variance Authority** (CVA)

### バックエンド

-   **Hono** (API フレームワーク)
-   **Drizzle ORM** (データベース ORM)
-   **Zod** (バリデーション)
-   **PostgreSQL** / SQLite

### 開発ツール

-   **Biome** (Linter + Formatter)
-   **TypeScript strict mode**
-   **Bun** (パッケージマネージャー)

## セットアップ

### 必要な環境

-   Bun >= 1.0.0
-   Node.js >= 20.12.2（オプション）

### インストール

```bash
# リポジトリのクローン
git clone <repository-url>
cd poc-next-styleguide

# 依存関係のインストール
bun install

# 環境変数の設定（.env.local ファイルを作成）
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
DATABASE_URL="file:./dev.db"
```

### データベースセットアップ

```bash
# マイグレーションファイルの生成
bun run db:generate

# マイグレーションの実行
bun run db:migrate

# または、開発環境で直接スキーマをプッシュ
bun run db:push

# Drizzle Studioでデータベースを管理
bun run db:studio
```

### OGP/SEO 設定

```bash
# 1. サイトURLを環境変数に設定（.env.local）
NEXT_PUBLIC_SITE_URL="https://your-domain.com"

# 2. OGP画像を作成（1200x630px）
# public/og-image.png

# 3. 詳細な設定ガイドを参照
# docs/OGP_SETUP.md を参照
```

**主な機能:**

-   ✅ Open Graph Protocol（Facebook 等）
-   ✅ Twitter Card（X）
-   ✅ 多言語対応メタデータ（日本語/英語）
-   ✅ カノニカル URL 自動生成
-   ✅ ページごとのカスタマイズ可能

## 開発

### 開発サーバーの起動

```bash
# Next.js開発サーバー (http://localhost:3000)
bun run dev

# Storybook開発サーバー (http://localhost:6006)
bun run storybook
```

### ビルド

```bash
# Next.jsのビルド
bun run build

# Storybookのビルド（静的サイト生成）
bun run build-storybook

# ビルドしたStorybookをプレビュー
bun run preview-storybook
```

### コード品質チェック

```bash
# Linter & Formatterでチェック
bun run lint

# チェック + 自動修正
bun run check

# 自動修正（推奨）
bun run lint:fix

# フォーマットのみ
bun run format
```

### Storybook デプロイ 🚀

Storybook は静的サイト（約 10MB）として様々なプラットフォームにデプロイ可能です：

#### 1. Chromatic（推奨）

ビジュアルテスト機能付きの公式ホスティング

```bash
bun add -D chromatic
bunx chromatic --project-token=<YOUR_TOKEN>
```

公式: https://www.chromatic.com/

#### 2. Vercel

GitHub と連携で自動デプロイ

```bash
bunx vercel --prod
```

#### 3. Netlify

GitHub と連携で自動デプロイ

```bash
bunx netlify-cli deploy --prod --dir=storybook-static
```

#### 4. GitHub Pages（無料）

`.github/workflows/deploy-storybook.yml` が設定済み

1. リポジトリの Settings > Pages に移動
2. Source を "GitHub Actions" に設定
3. main ブランチにプッシュすると自動デプロイ

デプロイ後の URL: `https://<username>.github.io/<repository>/`

## プロジェクト構造

```
poc-next-styleguide/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── [locale]/          # 多言語対応ルーティング
│   │   │   ├── page.tsx       # トップページ（Hero, Features, Services, News, Cases）
│   │   │   ├── about/         # 会社概要（Overview, History, Team, Values, Office）
│   │   │   ├── cases/         # 導入事例（一覧・詳細）
│   │   │   ├── format/        # コンポーネント一覧
│   │   │   ├── contact/       # お問い合わせ
│   │   │   ├── news/          # ニュース（一覧・詳細・カテゴリ別）
│   │   │   └── layout.tsx     # レイアウト
│   │   ├── api/               # Hono API Routes
│   │   │   └── [[...route]]/  # APIエンドポイント
│   │   ├── globals.css        # グローバルスタイル
│   │   └── layout.tsx         # ルートレイアウト
│   ├── components/            # Reactコンポーネント
│   │   ├── foundation/        # 基礎コンポーネント（9個）
│   │   │   ├── Button.tsx
│   │   │   ├── Heading.tsx
│   │   │   ├── Input.tsx
│   │   │   └── ...
│   │   ├── layout/            # レイアウトコンポーネント（8個）
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Section.tsx
│   │   │   └── ...
│   │   ├── components/        # 複合コンポーネント（30個）
│   │   │   ├── Card.tsx
│   │   │   ├── Accordion.tsx
│   │   │   ├── CaseCard.tsx
│   │   │   ├── CaseSlider.tsx（新規：導入事例スライダー）
│   │   │   ├── FilterPanel.tsx
│   │   │   ├── HeroSlider.tsx（新規：背景画像スライダー）
│   │   │   ├── ScrollReveal.tsx（新規：スクロールアニメーション）
│   │   │   ├── PageTransition.tsx（新規：ページ遷移アニメーション）
│   │   │   └── ...
│   │   └── utility/           # ユーティリティコンポーネント（5個）
│   │       ├── ScrollToTop.tsx
│   │       ├── CopyButton.tsx
│   │       ├── BackButton.tsx
│   │       ├── ShareButton.tsx
│   │       └── PrintButton.tsx
│   ├── db/                    # Drizzle ORM
│   │   ├── schema.ts          # データベーススキーマ
│   │   ├── index.ts           # DB接続
│   │   └── migrations/        # マイグレーションファイル
│   ├── i18n/                  # 多言語設定
│   │   ├── config.ts
│   │   ├── request.ts
│   │   └── locales/
│   │       ├── ja.json        # 日本語翻訳
│   │       └── en.json        # 英語翻訳
│   ├── lib/                   # ユーティリティ
│   │   └── utils.ts
│   ├── styles/                # スタイル定義
│   │   └── tokens.ts          # デザイントークン
│   └── middleware.ts          # Next.js middleware
├── .storybook/               # Storybook設定
│   ├── main.ts
│   └── preview.ts
├── drizzle.config.ts         # Drizzle ORM設定
├── next.config.ts            # Next.js設定
├── tailwind.config.ts        # Tailwind CSS設定（v4ではglobals.cssに統合）
└── package.json
```

## コンポーネント開発フロー

1. **Storybook でコンポーネント開発**

    ```bash
    bun run storybook
    ```

    - `src/components/`にコンポーネントを作成
    - 同じディレクトリに`.stories.tsx`ファイルを作成
    - Storybook で動作確認

2. **ページで使用**

    - `src/app/[locale]/`配下のページで import
    - 実際の画面で動作確認

3. **品質チェック**
    ```bash
    bun run lint
    bun run build
    ```

## API 開発

### エンドポイントの追加

`src/app/api/[[...route]]/route.ts`にルートを追加：

```typescript
app.get("/your-endpoint", async (c) => {
	// 処理
	return c.json({ data: "response" });
});
```

### データベーススキーマの変更

1. `src/db/schema.ts`を編集
2. マイグレーションファイルを生成
    ```bash
    bun run db:generate
    ```
3. マイグレーションを実行
    ```bash
    bun run db:migrate
    ```

## 多言語対応

### 翻訳の追加

1. `src/i18n/locales/ja.json`と`en.json`に翻訳を追加
2. コンポーネントで使用：

    ```tsx
    import { useTranslations } from "next-intl";

    const t = useTranslations("common");
    return <h1>{t("title")}</h1>;
    ```

## デザイントークン

デザイントークンは`src/styles/tokens.ts`と`src/app/globals.css`で定義されています。

### カラー

-   Primary: `#297B50`
-   Secondary: `#f9f7f0`
-   Accent: `#F44336`

### ブレークポイント

-   sm: `750px`
-   md: `950px`
-   lg: `1140px`
-   xl: `1440px`

### スペーシング

-   Section: xlg(120px/60px), lg(100px/50px), md(80px/40px), sm(64px/32px), xs(32px/16px)

## 最新の実装内容

### Phase 1: Utility コンポーネント（2025 年 10 月）

-   ScrollToTop: ページトップへスクロールするボタン
-   CopyButton: テキストをクリップボードにコピー
-   BackButton: 前のページに戻るボタン
-   ShareButton: SNS シェア機能
-   PrintButton: ページ印刷機能

### Phase 2: Home ページ充実

-   Hero Section: グラデーション背景のヒーローセクション
-   Features Section: 6 つの特徴カード
-   Services Section: 4 つのサービス概要
-   News Section: 最新ニュース 3 件表示
-   Case Studies Section: 導入事例プレビュー
-   CTA Section: お問い合わせへの誘導

### Phase 3: About ページ充実

-   Company Overview: 会社概要（Table 形式）
-   History Section: 会社の沿革（タイムライン形式）
-   Team Section: チームメンバー紹介（4 名）
-   Values Section: 企業理念（3 つのバリュー）
-   Office Section: オフィス写真・アクセス情報

### Phase 4: 導入事例用コンポーネント

-   CaseCard: 導入事例専用カード（業種・製品・課題のバッジ表示）
-   FilterPanel: チェックボックスフィルター + 検索ボックス統合

### Phase 5: 導入事例一覧ページ

-   フィルタリング機能（業種・製品・課題）
-   キーワード検索機能
-   ページネーション（6 件/ページ）
-   レスポンシブ対応のグリッドレイアウト

### Phase 6: 導入事例詳細ページ

-   導入概要（課題・ソリューション・効果）
-   ユーザーインタビュー（Accordion 形式）
-   ギャラリー（Lightbox 対応）
-   関連事例（3 件表示）
-   CTA Section

### Phase 7: アニメーション機能（Framer Motion 統合）

#### 新規コンポーネント

-   **HeroSlider**: 背景画像スライダー（自動再生、矢印ナビゲーション、インジケーター）
-   **CaseSlider**: 導入事例スライダー（3 カラム表示、矢印ナビゲーション）
-   **ScrollReveal**: スクロールアニメーション（fadeIn, slideUp, slideDown, slideLeft, slideRight, scale）
-   **PageTransition**: ページ遷移アニメーション（fade, slide, scale, slideUp, slideDown）

#### Home ページ統合

-   Hero Section → HeroSlider に置き換え（3 枚のスライド）
-   Features Section → ScrollReveal 適用（各カードに遅延付きアニメーション）
-   Services Section → ScrollReveal 適用（scale アニメーション）
-   News Section → ScrollReveal 適用（slideUp アニメーション）
-   Case Studies Section → CaseSlider に置き換え（6 件のケースをスライド表示）
-   CTA Section → ScrollReveal 適用（scale アニメーション）

#### グローバル設定

-   ページ遷移アニメーションを全ページに適用（fade, 0.3s）
-   PageTransitionWrapper を layout.tsx に統合

#### 特徴

-   スムーズなスライドアニメーション（spring physics）
-   ビューポート検知による要素のアニメーション表示
-   レスポンシブ対応（モバイル/タブレット/デスクトップ）
-   パフォーマンス最適化（`once` オプション、適切な `threshold` 設定）
-   アクセシビリティ対応（aria-label、focus 管理）

#### Storybook 対応

-   全コンポーネントに Stories ファイルを作成
-   複数のバリエーション（Default, ManualOnly, NoIndicators, NoArrows 等）
-   インタラクティブなコントロール（autoPlayInterval, duration, delay 等）

## ライセンス

ISC

## ドキュメント

-   [OGP/SEO 設定ガイド](./docs/OGP_SETUP.md) - メタデータと OGP 設定の詳細
-   [Next.js レンダリング解説](./docs/NEXT_RENDERING.md) - `"use client"` の仕組みを理解する
-   [レンダリング実験デモ](./docs/NEXT_RENDERING_DEMO.md) - 実際に動作を確認する手順
-   [パフォーマンス最適化ガイド](./docs/PERFORMANCE_OPTIMIZATION.md) - パフォーマンス改善の戦略と実装方法

## 参考

-   [Next.js Documentation](https://nextjs.org/docs)
-   [Storybook Documentation](https://storybook.js.org/docs)
-   [Tailwind CSS Documentation](https://tailwindcss.com/docs)
-   [Framer Motion Documentation](https://www.framer.com/motion/)
-   [Drizzle ORM Documentation](https://orm.drizzle.team/docs)
-   [Hono Documentation](https://hono.dev/)
-   [next-intl Documentation](https://next-intl.dev/)
