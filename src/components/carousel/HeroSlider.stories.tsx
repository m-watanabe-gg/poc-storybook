import type { Meta, StoryObj } from "@storybook/react";
import { HeroSlider } from "./HeroSlider";

const meta: Meta<typeof HeroSlider> = {
	title: "Components/HeroSlider",
	component: HeroSlider,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		autoPlayInterval: {
			control: { type: "number", min: 1000, max: 10000, step: 1000 },
		},
		autoPlay: {
			control: "boolean",
		},
		showIndicators: {
			control: "boolean",
		},
		showArrows: {
			control: "boolean",
		},
		height: {
			control: "text",
		},
	},
};

export default meta;
type Story = StoryObj<typeof HeroSlider>;

const sampleSlides = [
	{
		image: "https://placehold.co/1920x1080/2563eb/FFFFFF?text=Slide+1",
		title: "革新的なWebソリューション",
		subtitle: "ビジネスを加速させる最先端テクノロジー",
		overlayOpacity: 0.7,
	},
	{
		image: "https://placehold.co/1920x1080/4CAF50/FFFFFF?text=Slide+2",
		title: "デザインとパフォーマンスの融合",
		subtitle: "美しく、高速で、使いやすい",
		overlayOpacity: 0.75,
	},
	{
		image: "https://placehold.co/1920x1080/FF9800/FFFFFF?text=Slide+3",
		title: "未来を創るデジタル体験",
		subtitle: "ユーザーを魅了する体験設計",
		overlayOpacity: 0.8,
	},
];

/**
 * 基本的なヒーロースライダー
 */
export const Default: Story = {
	args: {
		slides: sampleSlides,
		autoPlay: true,
		autoPlayInterval: 5000,
		showIndicators: true,
		showArrows: true,
		height: "600px",
	},
};

/**
 * 自動再生なし
 */
export const ManualOnly: Story = {
	args: {
		slides: sampleSlides,
		autoPlay: false,
		showIndicators: true,
		showArrows: true,
		height: "600px",
	},
};

/**
 * インジケーターなし
 */
export const NoIndicators: Story = {
	args: {
		slides: sampleSlides,
		autoPlay: true,
		autoPlayInterval: 5000,
		showIndicators: false,
		showArrows: true,
		height: "600px",
	},
};

/**
 * 矢印なし
 */
export const NoArrows: Story = {
	args: {
		slides: sampleSlides,
		autoPlay: true,
		autoPlayInterval: 5000,
		showIndicators: true,
		showArrows: false,
		height: "600px",
	},
};

/**
 * 単一スライド
 */
export const SingleSlide: Story = {
	args: {
		slides: [sampleSlides[0]],
		showIndicators: true,
		showArrows: true,
		height: "600px",
	},
};

/**
 * 高速自動再生
 */
export const FastAutoPlay: Story = {
	args: {
		slides: sampleSlides,
		autoPlay: true,
		autoPlayInterval: 2000,
		showIndicators: true,
		showArrows: true,
		height: "600px",
	},
};

/**
 * フルハイト
 */
export const FullHeight: Story = {
	args: {
		slides: sampleSlides,
		autoPlay: true,
		autoPlayInterval: 5000,
		showIndicators: true,
		showArrows: true,
		height: "100vh",
	},
};
