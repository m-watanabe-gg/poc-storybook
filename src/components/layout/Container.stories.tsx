import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
	title: "Layout/Container",
	component: Container,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Container>;

export const Default: Story = {
	args: {
		children: (
			<div className="bg-gray-100 p-8 text-center">
				<h2 className="text-2xl font-bold mb-4">デフォルトコンテナ</h2>
				<p>最大幅1140px、パディング付き</p>
			</div>
		),
	},
};

export const NoPadding: Story = {
	args: {
		padded: false,
		children: (
			<div className="bg-gray-100 p-8 text-center">
				<h2 className="text-2xl font-bold mb-4">パディングなしコンテナ</h2>
				<p>パディングが適用されていません</p>
			</div>
		),
	},
};

export const Unconstrained: Story = {
	args: {
		constrained: false,
		children: (
			<div className="bg-gray-100 p-8 text-center">
				<h2 className="text-2xl font-bold mb-4">幅制限なしコンテナ</h2>
				<p>最大幅の制限がありません</p>
			</div>
		),
	},
};

export const WithContent: Story = {
	args: {
		children: (
			<div className="py-16">
				<h1 className="text-4xl font-bold mb-8">見出し</h1>
				<p className="text-lg mb-4">
					これはコンテナ内のコンテンツのサンプルです。コンテナは最大幅を制限し、 レスポンシブなパディングを提供します。
				</p>
				<p className="text-lg mb-4">デスクトップでは32px、モバイルでは16pxのパディングが適用されます。</p>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
					<div className="bg-gray-100 p-6 rounded">カード1</div>
					<div className="bg-gray-100 p-6 rounded">カード2</div>
					<div className="bg-gray-100 p-6 rounded">カード3</div>
				</div>
			</div>
		),
	},
};
