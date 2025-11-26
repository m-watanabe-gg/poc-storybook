import type { Meta, StoryObj } from "@storybook/react";
import Image from "next/image";
import { Accordion } from "./Accordion";

const meta: Meta<typeof Accordion> = {
	title: "Components/Accordion",
	component: Accordion,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		type: {
			control: "select",
			options: ["single", "multiple"],
			description: "一度に1つのみ開くか、複数開けるか",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
	args: {
		type: "single",
		items: [
			{
				title: "アコーディオンタイトル1",
				content: "これは最初のアコーディオンアイテムのコンテンツです。",
				defaultOpen: true,
			},
			{
				title: "アコーディオンタイトル2",
				content: "これは2番目のアコーディオンアイテムのコンテンツです。より長いテキストを含めることもできます。",
			},
			{
				title: "アコーディオンタイトル3",
				content: "これは3番目のアコーディオンアイテムのコンテンツです。",
			},
		],
	},
};

export const Multiple: Story = {
	args: {
		type: "multiple",
		items: [
			{
				title: "よくある質問1",
				content: "回答1: 複数のアイテムを同時に開くことができます。",
				defaultOpen: true,
			},
			{
				title: "よくある質問2",
				content: "回答2: それぞれのアイテムを独立して開閉できます。",
				defaultOpen: true,
			},
			{
				title: "よくある質問3",
				content: "回答3: FAQセクションなどに最適です。",
			},
		],
	},
};

export const WithRichContent: Story = {
	args: {
		type: "single",
		items: [
			{
				title: "リッチコンテンツの例",
				content: (
					<div>
						<p className="mb-2">アコーディオン内に複雑なコンテンツを配置できます。</p>
						<ul className="list-disc list-inside mb-2">
							<li>リスト項目1</li>
							<li>リスト項目2</li>
							<li>リスト項目3</li>
						</ul>
						<button className="px-4 py-2 bg-primary text-white rounded hover:opacity-75">ボタンも配置可能</button>
					</div>
				),
			},
			{
				title: "画像を含む例",
				content: (
					<div>
						<p className="mb-4">画像やその他のメディアも配置できます。</p>
						<div className="relative w-full aspect-[2/1]">
							<Image
								src="https://placehold.co/400x200/2196F3/FFFFFF?text=Sample+Image"
								alt="サンプル画像"
								fill
								className="rounded object-cover"
								sizes="(max-width: 768px) 100vw, 50vw"
							/>
						</div>
					</div>
				),
			},
		],
	},
};

export const FAQ: Story = {
	args: {
		type: "single",
		items: [
			{
				title: "サービスの利用方法は？",
				content: "まずは会員登録を行ってください。登録後、すぐにサービスをご利用いただけます。",
			},
			{
				title: "料金プランについて教えてください",
				content:
					"基本プラン、プレミアムプラン、エンタープライズプランの3つをご用意しています。詳細は料金ページをご覧ください。",
			},
			{
				title: "無料トライアルはありますか？",
				content: "はい、14日間の無料トライアルをご利用いただけます。クレジットカードの登録は不要です。",
			},
			{
				title: "キャンセル方法は？",
				content: "マイページからいつでもキャンセルすることができます。日割り計算で返金いたします。",
			},
			{
				title: "サポート体制について",
				content: "メール、チャット、電話でのサポートを提供しています。営業時間は平日9:00-18:00です。",
			},
		],
	},
};
