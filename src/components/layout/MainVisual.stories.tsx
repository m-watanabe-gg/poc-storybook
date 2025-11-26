import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../foundation/Button";
import { MainVisual } from "./MainVisual";

const meta: Meta<typeof MainVisual> = {
	title: "Layout/MainVisual",
	component: MainVisual,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		height: {
			control: "select",
			options: ["sm", "md", "lg", "xl"],
			description: "メインビジュアルの高さ",
		},
		overlay: {
			control: "boolean",
			description: "オーバーレイの有無",
		},
		overlayOpacity: {
			control: { type: "range", min: 0, max: 1, step: 0.1 },
			description: "オーバーレイの透明度",
		},
	},
};

export default meta;
type Story = StoryObj<typeof MainVisual>;

export const Default: Story = {
	args: {
		slides: [
			{
				image: "https://placehold.co/1600x600/297B50/FFFFFF?text=Main+Visual",
				alt: "メインビジュアル",
			},
		],
		title: "Welcome to Our Website",
		description: "最高のサービスをご提供します",
	},
};

export const WithoutOverlay: Story = {
	args: {
		slides: [
			{
				image: "https://placehold.co/1600x600/2196F3/FFFFFF?text=No+Overlay",
				alt: "メインビジュアル",
			},
		],
		title: "クリアな背景",
		description: "オーバーレイなしの鮮明な画像",
		overlay: false,
	},
};

export const LightOverlay: Story = {
	args: {
		slides: [
			{
				image: "https://placehold.co/1600x600/FF9800/FFFFFF?text=Light+Overlay",
				alt: "メインビジュアル",
			},
		],
		title: "薄いオーバーレイ",
		description: "背景画像が見やすい設定",
		overlayOpacity: 0.2,
	},
};

export const SmallHeight: Story = {
	args: {
		slides: [
			{
				image: "https://placehold.co/1600x400/9C27B0/FFFFFF?text=Small",
				alt: "メインビジュアル",
			},
		],
		title: "コンパクトなヒーロー",
		height: "sm",
	},
};

export const ExtraLargeHeight: Story = {
	args: {
		slides: [
			{
				image: "https://placehold.co/1600x700/4CAF50/FFFFFF?text=Extra+Large",
				alt: "メインビジュアル",
			},
		],
		title: "大きなインパクト",
		description: "フルスクリーンに近い表示",
		height: "xl",
	},
};

export const WithButtons: Story = {
	render: () => (
		<MainVisual
			slides={[
				{
					image: "https://placehold.co/1600x600/297B50/FFFFFF?text=Hero+Section",
					alt: "メインビジュアル",
				},
			]}
			title="次世代のWebソリューション"
			description="革新的なサービスで、あなたのビジネスを加速させます"
		>
			<div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-4">
				<Button size="lg" variant="accent">
					今すぐ始める
				</Button>
				<Button size="lg" variant="secondary" className="bg-white/10 border-white text-white hover:bg-white/20">
					詳しく見る
				</Button>
			</div>
		</MainVisual>
	),
};

export const WithCustomContent: Story = {
	render: () => (
		<MainVisual
			slides={[
				{
					image: "https://placehold.co/1600x600/F44336/FFFFFF?text=Custom+Content",
					alt: "メインビジュアル",
				},
			]}
			overlayOpacity={0.5}
		>
			<div className="absolute inset-0 flex flex-col items-center justify-center text-white">
				<div className="max-w-3xl px-4 text-center">
					<h1 className="text-5xl md:text-6xl font-bold mb-6">カスタムコンテンツ</h1>
					<p className="text-xl md:text-2xl mb-8 leading-relaxed">
						自由にコンテンツを配置できます。
						<br />
						ボタン、フォーム、アニメーションなど、何でも追加可能です。
					</p>
					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<Button size="xlg" variant="accent">
							無料トライアル
						</Button>
						<Button size="xlg" variant="outline" className="bg-white/20 text-white hover:bg-white/30">
							資料請求
						</Button>
						<Button size="xlg" variant="outline" className="text-white border-white hover:bg-white/10">
							事例を見る →
						</Button>
					</div>
				</div>
			</div>
		</MainVisual>
	),
};

export const Minimal: Story = {
	args: {
		slides: [
			{
				image: "https://placehold.co/1600x600/000000/FFFFFF?text=Minimal",
				alt: "メインビジュアル",
			},
		],
		title: "シンプル is ベスト",
		overlayOpacity: 0.6,
		height: "md",
	},
};
