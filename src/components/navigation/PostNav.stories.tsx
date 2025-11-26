import type { Meta, StoryObj } from "@storybook/react";
import { PostNav } from "./PostNav";

const meta: Meta<typeof PostNav> = {
	title: "Components/PostNav",
	component: PostNav,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		layout: {
			control: "select",
			options: ["horizontal", "vertical"],
			description: "レイアウト",
		},
	},
};

export default meta;
type Story = StoryObj<typeof PostNav>;

export const Default: Story = {
	args: {
		prevPost: {
			title: "Next.js 16の新機能について",
			href: "/posts/nextjs-15",
			date: "2025-10-20",
			category: "技術",
		},
		nextPost: {
			title: "TypeScriptのベストプラクティス",
			href: "/posts/typescript-best-practices",
			date: "2025-10-22",
			category: "技術",
		},
	},
};

export const PrevOnly: Story = {
	args: {
		prevPost: {
			title: "前の記事タイトル",
			href: "/posts/prev",
			date: "2025-10-21",
			category: "ニュース",
		},
	},
};

export const NextOnly: Story = {
	args: {
		nextPost: {
			title: "次の記事タイトル",
			href: "/posts/next",
			date: "2025-10-23",
			category: "ブログ",
		},
	},
};

export const WithoutMeta: Story = {
	args: {
		prevPost: {
			title: "シンプルな前の記事",
			href: "/posts/prev",
		},
		nextPost: {
			title: "シンプルな次の記事",
			href: "/posts/next",
		},
	},
};

export const LongTitles: Story = {
	args: {
		prevPost: {
			title:
				"これは非常に長いタイトルの例です。長すぎる場合は省略記号で表示されます。複数行にわたる場合でも適切に処理されます。",
			href: "/posts/long-prev",
			date: "2025-10-18",
			category: "技術解説",
		},
		nextPost: {
			title: "次の記事も同様に長いタイトルを持っています。2行で切り捨てられ、読みやすく表示されます。",
			href: "/posts/long-next",
			date: "2025-10-24",
			category: "チュートリアル",
		},
	},
};

export const Vertical: Story = {
	args: {
		layout: "vertical",
		prevPost: {
			title: "縦レイアウトの前の記事",
			href: "/posts/prev",
			date: "2025-10-21",
			category: "デザイン",
		},
		nextPost: {
			title: "縦レイアウトの次の記事",
			href: "/posts/next",
			date: "2025-10-23",
			category: "開発",
		},
	},
};

export const InBlogPost: Story = {
	render: () => (
		<div className="max-w-4xl mx-auto">
			<article className="prose mb-8">
				<h1>記事タイトル</h1>
				<p>
					これは記事の本文です。記事の最後に前後のナビゲーションを配置することで、読者が関連記事に簡単に移動できます。
				</p>
				<p>記事の内容が続きます...</p>
			</article>

			<div className="border-t pt-8">
				<PostNav
					prevPost={{
						title: "Reactの基礎を学ぶ",
						href: "/posts/react-basics",
						date: "2025-10-20",
						category: "入門",
					}}
					nextPost={{
						title: "Next.jsでアプリを構築する",
						href: "/posts/nextjs-app",
						date: "2025-10-22",
						category: "実践",
					}}
				/>
			</div>
		</div>
	),
};

export const Styled: Story = {
	render: () => (
		<div className="space-y-8">
			<div className="bg-gray-50 p-6 rounded">
				<h3 className="font-bold mb-4">デフォルトスタイル</h3>
				<PostNav
					prevPost={{
						title: "前の記事",
						href: "#",
						date: "2025-10-20",
						category: "技術",
					}}
					nextPost={{
						title: "次の記事",
						href: "#",
						date: "2025-10-22",
						category: "デザイン",
					}}
				/>
			</div>

			<div className="bg-primary/5 p-6 rounded">
				<h3 className="font-bold mb-4">カスタムスタイル</h3>
				<PostNav
					prevPost={{
						title: "カスタマイズされた前の記事",
						href: "#",
						date: "2025-10-21",
					}}
					nextPost={{
						title: "カスタマイズされた次の記事",
						href: "#",
						date: "2025-10-23",
					}}
				/>
			</div>
		</div>
	),
};
