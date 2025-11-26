import type { Meta, StoryObj } from "@storybook/react";
import { Offer } from "./Offer";

const meta: Meta<typeof Offer> = {
	title: "Components/Offer",
	component: Offer,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["primary", "secondary", "accent", "gradient"],
			description: "バリアント",
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "サイズ",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Offer>;

export const Default: Story = {
	args: {
		title: "今すぐ無料トライアルを始めよう",
		description: "クレジットカード不要。30日間すべての機能が使えます。",
		buttonText: "無料で始める",
		buttonHref: "#",
	},
};

export const WithDescription: Story = {
	args: {
		title: "あなたのビジネスを次のレベルへ",
		description: "最新のテクノロジーと専門知識で、ビジネスの成長をサポートします。今すぐお問い合わせください。",
		buttonText: "詳しく見る",
		buttonHref: "#",
		variant: "primary",
	},
};

export const SecondaryVariant: Story = {
	args: {
		title: "特別キャンペーン実施中",
		description: "今なら初月50%オフ！この機会をお見逃しなく。",
		buttonText: "キャンペーン詳細",
		buttonHref: "#",
		variant: "secondary",
	},
};

export const AccentVariant: Story = {
	args: {
		title: "期間限定オファー",
		description: "2025年10月31日まで限定の特別価格でご提供中！",
		buttonText: "今すぐ申し込む",
		buttonHref: "#",
		variant: "accent",
	},
};

export const GradientVariant: Story = {
	args: {
		title: "プレミアムプランで、もっと自由に",
		description: "制限なし、無制限のリソースで、ビジネスを加速させましょう。",
		buttonText: "プレミアムを試す",
		buttonHref: "#",
		variant: "gradient",
	},
};

export const WithBackgroundImage: Story = {
	args: {
		title: "未来を創るテクノロジー",
		description: "革新的なソリューションで、あなたのビジョンを実現します。",
		buttonText: "ソリューションを見る",
		buttonHref: "#",
		backgroundImage: "https://placehold.co/1600x400/297B50/FFFFFF?text=Background",
		variant: "primary",
	},
};

export const Small: Story = {
	args: {
		title: "コンパクトなCTA",
		buttonText: "詳細を見る",
		buttonHref: "#",
		size: "sm",
	},
};

export const Large: Story = {
	args: {
		title: "大きなインパクト",
		description: "目立つCTAセクションで、コンバージョン率を向上させます。",
		buttonText: "今すぐ始める",
		buttonHref: "#",
		size: "lg",
		variant: "gradient",
	},
};

export const ContactCTA: Story = {
	args: {
		title: "まずはお気軽にご相談ください",
		description: "専門のコンサルタントが、あなたのビジネスに最適なソリューションをご提案します。",
		buttonText: "無料相談を予約",
		buttonHref: "#",
		variant: "primary",
	},
};

export const NewsletterCTA: Story = {
	args: {
		title: "最新情報をメールで受け取る",
		description: "新機能や特別オファーなど、役立つ情報を定期的にお届けします。",
		buttonText: "ニュースレター登録",
		buttonHref: "#",
		variant: "secondary",
	},
};

export const InPage: Story = {
	render: () => (
		<div>
			{/* コンテンツ */}
			<div className="max-w-4xl mx-auto p-8">
				<h1 className="text-3xl font-bold mb-4">製品紹介ページ</h1>
				<p className="mb-4">
					これは製品紹介ページの例です。コンテンツの途中や最後にCTAセクションを配置することで、ユーザーのアクションを促します。
				</p>
				<p className="mb-8">製品の詳細な説明や機能の紹介が続きます...</p>
			</div>

			{/* CTA */}
			<Offer
				title="今すぐ始めて、違いを実感してください"
				description="14日間の無料トライアルで、すべての機能をお試しいただけます。"
				buttonText="無料トライアルを開始"
				buttonHref="#"
				variant="primary"
			/>

			{/* 続きのコンテンツ */}
			<div className="max-w-4xl mx-auto p-8">
				<p>さらに詳細な情報や FAQ が続きます...</p>
			</div>
		</div>
	),
};

export const MultipleOffers: Story = {
	render: () => (
		<div className="space-y-8">
			<Offer
				title="無料トライアル実施中"
				description="30日間、すべての機能を無料でお試しいただけます。"
				buttonText="今すぐ始める"
				buttonHref="#"
				variant="primary"
				size="sm"
			/>
			<Offer
				title="プレミアムプランで、さらに便利に"
				description="高度な機能と優先サポートで、ビジネスを加速させます。"
				buttonText="プランを見る"
				buttonHref="#"
				variant="gradient"
				size="md"
			/>
			<Offer
				title="お困りですか？"
				description="専門家がサポートします。お気軽にお問い合わせください。"
				buttonText="サポートに連絡"
				buttonHref="#"
				variant="secondary"
				size="sm"
			/>
		</div>
	),
};
