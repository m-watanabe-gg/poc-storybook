import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../foundation/Button";
import { Box } from "./Box";

const meta: Meta<typeof Box> = {
	title: "Components/Box",
	component: Box,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "filled", "primary", "secondary", "accent", "outline"],
			description: "ボックスのバリアント",
		},
		padding: {
			control: "select",
			options: ["none", "sm", "md", "lg", "xl"],
			description: "内側の余白",
		},
		shadow: {
			control: "select",
			options: ["none", "sm", "md", "lg"],
			description: "影のサイズ",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {
	args: {
		children: <p>これはデフォルトのボックスです。様々なコンテンツを配置できます。</p>,
	},
};

export const WithTitle: Story = {
	args: {
		title: "ボックスタイトル",
		children: (
			<div>
				<p className="mb-4">タイトル付きのボックスです。</p>
				<p>複数段落のコンテンツも配置できます。</p>
			</div>
		),
	},
};

export const WithTitleAndAction: Story = {
	args: {
		title: "お知らせ",
		action: (
			<Button variant="outline" size="sm">
				すべて見る →
			</Button>
		),
		children: (
			<ul className="space-y-2">
				<li className="pb-2 border-b">新機能リリースのお知らせ</li>
				<li className="pb-2 border-b">メンテナンス情報</li>
				<li>サービス改善について</li>
			</ul>
		),
	},
};

export const WithFooter: Story = {
	args: {
		title: "アカウント情報",
		children: (
			<div className="space-y-2">
				<div className="flex justify-between">
					<span className="text-gray-600">名前:</span>
					<span className="font-medium">山田 太郎</span>
				</div>
				<div className="flex justify-between">
					<span className="text-gray-600">メール:</span>
					<span className="font-medium">yamada@example.com</span>
				</div>
			</div>
		),
		footer: (
			<div className="flex justify-end gap-2">
				<Button variant="outline" size="sm">
					キャンセル
				</Button>
				<Button size="sm">保存</Button>
			</div>
		),
	},
};

export const Filled: Story = {
	args: {
		variant: "filled",
		title: "塗りつぶしスタイル",
		children: <p>背景が灰色のボックスです。</p>,
	},
};

export const Primary: Story = {
	args: {
		variant: "primary",
		title: "プライマリースタイル",
		children: <p>プライマリーカラーのボックスです。重要な情報の表示に適しています。</p>,
	},
};

export const Accent: Story = {
	args: {
		variant: "accent",
		title: "アクセントスタイル",
		children: <p>アクセントカラーのボックスです。注意を引きたい場合に使用します。</p>,
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		title: "アウトラインスタイル",
		children: <p>枠線のみのシンプルなボックスです。</p>,
	},
};

export const WithShadow: Story = {
	args: {
		title: "影付きボックス",
		shadow: "md",
		children: <p>影が付いたボックスで、立体感を表現できます。</p>,
	},
};

export const SmallPadding: Story = {
	args: {
		title: "小さい余白",
		padding: "sm",
		children: <p>コンパクトな表示に適しています。</p>,
	},
};

export const LargePadding: Story = {
	args: {
		title: "大きい余白",
		padding: "lg",
		children: <p>ゆとりのある表示です。</p>,
	},
};

export const NoPadding: Story = {
	args: {
		title: "余白なし",
		padding: "none",
		children: (
			<div className="p-4">
				<p>paddingをnoneにして、子要素で自由に調整できます。</p>
			</div>
		),
	},
};

export const InfoCard: Story = {
	render: () => (
		<Box
			variant="primary"
			shadow="sm"
			title="📢 重要なお知らせ"
			action={<span className="text-xs text-gray-600">2025年10月22日</span>}
		>
			<p className="mb-4">システムメンテナンスのため、以下の日時でサービスを一時停止いたします。</p>
			<div className="bg-white/50 p-3 rounded text-sm">
				<strong>日時:</strong> 2025年10月25日 2:00 - 6:00
			</div>
		</Box>
	),
};

export const DashboardCard: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			<Box variant="default" shadow="sm" padding="lg">
				<div className="text-center">
					<div className="text-3xl font-bold text-primary mb-2">1,234</div>
					<div className="text-sm text-gray-600">総訪問者数</div>
				</div>
			</Box>
			<Box variant="default" shadow="sm" padding="lg">
				<div className="text-center">
					<div className="text-3xl font-bold text-accent mb-2">567</div>
					<div className="text-sm text-gray-600">新規ユーザー</div>
				</div>
			</Box>
			<Box variant="default" shadow="sm" padding="lg">
				<div className="text-center">
					<div className="text-3xl font-bold text-success mb-2">89%</div>
					<div className="text-sm text-gray-600">満足度</div>
				</div>
			</Box>
		</div>
	),
};

export const AllVariants: Story = {
	render: () => (
		<div className="space-y-4">
			<Box variant="default" title="Default">
				デフォルトスタイル
			</Box>
			<Box variant="filled" title="Filled">
				塗りつぶしスタイル
			</Box>
			<Box variant="primary" title="Primary">
				プライマリースタイル
			</Box>
			<Box variant="secondary" title="Secondary">
				セカンダリースタイル
			</Box>
			<Box variant="accent" title="Accent">
				アクセントスタイル
			</Box>
			<Box variant="outline" title="Outline">
				アウトラインスタイル
			</Box>
		</div>
	),
};
