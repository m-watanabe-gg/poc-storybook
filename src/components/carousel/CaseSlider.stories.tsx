import type { Meta, StoryObj } from "@storybook/react";
import { CaseSlider } from "./CaseSlider";

const meta: Meta<typeof CaseSlider> = {
	title: "Components/CaseSlider",
	component: CaseSlider,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		slidesToShow: {
			control: { type: "number", min: 1, max: 4 },
		},
		spaceBetween: {
			control: { type: "number", min: 0, max: 100 },
		},
		arrowVariant: {
			control: "select",
			options: ["default", "primary", "secondary"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof CaseSlider>;

// サンプルデータ（新しいcard APIを使用）
const items = [
	{
		id: "1",
		card: {
			variant: "elevated" as const,
			image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
			title: "放送会社A",
			description: "映像制作ワークフローを効率化し、制作時間を50%削減",
			href: "/cases/1/",
			badge: "放送・映像",
		},
	},
	{
		id: "2",
		card: {
			variant: "elevated" as const,
			image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
			title: "製造業B社",
			description: "生産管理システムの導入で在庫コストを30%削減",
			href: "/cases/2/",
			badge: "製造業",
		},
	},
	{
		id: "3",
		card: {
			variant: "elevated" as const,
			image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
			title: "サービス業C社",
			description: "顧客管理システムで業務効率が2倍に向上",
			href: "/cases/3/",
			badge: "サービス業",
		},
	},
	{
		id: "4",
		card: {
			variant: "elevated" as const,
			image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
			title: "小売業D社",
			description: "ECサイト刷新で売上が150%増加",
			href: "/cases/4/",
			badge: "小売業",
		},
	},
	{
		id: "5",
		card: {
			variant: "elevated" as const,
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
			title: "金融業E社",
			description: "セキュリティ強化と業務効率化を同時実現",
			href: "/cases/5/",
			badge: "金融業",
		},
	},
	{
		id: "6",
		card: {
			variant: "elevated" as const,
			image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
			title: "教育機関F",
			description: "オンライン学習プラットフォームで受講者数3倍",
			href: "/cases/6/",
			badge: "教育",
		},
	},
];

/**
 * 1カラムスライダー（デフォルト）
 */
export const Default: Story = {
	args: {
		items: items,
		slidesToShow: 1,
		spaceBetween: 24,
		arrowVariant: "primary",
	},
};

/**
 * Full Widthスライダー（画面全体の幅を使用）
 */
export const FullWidth: Story = {
	args: {
		items: items,
		slidesToShow: 1,
		spaceBetween: 24,
		arrowVariant: "primary",
		variant: "fullwidth",
		autoPlay: true,
		autoPlayInterval: 5000,
	},
	parameters: {
		layout: "fullscreen",
	},
};

/**
 * 3カラムスライダー
 */
export const ThreeColumns: Story = {
	args: {
		items: items,
		slidesToShow: 3,
		spaceBetween: 24,
		arrowVariant: "primary",
	},
};

/**
 * 2カラムスライダー
 */
export const TwoColumns: Story = {
	args: {
		items: items,
		slidesToShow: 2,
		spaceBetween: 32,
		arrowVariant: "primary",
	},
};

/**
 * 4カラムスライダー
 */
export const FourColumns: Story = {
	args: {
		items: items,
		slidesToShow: 4,
		spaceBetween: 24,
		arrowVariant: "primary",
	},
};

/**
 * デフォルトボタンスタイル
 */
export const DefaultArrows: Story = {
	args: {
		items: items,
		slidesToShow: 3,
		spaceBetween: 24,
		arrowVariant: "default",
	},
};

/**
 * セカンダリーボタンスタイル
 */
export const SecondaryArrows: Story = {
	args: {
		items: items,
		slidesToShow: 3,
		spaceBetween: 24,
		arrowVariant: "secondary",
	},
};

/**
 * 小さいギャップ
 */
export const SmallGap: Story = {
	args: {
		items: items,
		slidesToShow: 3,
		spaceBetween: 16,
		arrowVariant: "primary",
	},
};

/**
 * 大きいギャップ
 */
export const LargeGap: Story = {
	args: {
		items: items,
		slidesToShow: 3,
		spaceBetween: 32,
		arrowVariant: "primary",
	},
};

/**
 * 少数のアイテム（スライド不要）
 */
export const FewItems: Story = {
	args: {
		items: items.slice(0, 2),
		slidesToShow: 3,
		spaceBetween: 24,
		arrowVariant: "primary",
	},
};

/**
 * カスタムコンテンツの例（contentプロパティを使用）
 */
export const CustomContent: Story = {
	args: {
		items: [
			{
				id: "custom-1",
				content: (
					<div className="bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-lg text-white h-full">
						<h3 className="text-2xl font-bold mb-4">カスタムコンテンツ例</h3>
						<p className="mb-4">contentプロパティを使用すると、任意のコンテンツを表示できます。</p>
						<button className="bg-white text-blue-600 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
							カスタムボタン
						</button>
					</div>
				),
			},
			{
				id: "custom-2",
				content: (
					<div className="bg-gradient-to-br from-green-500 to-teal-600 p-8 rounded-lg text-white h-full">
						<h3 className="text-2xl font-bold mb-4">別のカスタムコンテンツ</h3>
						<p className="mb-4">Cardコンポーネント以外のコンテンツも自由に配置可能です。</p>
						<button className="bg-white text-green-600 px-4 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
							アクション
						</button>
					</div>
				),
			},
		],
		slidesToShow: 2,
		spaceBetween: 24,
		arrowVariant: "primary",
	},
};
