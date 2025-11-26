import type { Meta, StoryObj } from "@storybook/react";
import { PrintButton } from "./PrintButton";

const meta: Meta<typeof PrintButton> = {
	title: "Utility/PrintButton",
	component: PrintButton,
	parameters: {
		docs: {
			description: {
				component: "ページを印刷するボタン。クリックするとブラウザの印刷ダイアログが開きます。",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		label: {
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
type Story = StoryObj<typeof PrintButton>;

/**
 * デフォルトの印刷ボタン
 */
export const Default: Story = {
	args: {
		label: "印刷",
		onPrint: () => alert("印刷ダイアログが開きます"),
	},
};

/**
 * アウトラインスタイル
 */
export const Outline: Story = {
	args: {
		variant: "outline",
		onPrint: () => alert("印刷ダイアログが開きます"),
	},
};

/**
 * ゴーストスタイル
 */
export const Ghost: Story = {
	args: {
		variant: "ghost",
		onPrint: () => alert("印刷ダイアログが開きます"),
	},
};

/**
 * アイコンのみ
 */
export const IconOnly: Story = {
	args: {
		variant: "icon",
		onPrint: () => alert("印刷ダイアログが開きます"),
	},
};

/**
 * 小サイズ
 */
export const Small: Story = {
	args: {
		size: "sm",
		onPrint: () => alert("印刷ダイアログが開きます"),
	},
};

/**
 * 大サイズ
 */
export const Large: Story = {
	args: {
		size: "lg",
		onPrint: () => alert("印刷ダイアログが開きます"),
	},
};

/**
 * カスタムラベル
 */
export const CustomLabel: Story = {
	args: {
		label: "このページを印刷",
		variant: "outline",
		onPrint: () => alert("印刷ダイアログが開きます"),
	},
};

/**
 * 記事の印刷例
 */
export const ArticlePrint: Story = {
	args: {
		variant: "outline",
		size: "sm",
		onPrint: () => alert("記事を印刷します"),
	},
	decorators: [
		(Story) => (
			<div className="max-w-2xl mx-auto p-8 bg-white rounded-lg shadow">
				<article>
					<h1 className="text-3xl font-bold mb-4">重要なお知らせ</h1>
					<p className="text-gray-600 mb-4">2025年10月24日</p>
					<p className="text-gray-700 mb-6">
						この記事は印刷可能です。印刷ボタンをクリックすると、ブラウザの印刷ダイアログが開きます。印刷プレビューで内容を確認してから印刷してください。
					</p>
				</article>
				<div className="border-t pt-4 mt-6 flex items-center justify-between">
					<p className="text-sm text-gray-600">この記事を保存:</p>
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
		<div className="space-y-4">
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Default:</span>
				<PrintButton variant="default" onPrint={() => console.log("Print clicked")} />
			</div>
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Outline:</span>
				<PrintButton variant="outline" onPrint={() => console.log("Print clicked")} />
			</div>
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Ghost:</span>
				<PrintButton variant="ghost" onPrint={() => console.log("Print clicked")} />
			</div>
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Icon:</span>
				<PrintButton variant="icon" onPrint={() => console.log("Print clicked")} />
			</div>
		</div>
	),
};
