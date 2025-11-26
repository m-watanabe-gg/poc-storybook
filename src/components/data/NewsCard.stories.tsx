import type { Meta, StoryObj } from "@storybook/react";
import { NewsCard } from "./NewsCard";

const meta: Meta<typeof NewsCard> = {
	title: "Components/NewsCard",
	component: NewsCard,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		layout: {
			control: "select",
			options: ["vertical", "horizontal"],
			description: "カードのレイアウト",
		},
		categoryVariant: {
			control: "select",
			options: ["default", "accent", "info", "success"],
			description: "カテゴリバッジのカラー",
		},
	},
};

export default meta;
type Story = StoryObj<typeof NewsCard>;

export const Default: Story = {
	args: {
		title: "Next.js 16がリリースされました",
		description:
			"Next.js 16の新機能と改善点について詳しく解説します。パフォーマンスの向上やReact 19のサポートなど、多くの新機能が追加されています。",
		image: "https://placehold.co/400x300/297B50/FFFFFF?text=News",
		date: "2025-10-22",
		category: "ニュース",
		href: "#",
	},
};

export const WithoutImage: Story = {
	args: {
		title: "テキストのみの記事タイトル",
		description: "画像なしでも読みやすいカードデザインです。",
		date: "2025-10-21",
		category: "お知らせ",
		categoryVariant: "info",
		href: "#",
	},
};

export const Horizontal: Story = {
	args: {
		layout: "horizontal",
		title: "横レイアウトのニュースカード",
		description: "横並びレイアウトでコンパクトに表示できます。",
		image: "https://placehold.co/200x200/F44336/FFFFFF?text=Blog",
		date: "2025-10-20",
		category: "ブログ",
		categoryVariant: "accent",
		href: "#",
	},
};

export const LongTitle: Story = {
	args: {
		title:
			"これは非常に長いタイトルの例です。長すぎる場合は省略記号で表示されます。複数行にわたる場合でも適切に処理されます。",
		description:
			"長いタイトルと説明文のテストです。説明文も長くなった場合は、3行で切り捨てられ、省略記号が表示されます。これによりカードの高さが一定に保たれます。",
		image: "https://placehold.co/400x300/4CAF50/FFFFFF?text=Event",
		date: "2025-10-19",
		category: "イベント",
		categoryVariant: "success",
		href: "#",
	},
};

export const Grid: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<NewsCard
				title="記事タイトル1"
				description="記事の説明文です。"
				image="https://placehold.co/400x300/297B50/FFFFFF?text=Article+1"
				date="2025-10-22"
				category="ニュース"
				href="#"
			/>
			<NewsCard
				title="記事タイトル2"
				description="別の記事の説明です。"
				image="https://placehold.co/400x300/F44336/FFFFFF?text=Article+2"
				date="2025-10-21"
				category="ブログ"
				categoryVariant="accent"
				href="#"
			/>
			<NewsCard
				title="記事タイトル3"
				description="さらに別の記事。"
				image="https://placehold.co/400x300/4CAF50/FFFFFF?text=Article+3"
				date="2025-10-20"
				category="イベント"
				categoryVariant="success"
				href="#"
			/>
			<NewsCard
				title="記事タイトル4"
				description="4つ目の記事です。"
				image="https://placehold.co/400x300/2196F3/FFFFFF?text=Article+4"
				date="2025-10-19"
				category="プレスリリース"
				categoryVariant="info"
				href="#"
			/>
			<NewsCard
				title="記事タイトル5"
				description="5つ目の記事。"
				image="https://placehold.co/400x300/9C27B0/FFFFFF?text=Article+5"
				date="2025-10-18"
				category="お知らせ"
				href="#"
			/>
			<NewsCard
				title="記事タイトル6"
				description="6つ目の記事です。"
				image="https://placehold.co/400x300/FF9800/FFFFFF?text=Article+6"
				date="2025-10-17"
				category="更新情報"
				categoryVariant="info"
				href="#"
			/>
		</div>
	),
};

export const HorizontalList: Story = {
	render: () => (
		<div className="space-y-4 max-w-4xl">
			<NewsCard
				layout="horizontal"
				title="横レイアウトの記事1"
				description="コンパクトに表示できます。"
				image="https://placehold.co/200x200/297B50/FFFFFF?text=1"
				date="2025-10-22"
				category="ニュース"
				href="#"
			/>
			<NewsCard
				layout="horizontal"
				title="横レイアウトの記事2"
				description="リスト形式での表示に最適。"
				image="https://placehold.co/200x200/F44336/FFFFFF?text=2"
				date="2025-10-21"
				category="ブログ"
				categoryVariant="accent"
				href="#"
			/>
			<NewsCard
				layout="horizontal"
				title="横レイアウトの記事3"
				description="スペースを有効活用できます。"
				image="https://placehold.co/200x200/4CAF50/FFFFFF?text=3"
				date="2025-10-20"
				category="イベント"
				categoryVariant="success"
				href="#"
			/>
		</div>
	),
};
