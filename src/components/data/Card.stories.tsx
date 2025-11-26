import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
	title: "Components/Card",
	component: Card,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "bordered", "elevated"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		title: "カードタイトル",
		description: "これはカードの説明文です。カードコンポーネントは様々な用途で使用できます。",
	},
};

export const WithImage: Story = {
	args: {
		title: "画像付きカード",
		description: "カードに画像を追加することができます。",
		image: "https://via.placeholder.com/400x300",
	},
};

export const Bordered: Story = {
	args: {
		title: "ボーダー付きカード",
		description: "ボーダースタイルのカードです。",
		variant: "bordered",
	},
};

export const Elevated: Story = {
	args: {
		title: "エレベーション付きカード",
		description: "シャドウが付いたカードで、ホバー時にシャドウが強くなります。",
		variant: "elevated",
		image: "https://placehold.co/400x300/297B50/FFFFFF?text=Image",
	},
};

export const AsLink: Story = {
	args: {
		title: "リンクカード",
		description: "クリック可能なカードです。",
		href: "#",
		variant: "elevated",
		image: "https://placehold.co/400x300/F44336/FFFFFF?text=Link+Card",
	},
};

export const CustomContent: Story = {
	args: {
		variant: "bordered",
		children: (
			<div className="p-6">
				<h3 className="text-xl font-bold mb-2">カスタムコンテンツ</h3>
				<p className="text-gray-600 mb-4">カード内に任意のコンテンツを配置できます。</p>
				<button type="button" className="px-4 py-2 bg-primary text-white rounded hover:opacity-75">
					詳細を見る
				</button>
			</div>
		),
	},
};

export const Grid: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<Card
				title="カード1"
				description="グリッドレイアウトでの表示例です。"
				variant="elevated"
				image="https://via.placeholder.com/400x300"
			/>
			<Card
				title="カード2"
				description="複数のカードを並べて表示できます。"
				variant="elevated"
				image="https://via.placeholder.com/400x300"
			/>
			<Card
				title="カード3"
				description="レスポンシブに対応しています。"
				variant="elevated"
				image="https://via.placeholder.com/400x300"
			/>
		</div>
	),
};
