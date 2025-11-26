import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "../foundation/Heading";
import { ParallaxSection } from "./ParallaxSection";

const meta: Meta<typeof ParallaxSection> = {
	title: "Components/ParallaxSection",
	component: ParallaxSection,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ParallaxSection>;

/**
 * デフォルトのパララックスセクション
 */
export const Default: Story = {
	args: {
		image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
		imageAlt: "パララックス背景",
		children: (
			<div className="text-center text-white px-4">
				<Heading as="h2" size="xlg" className="mb-4">
					パララックス効果
				</Heading>
				<p className="text-xl">スクロールして視差効果を体験してください</p>
			</div>
		),
	},
};

/**
 * 複数セクション
 */
export const Multiple: Story = {
	render: () => (
		<div>
			<div className="h-screen bg-gray-100 flex items-center justify-center">
				<Heading as="h1">スクロールダウン ↓</Heading>
			</div>
			<ParallaxSection image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80" height="md">
				<div className="text-center text-white px-4">
					<Heading as="h2" size="xlg" className="mb-4">
						セクション 1
					</Heading>
					<p className="text-xl">パララックス効果デモ</p>
				</div>
			</ParallaxSection>
			<div className="h-screen bg-gray-100 flex items-center justify-center">
				<Heading as="h1">中間セクション</Heading>
			</div>
			<ParallaxSection
				image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
				height="lg"
				speed={0.8}
			>
				<div className="text-center text-white px-4">
					<Heading as="h2" size="xlg" className="mb-4">
						セクション 2
					</Heading>
					<p className="text-xl">異なるスピード設定</p>
				</div>
			</ParallaxSection>
			<div className="h-screen bg-gray-100 flex items-center justify-center">
				<Heading as="h1">最後のセクション</Heading>
			</div>
		</div>
	),
};

/**
 * フルスクリーン
 */
export const FullScreen: Story = {
	args: {
		image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
		height: "full",
		overlayOpacity: 0.5,
		children: (
			<div className="text-center text-white px-4 max-w-4xl">
				<Heading as="h1" size="xlg" className="mb-6">
					フルスクリーンパララックス
				</Heading>
				<p className="text-2xl mb-8">画面全体を使った大胆な表現</p>
			</div>
		),
	},
};
