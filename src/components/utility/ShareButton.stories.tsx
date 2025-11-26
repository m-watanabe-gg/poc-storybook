import type { Meta, StoryObj } from "@storybook/react";
import { ShareButton } from "./ShareButton";

const meta: Meta<typeof ShareButton> = {
	title: "Utility/ShareButton",
	component: ShareButton,
	parameters: {
		docs: {
			description: {
				component: "SNSシェアボタン。Twitter、Facebook、URLコピー機能を提供します。",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		url: {
			control: { type: "text" },
			description: "シェアするURL",
		},
		title: {
			control: { type: "text" },
			description: "シェアするタイトル",
		},
		platforms: {
			control: { type: "object" },
		},
		variant: {
			control: { type: "select" },
			options: ["default", "icon"],
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof ShareButton>;

/**
 * デフォルトのシェアボタン（全てのプラットフォーム）
 */
export const Default: Story = {
	args: {
		url: "https://example.com/article",
		title: "素晴らしい記事タイトル",
	},
};

/**
 * アイコンのみ
 */
export const IconOnly: Story = {
	args: {
		url: "https://example.com/article",
		title: "素晴らしい記事タイトル",
		variant: "icon",
	},
};

/**
 * Twitterのみ
 */
export const TwitterOnly: Story = {
	args: {
		url: "https://example.com/article",
		title: "素晴らしい記事タイトル",
		platforms: ["twitter"],
	},
};

/**
 * 主要SNSのみ
 */
export const MainPlatforms: Story = {
	args: {
		url: "https://example.com/article",
		title: "素晴らしい記事タイトル",
		platforms: ["twitter", "facebook"],
		variant: "icon",
	},
};

/**
 * 小サイズ
 */
export const Small: Story = {
	args: {
		url: "https://example.com/article",
		title: "素晴らしい記事タイトル",
		size: "sm",
		variant: "icon",
	},
};

/**
 * 大サイズ
 */
export const Large: Story = {
	args: {
		url: "https://example.com/article",
		title: "素晴らしい記事タイトル",
		size: "lg",
	},
};

/**
 * 記事の下に配置する例
 */
export const ArticleFooter: Story = {
	args: {
		url: "https://example.com/article/introduction-to-nextjs",
		title: "Next.js入門ガイド",
		variant: "icon",
	},
	decorators: [
		(Story) => (
			<div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow">
				<article>
					<h1 className="text-3xl font-bold mb-4">Next.js入門ガイド</h1>
					<p className="text-gray-600 mb-4">2025年10月24日</p>
					<p className="text-gray-700 mb-6">
						Next.jsは、Reactベースの強力なフレームワークです。サーバーサイドレンダリング、静的サイト生成、APIルートなど、モダンなWeb開発に必要な機能を提供します。
					</p>
				</article>
				<div className="border-t pt-4 mt-6">
					<p className="text-sm text-gray-600 mb-2">この記事をシェア:</p>
					<Story />
				</div>
			</div>
		),
	],
};

/**
 * 複数のバリエーション
 */
export const AllVariants: Story = {
	render: () => (
		<div className="space-y-6">
			<div>
				<p className="text-sm text-gray-600 mb-2">Default with labels:</p>
				<ShareButton url="https://example.com" title="Example" variant="default" />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Icon only:</p>
				<ShareButton url="https://example.com" title="Example" variant="icon" />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Small size:</p>
				<ShareButton url="https://example.com" title="Example" variant="icon" size="sm" />
			</div>
			<div>
				<p className="text-sm text-gray-600 mb-2">Large size:</p>
				<ShareButton url="https://example.com" title="Example" variant="icon" size="lg" />
			</div>
		</div>
	),
};
