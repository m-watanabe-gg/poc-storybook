import type { Meta, StoryObj } from "@storybook/react";
import { CopyButton } from "./CopyButton";

const meta: Meta<typeof CopyButton> = {
	title: "Utility/CopyButton",
	component: CopyButton,
	parameters: {
		docs: {
			description: {
				component: "テキストをクリップボードにコピーするボタン。コピー成功時には視覚的なフィードバックを表示します。",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		text: {
			control: { type: "text" },
			description: "コピーするテキスト",
		},
		label: {
			control: { type: "text" },
		},
		successLabel: {
			control: { type: "text" },
		},
		variant: {
			control: { type: "select" },
			options: ["default", "outline", "ghost", "icon"],
		},
		size: {
			control: { type: "select" },
			options: ["sm", "md", "lg"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof CopyButton>;

/**
 * デフォルトのコピーボタン
 */
export const Default: Story = {
	args: {
		text: "このテキストがコピーされます",
		label: "コピー",
		successLabel: "コピーしました！",
	},
};

/**
 * アウトラインスタイル
 */
export const Outline: Story = {
	args: {
		text: "Outline variant example text",
		variant: "outline",
	},
};

/**
 * ゴーストスタイル
 */
export const Ghost: Story = {
	args: {
		text: "Ghost variant example text",
		variant: "ghost",
	},
};

/**
 * アイコンのみ
 */
export const IconOnly: Story = {
	args: {
		text: "Icon only variant example text",
		variant: "icon",
	},
};

/**
 * 小サイズ
 */
export const Small: Story = {
	args: {
		text: "Small size button",
		size: "sm",
	},
};

/**
 * 大サイズ
 */
export const Large: Story = {
	args: {
		text: "Large size button",
		size: "lg",
	},
};

/**
 * コードスニペットのコピー
 */
export const CodeSnippet: Story = {
	args: {
		text: "npm install @growgroup/styleguide",
		variant: "outline",
		size: "sm",
	},
	decorators: [
		(Story) => (
			<div className="bg-gray-900 text-white p-4 rounded-lg flex items-center justify-between">
				<code className="text-sm">npm install @growgroup/styleguide</code>
				<Story />
			</div>
		),
	],
};

/**
 * 複数のバリエーション
 */
export const AllVariants: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Default:</span>
				<CopyButton text="Default variant" variant="default" />
			</div>
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Outline:</span>
				<CopyButton text="Outline variant" variant="outline" />
			</div>
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Ghost:</span>
				<CopyButton text="Ghost variant" variant="ghost" />
			</div>
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Icon:</span>
				<CopyButton text="Icon variant" variant="icon" />
			</div>
		</div>
	),
};
