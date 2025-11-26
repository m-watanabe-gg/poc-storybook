import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";

const meta: Meta<typeof Badge> = {
	title: "Foundation/Badge",
	component: Badge,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "secondary", "accent", "success", "warning", "danger", "info", "outline"],
			description: "バッジのカラーバリエーション",
		},
		size: {
			control: "select",
			options: ["sm", "default", "lg"],
			description: "バッジのサイズ",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
	args: {
		children: "バッジ",
	},
};

export const Variants: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Badge>デフォルト</Badge>
			<Badge variant="secondary">セカンダリー</Badge>
			<Badge variant="accent">アクセント</Badge>
			<Badge variant="success">成功</Badge>
			<Badge variant="warning">警告</Badge>
			<Badge variant="danger">危険</Badge>
			<Badge variant="info">情報</Badge>
			<Badge variant="outline">アウトライン</Badge>
		</div>
	),
};

export const Sizes: Story = {
	render: () => (
		<div className="flex items-center gap-2">
			<Badge size="sm">小</Badge>
			<Badge size="default">デフォルト</Badge>
			<Badge size="lg">大</Badge>
		</div>
	),
};

export const WithIcon: Story = {
	render: () => (
		<div className="flex flex-wrap gap-2">
			<Badge icon={<span>✓</span>} variant="success">
				完了
			</Badge>
			<Badge icon={<span>!</span>} variant="warning">
				注意
			</Badge>
			<Badge icon={<span>×</span>} variant="danger">
				エラー
			</Badge>
			<Badge icon={<span>ℹ</span>} variant="info">
				情報
			</Badge>
		</div>
	),
};

export const InContext: Story = {
	render: () => (
		<div className="space-y-4">
			<div>
				<h3 className="text-lg font-bold inline-block">
					記事タイトル <Badge variant="accent">新着</Badge>
				</h3>
			</div>
			<div>
				<p>
					タスク <Badge size="sm">3</Badge>
				</p>
			</div>
			<div className="flex items-center gap-2">
				<span>ステータス:</span>
				<Badge variant="success">公開中</Badge>
			</div>
		</div>
	),
};
