import type { Meta, StoryObj } from "@storybook/react";
import { Blockquote } from "./Blockquote";

const meta: Meta<typeof Blockquote> = {
	title: "Foundation/Blockquote",
	component: Blockquote,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "bordered", "highlight"],
			description: "引用のスタイル",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Blockquote>;

export const Default: Story = {
	args: {
		children: "成功は最終的なものではなく、失敗は致命的なものではない。重要なのは続ける勇気である。",
		citeName: "ウィンストン・チャーチル",
	},
};

export const Bordered: Story = {
	args: {
		variant: "bordered",
		children: "未来を予測する最良の方法は、それを創造することだ。",
		citeName: "ピーター・ドラッカー",
	},
};

export const Highlight: Story = {
	args: {
		variant: "highlight",
		children: "重要な情報やハイライトしたい引用文に使用できます。",
		citeName: "著者名",
	},
};

export const WithCite: Story = {
	args: {
		children: "プログラミングとは、人間が機械に命令を与えるための芸術である。",
		cite: "https://example.com",
		citeName: "プログラミングの基礎",
	},
};

export const LongQuote: Story = {
	args: {
		children:
			"これは長い引用文の例です。複数行にわたる引用文でも適切にレイアウトされます。デザインシステムにおいて、一貫性のある引用スタイルを提供することは、コンテンツの可読性を高め、ユーザー体験を向上させる重要な要素です。",
		citeName: "デザインシステムガイド",
	},
};

export const InArticle: Story = {
	render: () => (
		<div className="max-w-2xl space-y-4">
			<p>デザインシステムは、プロダクト開発において重要な役割を果たします。以下のような利点があります。</p>
			<Blockquote variant="default" citeName="Design Systems Handbook">
				デザインシステムは、再利用可能なコンポーネントとパターンの集合体であり、一貫性のあるユーザー体験を提供します。
			</Blockquote>
			<p>このように、デザインシステムを導入することで、開発効率が向上し、一貫性のあるデザインを維持できます。</p>
			<Blockquote variant="highlight">
				デザインシステムは単なるUIキットではなく、組織全体のデザイン言語です。
			</Blockquote>
		</div>
	),
};

export const AllVariants: Story = {
	render: () => (
		<div className="space-y-8 max-w-2xl">
			<Blockquote variant="default" citeName="デフォルトスタイル">
				これはデフォルトの引用スタイルです。左側のボーダーとイタリック体が特徴です。
			</Blockquote>
			<Blockquote variant="bordered" citeName="ボーダースタイル">
				これはボーダースタイルの引用です。背景色と全体のボーダーが特徴です。
			</Blockquote>
			<Blockquote variant="highlight" citeName="ハイライトスタイル">
				これはハイライトスタイルの引用です。アクセントカラーで強調されます。
			</Blockquote>
		</div>
	),
};
