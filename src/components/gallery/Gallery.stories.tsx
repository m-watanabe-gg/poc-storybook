import type { Meta, StoryObj } from "@storybook/react";
import { Gallery } from "./Gallery";

const meta: Meta<typeof Gallery> = {
	title: "Components/Gallery",
	component: Gallery,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		columns: {
			control: "select",
			options: [2, 3, 4],
			description: "カラム数",
		},
		gap: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "ギャップサイズ",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Gallery>;

const sampleImages = [
	{
		src: "https://placehold.co/400x400/297B50/FFFFFF?text=Image+1",
		alt: "画像1",
		title: "タイトル1",
		description: "説明文1",
	},
	{
		src: "https://placehold.co/400x400/F44336/FFFFFF?text=Image+2",
		alt: "画像2",
		title: "タイトル2",
		description: "説明文2",
	},
	{
		src: "https://placehold.co/400x400/2196F3/FFFFFF?text=Image+3",
		alt: "画像3",
		title: "タイトル3",
		description: "説明文3",
	},
	{
		src: "https://placehold.co/400x400/FF9800/FFFFFF?text=Image+4",
		alt: "画像4",
		title: "タイトル4",
		description: "説明文4",
	},
	{
		src: "https://placehold.co/400x400/9C27B0/FFFFFF?text=Image+5",
		alt: "画像5",
		title: "タイトル5",
		description: "説明文5",
	},
	{
		src: "https://placehold.co/400x400/4CAF50/FFFFFF?text=Image+6",
		alt: "画像6",
		title: "タイトル6",
		description: "説明文6",
	},
];

export const Default: Story = {
	args: {
		items: sampleImages,
	},
};

export const TwoColumns: Story = {
	args: {
		items: sampleImages.slice(0, 4),
		columns: 2,
	},
};

export const FourColumns: Story = {
	args: {
		items: sampleImages.concat(sampleImages).slice(0, 8),
		columns: 4,
	},
};

export const SmallGap: Story = {
	args: {
		items: sampleImages,
		gap: "sm",
	},
};

export const LargeGap: Story = {
	args: {
		items: sampleImages,
		gap: "lg",
	},
};

export const WithoutLightbox: Story = {
	args: {
		items: sampleImages,
		enableLightbox: false,
	},
};

export const SimpleGallery: Story = {
	args: {
		items: [
			{ src: "https://placehold.co/400x400/297B50/FFFFFF?text=1", alt: "画像1" },
			{ src: "https://placehold.co/400x400/F44336/FFFFFF?text=2", alt: "画像2" },
			{ src: "https://placehold.co/400x400/2196F3/FFFFFF?text=3", alt: "画像3" },
		],
		enableLightbox: false,
	},
};

export const ManyImages: Story = {
	args: {
		items: Array.from({ length: 12 }, (_, i) => {
			const colors = ["297B50", "F44336", "2196F3", "FF9800", "9C27B0", "4CAF50"];
			const color = colors[i % colors.length];
			return {
				src: `https://placehold.co/400x400/${color}/FFFFFF?text=Image+${i + 1}`,
				alt: `画像${i + 1}`,
				title: `タイトル${i + 1}`,
				description: `これは画像${i + 1}の説明文です。`,
			};
		}),
		columns: 4,
	},
};
