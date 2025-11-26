import type { Meta, StoryObj } from "@storybook/react";
import { HR } from "./HR";

const meta: Meta<typeof HR> = {
	title: "Foundation/HR",
	component: HR,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "dashed", "dotted", "gradient"],
			description: "区切り線のスタイル",
		},
		thickness: {
			control: "select",
			options: ["thin", "medium", "thick"],
			description: "区切り線の太さ",
		},
		spacing: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "上下の余白",
		},
	},
};

export default meta;
type Story = StoryObj<typeof HR>;

export const Default: Story = {
	args: {},
};

export const Dashed: Story = {
	args: {
		variant: "dashed",
	},
};

export const Dotted: Story = {
	args: {
		variant: "dotted",
	},
};

export const Gradient: Story = {
	args: {
		variant: "gradient",
	},
};

export const Thin: Story = {
	args: {
		thickness: "thin",
	},
};

export const Medium: Story = {
	args: {
		thickness: "medium",
	},
};

export const Thick: Story = {
	args: {
		thickness: "thick",
	},
};

export const SmallSpacing: Story = {
	args: {
		spacing: "sm",
	},
};

export const LargeSpacing: Story = {
	args: {
		spacing: "lg",
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="space-y-0">
			<p>デフォルト</p>
			<HR variant="default" />
			<p>破線</p>
			<HR variant="dashed" />
			<p>点線</p>
			<HR variant="dotted" />
			<p>グラデーション</p>
			<HR variant="gradient" />
		</div>
	),
};

export const AllThickness: Story = {
	render: () => (
		<div className="space-y-0">
			<p>細い（Thin）</p>
			<HR thickness="thin" />
			<p>中（Medium）</p>
			<HR thickness="medium" />
			<p>太い（Thick）</p>
			<HR thickness="thick" />
		</div>
	),
};

export const InContent: Story = {
	render: () => (
		<div className="max-w-2xl">
			<h2 className="text-2xl font-bold mb-4">セクション1</h2>
			<p className="mb-4">これは最初のセクションの内容です。区切り線を使って、セクションを視覚的に分離できます。</p>
			<HR />
			<h2 className="text-2xl font-bold mb-4">セクション2</h2>
			<p className="mb-4">これは2番目のセクションの内容です。異なるスタイルの区切り線を使用できます。</p>
			<HR variant="gradient" />
			<h2 className="text-2xl font-bold mb-4">セクション3</h2>
			<p>これは3番目のセクションの内容です。コンテンツの構造を明確にするのに役立ちます。</p>
		</div>
	),
};
