import type { Meta, StoryObj } from "@storybook/react";
import { PageHeader } from "./PageHeader";

const meta: Meta<typeof PageHeader> = {
	title: "Layout/PageHeader",
	component: PageHeader,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "ページヘッダーの高さ",
		},
		overlayOpacity: {
			control: { type: "range", min: 0, max: 1, step: 0.1 },
			description: "オーバーレイの透明度",
		},
	},
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
	args: {
		title: "お知らせ",
		subtitle: "News",
	},
};

export const WithImage: Story = {
	args: {
		title: "会社概要",
		subtitle: "About Us",
		image: "https://placehold.co/1600x400/297B50/FFFFFF?text=Page+Header",
	},
};

export const WithSubtitle: Story = {
	args: {
		title: "サービス案内",
		subtitle: "Services",
		image: "https://placehold.co/1600x400/2196F3/FFFFFF?text=Services",
	},
};

export const Small: Story = {
	args: {
		title: "お問い合わせ",
		subtitle: "Contact",
		size: "sm",
		image: "https://placehold.co/1600x300/F44336/FFFFFF?text=Contact",
	},
};

export const Large: Story = {
	args: {
		title: "採用情報",
		subtitle: "Recruit",
		size: "lg",
		image: "https://placehold.co/1600x500/FF9800/FFFFFF?text=Recruit",
	},
};

export const LightOverlay: Story = {
	args: {
		title: "ギャラリー",
		subtitle: "Gallery",
		image: "https://placehold.co/1600x400/9C27B0/FFFFFF?text=Gallery",
		overlayOpacity: 0.3,
	},
};

export const DarkOverlay: Story = {
	args: {
		title: "プライバシーポリシー",
		subtitle: "Privacy Policy",
		image: "https://placehold.co/1600x400/4CAF50/FFFFFF?text=Privacy",
		overlayOpacity: 0.7,
	},
};

export const WithoutImage: Story = {
	args: {
		title: "よくある質問",
		subtitle: "FAQ",
	},
};

export const LongTitle: Story = {
	args: {
		title: "企業のデジタルトランスフォーメーションを支援する総合ソリューション",
		subtitle: "DX Solutions",
		image: "https://placehold.co/1600x400/297B50/FFFFFF?text=Long+Title",
		size: "lg",
	},
};

export const MultipleExamples: Story = {
	render: () => (
		<div className="space-y-8">
			<PageHeader
				title="お知らせ"
				subtitle="News"
				image="https://placehold.co/1600x300/297B50/FFFFFF?text=News"
				size="sm"
			/>
			<PageHeader
				title="製品情報"
				subtitle="Products"
				image="https://placehold.co/1600x300/2196F3/FFFFFF?text=Products"
			/>
			<PageHeader
				title="企業情報"
				subtitle="Company"
				image="https://placehold.co/1600x400/F44336/FFFFFF?text=Company"
				size="lg"
			/>
		</div>
	),
};
