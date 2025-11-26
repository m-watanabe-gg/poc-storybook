import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components/data";
import { Section } from "./Section";

const meta = {
	title: "Layout/Section",
	component: Section,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "gray", "primary", "secondary", "accent", "dark"],
		},
		spacing: {
			control: "select",
			options: ["none", "sm", "default", "lg", "xl"],
		},
		contained: {
			control: "boolean",
		},
		constrained: {
			control: "boolean",
		},
		as: {
			control: "select",
			options: ["section", "div", "article", "aside"],
		},
	},
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		title: "セクションタイトル",
		subtitle: "SECTION",
		children: (
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<Card
					title="カード1"
					description="これはサンプルのカードです。"
					image="https://placehold.co/400x300/297B50/FFFFFF?text=Card+1"
				/>
				<Card
					title="カード2"
					description="これはサンプルのカードです。"
					image="https://placehold.co/400x300/2196F3/FFFFFF?text=Card+2"
				/>
				<Card
					title="カード3"
					description="これはサンプルのカードです。"
					image="https://placehold.co/400x300/E91E63/FFFFFF?text=Card+3"
				/>
			</div>
		),
	},
};

export const WithoutTitle: Story = {
	args: {
		children: (
			<div className="text-center">
				<p className="text-lg">タイトルなしのシンプルなセクションです。</p>
			</div>
		),
	},
};

export const GrayBackground: Story = {
	args: {
		variant: "gray",
		title: "グレー背景のセクション",
		subtitle: "GRAY SECTION",
		children: (
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<Card title="特徴1" description="背景がグレーのセクションです。" />
				<Card title="特徴2" description="視覚的な区切りを作ることができます。" />
			</div>
		),
	},
};

export const PrimaryBackground: Story = {
	args: {
		variant: "primary",
		title: "プライマリカラーのセクション",
		subtitle: "PRIMARY SECTION",
		children: (
			<div className="text-center">
				<p className="text-white/90 text-lg mb-6">重要な情報やCTAを配置するのに適しています。</p>
				<button className="px-6 py-3 bg-white text-primary rounded font-medium hover:opacity-90 transition-opacity">
					お問い合わせ
				</button>
			</div>
		),
	},
};

export const AccentBackground: Story = {
	args: {
		variant: "accent",
		title: "アクセントカラーのセクション",
		subtitle: "ACCENT SECTION",
		children: (
			<div className="text-center">
				<p className="text-white/90 text-lg">特別なコンテンツを強調したい時に使用します。</p>
			</div>
		),
	},
};

export const DarkBackground: Story = {
	args: {
		variant: "dark",
		title: "ダークセクション",
		subtitle: "DARK SECTION",
		children: (
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="text-center p-6 border border-white/20 rounded">
					<h3 className="text-xl font-bold mb-2">特徴1</h3>
					<p className="text-white/80">ダーク背景で高級感を演出</p>
				</div>
				<div className="text-center p-6 border border-white/20 rounded">
					<h3 className="text-xl font-bold mb-2">特徴2</h3>
					<p className="text-white/80">コントラストが高い</p>
				</div>
				<div className="text-center p-6 border border-white/20 rounded">
					<h3 className="text-xl font-bold mb-2">特徴3</h3>
					<p className="text-white/80">モダンなデザイン</p>
				</div>
			</div>
		),
	},
};

export const SmallSpacing: Story = {
	args: {
		spacing: "sm",
		title: "小さいスペーシング",
		subtitle: "SMALL SPACING",
		children: <p className="text-center">パディングが小さいセクションです。</p>,
	},
};

export const LargeSpacing: Story = {
	args: {
		spacing: "lg",
		title: "大きいスペーシング",
		subtitle: "LARGE SPACING",
		children: <p className="text-center">パディングが大きいセクションです。</p>,
	},
};

export const ExtraLargeSpacing: Story = {
	args: {
		spacing: "xl",
		title: "特大スペーシング",
		subtitle: "EXTRA LARGE SPACING",
		children: <p className="text-center">パディングが特大のセクションです。</p>,
	},
};

export const NoSpacing: Story = {
	args: {
		spacing: "none",
		title: "スペーシングなし",
		subtitle: "NO SPACING",
		children: <p className="text-center">パディングがないセクションです。</p>,
	},
};

export const NotContained: Story = {
	args: {
		title: "フル幅セクション",
		subtitle: "FULL WIDTH",
		contained: false,
		children: (
			<div className="text-center px-4" style={{ maxWidth: "100%" }}>
				<p>Containerでラップされていないため、フル幅で表示されます。</p>
			</div>
		),
	},
};

export const MultipleSection: Story = {
	render: () => (
		<>
			<Section variant="default" title="セクション1" subtitle="DEFAULT">
				<p className="text-center">デフォルトの白背景セクション</p>
			</Section>
			<Section variant="gray" title="セクション2" subtitle="GRAY">
				<p className="text-center">グレー背景のセクション</p>
			</Section>
			<Section variant="primary" title="セクション3" subtitle="PRIMARY">
				<p className="text-center">プライマリカラーのセクション</p>
			</Section>
			<Section variant="accent" title="セクション4" subtitle="ACCENT">
				<p className="text-center">アクセントカラーのセクション</p>
			</Section>
		</>
	),
};

export const AsArticle: Story = {
	args: {
		as: "article",
		title: "記事セクション",
		subtitle: "ARTICLE",
		children: (
			<div>
				<p className="mb-4">このセクションは&lt;article&gt;タグとしてレンダリングされます。</p>
				<p>セマンティックHTMLを使用することでアクセシビリティが向上します。</p>
			</div>
		),
	},
};
