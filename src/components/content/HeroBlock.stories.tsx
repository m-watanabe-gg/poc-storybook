import type { Meta, StoryObj } from "@storybook/react";
import { HeroBlock } from "./HeroBlock";

const meta: Meta<typeof HeroBlock> = {
	title: "Components/HeroBlock",
	component: HeroBlock,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		layout: {
			control: "select",
			options: ["image-left", "image-right"],
			description: "レイアウト",
		},
		imageShape: {
			control: "select",
			options: ["square", "rectangle", "circle"],
			description: "画像の形状",
		},
	},
};

export default meta;
type Story = StoryObj<typeof HeroBlock>;

export const Default: Story = {
	args: {
		title: "次世代のWebソリューション",
		description:
			"最新の技術スタックを活用し、高速で安全、そしてスケーラブルなWebアプリケーションを構築します。私たちのサービスで、ビジネスの成長を加速させましょう。",
		image: "https://placehold.co/600x400/297B50/FFFFFF?text=Hero+Image",
		buttonText: "詳しく見る",
		buttonHref: "#",
	},
};

export const ImageRight: Story = {
	args: {
		title: "デザインとテクノロジーの融合",
		description: "美しいデザインと最先端のテクノロジーを組み合わせ、ユーザー体験を最大化します。",
		image: "https://placehold.co/600x400/2196F3/FFFFFF?text=Technology",
		buttonText: "お問い合わせ",
		buttonHref: "#",
		layout: "image-right",
	},
};

export const SquareImage: Story = {
	args: {
		title: "スクエアイメージ",
		description: "正方形の画像でモダンな印象を与えます。",
		image: "https://placehold.co/600x600/F44336/FFFFFF?text=Square",
		buttonText: "もっと見る",
		buttonHref: "#",
		imageShape: "square",
	},
};

export const CircleImage: Story = {
	args: {
		title: "人物紹介",
		description: "サークル画像は人物や製品の紹介に最適です。柔らかい印象を与えます。",
		image: "https://placehold.co/600x600/9C27B0/FFFFFF?text=Profile",
		buttonText: "プロフィールを見る",
		buttonHref: "#",
		imageShape: "circle",
	},
};

export const WithoutButton: Story = {
	args: {
		title: "シンプルなメッセージ",
		description: "ボタンなしでも十分な情報を伝えられます。読み物として使用する場合に適しています。",
		image: "https://placehold.co/600x400/FF9800/FFFFFF?text=Simple",
	},
};

export const LongDescription: Story = {
	args: {
		title: "詳細な説明付きヒーロー",
		description:
			"これは長い説明文の例です。複数の段落にわたる詳細な情報を提供する場合でも、レイアウトは崩れません。視認性を保ちながら、必要な情報をすべて伝えることができます。ユーザーにとって重要な情報を漏れなく伝えることが、コンバージョン率の向上につながります。",
		image: "https://placehold.co/600x400/4CAF50/FFFFFF?text=Detailed",
		buttonText: "今すぐ始める",
		buttonHref: "#",
	},
};

export const MultipleBlocks: Story = {
	render: () => (
		<div className="space-y-16">
			<HeroBlock
				title="サービス紹介1"
				description="最初のサービスの説明です。"
				image="https://placehold.co/600x400/297B50/FFFFFF?text=Service+1"
				buttonText="詳細"
				buttonHref="#"
			/>
			<HeroBlock
				title="サービス紹介2"
				description="2番目のサービスの説明です。"
				image="https://placehold.co/600x400/2196F3/FFFFFF?text=Service+2"
				buttonText="詳細"
				buttonHref="#"
				layout="image-right"
			/>
			<HeroBlock
				title="サービス紹介3"
				description="3番目のサービスの説明です。"
				image="https://placehold.co/600x400/F44336/FFFFFF?text=Service+3"
				buttonText="詳細"
				buttonHref="#"
			/>
		</div>
	),
};

export const InContainer: Story = {
	render: () => (
		<div className="max-w-6xl mx-auto px-4 py-16">
			<div className="text-center mb-16">
				<h2 className="text-4xl font-bold mb-4">私たちの特徴</h2>
				<p className="text-lg text-gray-600">3つの柱で、あなたのビジネスをサポートします</p>
			</div>

			<div className="space-y-16">
				<HeroBlock
					title="高速なパフォーマンス"
					description="最新の技術を使用し、Lightning fastなWebサイトを実現します。ユーザーは待たされることなく、快適にコンテンツを閲覧できます。"
					image="https://placehold.co/600x400/297B50/FFFFFF?text=Speed"
					buttonText="パフォーマンスを見る"
					buttonHref="#"
					imageShape="square"
				/>
				<HeroBlock
					title="セキュリティ第一"
					description="業界標準のセキュリティ対策を実装し、あなたのデータを守ります。安心してビジネスに集中できます。"
					image="https://placehold.co/600x400/2196F3/FFFFFF?text=Security"
					buttonText="セキュリティ詳細"
					buttonHref="#"
					layout="image-right"
					imageShape="square"
				/>
				<HeroBlock
					title="スケーラビリティ"
					description="ビジネスの成長に合わせて柔軟にスケール。小規模から大規模まで、あらゆる規模に対応します。"
					image="https://placehold.co/600x400/FF9800/FFFFFF?text=Scale"
					buttonText="拡張性を確認"
					buttonHref="#"
					imageShape="square"
				/>
			</div>
		</div>
	),
};

export const WithCustomStyling: Story = {
	render: () => (
		<div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 md:p-16 rounded-xl">
			<HeroBlock
				className="max-w-6xl mx-auto"
				title="カスタムスタイリング"
				description="背景やコンテナにカスタムスタイルを適用して、ブランドに合わせたデザインを実現できます。"
				image="https://placehold.co/600x400/297B50/FFFFFF?text=Custom"
				buttonText="カスタマイズ例"
				buttonHref="#"
			/>
		</div>
	),
};
