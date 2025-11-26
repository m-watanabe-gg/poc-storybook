import type { Meta, StoryObj } from "@storybook/react";
import { BackButton } from "./BackButton";

const meta: Meta<typeof BackButton> = {
	title: "Utility/BackButton",
	component: BackButton,
	parameters: {
		docs: {
			description: {
				component: "前のページに戻るボタン。Next.jsのルーター機能と統合されています。",
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
type Story = StoryObj<typeof BackButton>;

/**
 * デフォルトの戻るボタン
 */
export const Default: Story = {
	args: {
		label: "戻る",
		onBack: () => alert("前のページに戻ります"),
	},
};

/**
 * アウトラインスタイル
 */
export const Outline: Story = {
	args: {
		variant: "outline",
		onBack: () => alert("前のページに戻ります"),
	},
};

/**
 * ゴーストスタイル
 */
export const Ghost: Story = {
	args: {
		variant: "ghost",
		onBack: () => alert("前のページに戻ります"),
	},
};

/**
 * アイコンのみ
 */
export const IconOnly: Story = {
	args: {
		variant: "icon",
		onBack: () => alert("前のページに戻ります"),
	},
};

/**
 * 小サイズ
 */
export const Small: Story = {
	args: {
		size: "sm",
		onBack: () => alert("前のページに戻ります"),
	},
};

/**
 * 大サイズ
 */
export const Large: Story = {
	args: {
		size: "lg",
		onBack: () => alert("前のページに戻ります"),
	},
};

/**
 * カスタムラベル
 */
export const CustomLabel: Story = {
	args: {
		label: "一覧に戻る",
		variant: "outline",
		onBack: () => alert("一覧ページに戻ります"),
	},
};

/**
 * 複数のバリエーション
 */
export const AllVariants: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Default:</span>
				<BackButton variant="default" onBack={() => console.log("Back clicked")} />
			</div>
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Outline:</span>
				<BackButton variant="outline" onBack={() => console.log("Back clicked")} />
			</div>
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Ghost:</span>
				<BackButton variant="ghost" onBack={() => console.log("Back clicked")} />
			</div>
			<div className="flex gap-4 items-center">
				<span className="w-24 text-sm text-gray-600">Icon:</span>
				<BackButton variant="icon" onBack={() => console.log("Back clicked")} />
			</div>
		</div>
	),
};
