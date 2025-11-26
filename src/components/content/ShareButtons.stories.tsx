import type { Meta, StoryObj } from "@storybook/react";
import { ShareButtons } from "./ShareButtons";

const meta: Meta<typeof ShareButtons> = {
	title: "Components/ShareButtons",
	component: ShareButtons,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "ボタンのサイズ",
		},
		variant: {
			control: "select",
			options: ["default", "icon-only"],
			description: "表示スタイル",
		},
		platforms: {
			control: "check",
			options: ["twitter", "facebook", "line", "copy"],
			description: "表示するプラットフォーム",
		},
	},
};

export default meta;
type Story = StoryObj<typeof ShareButtons>;

export const Default: Story = {
	args: {
		url: "https://example.com",
		title: "この記事をシェアする",
	},
};

export const IconOnly: Story = {
	args: {
		url: "https://example.com",
		title: "この記事をシェアする",
		variant: "icon-only",
	},
};

export const Small: Story = {
	args: {
		url: "https://example.com",
		title: "この記事をシェアする",
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		url: "https://example.com",
		title: "この記事をシェアする",
		size: "lg",
	},
};

export const TwitterOnly: Story = {
	args: {
		url: "https://example.com",
		title: "この記事をシェアする",
		platforms: ["twitter"],
	},
};

export const CustomPlatforms: Story = {
	args: {
		url: "https://example.com",
		title: "この記事をシェアする",
		platforms: ["twitter", "line"],
	},
};

export const InArticle: Story = {
	render: () => (
		<div className="max-w-2xl">
			<article className="prose">
				<h1 className="text-3xl font-bold mb-4">記事タイトル</h1>
				<p className="text-gray-600 mb-6">2025年10月22日</p>
				<p className="mb-4">
					これは記事の内容です。ユーザーがこの記事を簡単にシェアできるように、シェアボタンを配置しています。
				</p>
				<p className="mb-6">記事の最後に配置することで、読み終わった後にすぐシェアできます。</p>
			</article>
			<div className="border-t pt-6">
				<ShareButtons url="https://example.com/article/123" title="この素晴らしい記事をチェック！" />
			</div>
		</div>
	),
};

export const MultipleLayouts: Story = {
	render: () => (
		<div className="space-y-8">
			<div>
				<h3 className="font-bold mb-2">デフォルトスタイル</h3>
				<ShareButtons url="https://example.com" title="記事タイトル" />
			</div>
			<div>
				<h3 className="font-bold mb-2">アイコンのみ</h3>
				<ShareButtons url="https://example.com" title="記事タイトル" variant="icon-only" />
			</div>
			<div>
				<h3 className="font-bold mb-2">小サイズ</h3>
				<ShareButtons url="https://example.com" title="記事タイトル" size="sm" />
			</div>
			<div>
				<h3 className="font-bold mb-2">大サイズ + アイコンのみ</h3>
				<ShareButtons url="https://example.com" title="記事タイトル" size="lg" variant="icon-only" />
			</div>
		</div>
	),
};
