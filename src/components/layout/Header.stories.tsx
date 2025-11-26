import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
	title: "Layout/Header",
	component: Header,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Header>;

/**
 * デフォルトのヘッダー表示
 */
export const Default: Story = {
	args: {},
	parameters: {
		docs: {
			description: {
				story: "通常のヘッダー表示です。ナビゲーションメニューと言語切り替えが含まれています。",
			},
		},
	},
};

/**
 * シンプルなヘッダー（ロゴのみ）
 */
export const Simple: Story = {
	args: {
		simple: true,
	},
	parameters: {
		docs: {
			description: {
				story: "ロゴのみを表示するシンプルなヘッダーです。",
			},
		},
	},
};

/**
 * ホームページ用のヘッダー
 */
export const Home: Story = {
	args: {
		isHome: true,
	},
	parameters: {
		docs: {
			description: {
				story: "ホームページ用のヘッダーです。ロゴがh1タグでレンダリングされます。",
			},
		},
	},
};
