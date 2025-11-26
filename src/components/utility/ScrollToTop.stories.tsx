import type { Meta, StoryObj } from "@storybook/react";
import { ScrollToTop } from "./ScrollToTop";

const meta: Meta<typeof ScrollToTop> = {
	title: "Utility/ScrollToTop",
	component: ScrollToTop,
	parameters: {
		layout: "fullscreen",
		docs: {
			description: {
				component: "ページトップへスクロールするボタン。一定のスクロール位置で表示されます。",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		showAfter: {
			control: { type: "number" },
			description: "ボタンを表示するスクロール位置（px）",
		},
		position: {
			control: { type: "select" },
			options: ["bottom-right", "bottom-left", "bottom-center"],
		},
		smooth: {
			control: { type: "boolean" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof ScrollToTop>;

/**
 * デフォルトのScrollToTopボタン（右下配置）
 */
export const Default: Story = {
	args: {
		showAfter: 300,
		position: "bottom-right",
		smooth: true,
	},
	decorators: [
		(Story) => (
			<div>
				<div className="h-[150vh] p-8 bg-gradient-to-b from-gray-100 to-gray-300">
					<h1 className="text-3xl font-bold mb-4">スクロールしてボタンを表示</h1>
					<p className="text-gray-700">
						このページを300px以上スクロールすると、右下にScrollToTopボタンが表示されます。
					</p>
				</div>
				<Story />
			</div>
		),
	],
};

/**
 * 左下配置
 */
export const BottomLeft: Story = {
	args: {
		position: "bottom-left",
	},
	decorators: [
		(Story) => (
			<div>
				<div className="h-[150vh] p-8 bg-gradient-to-b from-blue-100 to-blue-300">
					<h1 className="text-3xl font-bold mb-4">左下配置</h1>
					<p className="text-gray-700">ボタンが左下に表示されます。</p>
				</div>
				<Story />
			</div>
		),
	],
};

/**
 * 中央下配置
 */
export const BottomCenter: Story = {
	args: {
		position: "bottom-center",
	},
	decorators: [
		(Story) => (
			<div>
				<div className="h-[150vh] p-8 bg-gradient-to-b from-green-100 to-green-300">
					<h1 className="text-3xl font-bold mb-4">中央下配置</h1>
					<p className="text-gray-700">ボタンが中央下に表示されます。</p>
				</div>
				<Story />
			</div>
		),
	],
};

/**
 * 早めに表示（100pxスクロール後）
 */
export const EarlyShow: Story = {
	args: {
		showAfter: 100,
	},
	decorators: [
		(Story) => (
			<div>
				<div className="h-[150vh] p-8 bg-gradient-to-b from-purple-100 to-purple-300">
					<h1 className="text-3xl font-bold mb-4">早めに表示</h1>
					<p className="text-gray-700">100pxスクロールするとボタンが表示されます。</p>
				</div>
				<Story />
			</div>
		),
	],
};
