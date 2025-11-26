import type { Meta, StoryObj } from "@storybook/react";
import { AsideNav } from "./AsideNav";

const meta: Meta<typeof AsideNav> = {
	title: "Layout/AsideNav",
	component: AsideNav,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AsideNav>;

export const Default: Story = {
	args: {
		blocks: [
			{
				title: "カテゴリー",
				items: [
					{ label: "すべて", href: "/news" },
					{ label: "お知らせ", href: "/news/category/news" },
					{ label: "プレスリリース", href: "/news/category/press" },
					{ label: "イベント", href: "/news/category/event" },
				],
			},
		],
		currentPath: "/news/category/news",
	},
};

export const WithBadge: Story = {
	args: {
		blocks: [
			{
				title: "メニュー",
				items: [
					{ label: "ダッシュボード", href: "/dashboard" },
					{ label: "受信トレイ", href: "/inbox", badge: "5" },
					{ label: "通知", href: "/notifications", badge: "12" },
					{ label: "設定", href: "/settings" },
				],
			},
		],
		currentPath: "/inbox",
	},
};

export const WithIcon: Story = {
	args: {
		blocks: [
			{
				title: "ナビゲーション",
				items: [
					{
						label: "ホーム",
						href: "/",
						icon: (
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
							</svg>
						),
					},
					{
						label: "設定",
						href: "/settings",
						icon: (
							<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
									clipRule="evenodd"
								/>
							</svg>
						),
					},
				],
			},
		],
	},
};

export const WithImage: Story = {
	args: {
		blocks: [
			{
				title: "最新記事",
				items: [
					{ label: "記事タイトル1", href: "/posts/1" },
					{ label: "記事タイトル2", href: "/posts/2" },
					{ label: "記事タイトル3", href: "/posts/3" },
				],
			},
			{
				title: "バナー",
				image: "https://placehold.co/320x180/297B50/FFFFFF?text=Banner",
			},
		],
	},
};

export const WithCustomContent: Story = {
	args: {
		blocks: [
			{
				title: "検索",
				content: (
					<div>
						<input
							type="search"
							placeholder="キーワードを入力"
							className="w-full px-3 py-2 border rounded-(--border-radius) text-sm"
						/>
						<button className="w-full mt-2 px-4 py-2 bg-primary text-white rounded-(--border-radius) text-sm hover:opacity-75">
							検索
						</button>
					</div>
				),
			},
			{
				title: "タグ",
				content: (
					<div className="flex flex-wrap gap-2">
						{["Next.js", "React", "TypeScript", "Tailwind", "Storybook"].map((tag) => (
							<a key={tag} href="#" className="px-3 py-1 bg-gray-100 rounded-full text-xs hover:bg-gray-200">
								#{tag}
							</a>
						))}
					</div>
				),
			},
		],
	},
};

export const MultipleBlocks: Story = {
	args: {
		blocks: [
			{
				title: "メインメニュー",
				items: [
					{ label: "ホーム", href: "/" },
					{ label: "製品情報", href: "/products" },
					{ label: "サポート", href: "/support" },
				],
			},
			{
				title: "カテゴリー",
				items: [
					{ label: "ニュース", href: "/news", badge: "3" },
					{ label: "ブログ", href: "/blog", badge: "8" },
					{ label: "イベント", href: "/events" },
				],
			},
			{
				title: "お知らせ",
				content: (
					<div className="text-sm">
						<p className="mb-2">新機能リリースのお知らせ</p>
						<a href="#" className="text-primary hover:underline">
							詳しく見る →
						</a>
					</div>
				),
			},
		],
		currentPath: "/products",
	},
};

export const InTwoColumnLayout: Story = {
	render: () => (
		<div className="flex gap-8">
			<div className="w-64">
				<AsideNav
					blocks={[
						{
							title: "サイドメニュー",
							items: [
								{ label: "ダッシュボード", href: "/dashboard" },
								{ label: "プロフィール", href: "/profile" },
								{ label: "メッセージ", href: "/messages", badge: "5" },
								{ label: "設定", href: "/settings" },
							],
						},
						{
							title: "最近のアクティビティ",
							content: (
								<div className="text-sm space-y-2">
									<div className="pb-2 border-b">
										<p className="font-medium">新しいメッセージ</p>
										<p className="text-gray-600 text-xs">2分前</p>
									</div>
									<div className="pb-2 border-b">
										<p className="font-medium">プロフィール更新</p>
										<p className="text-gray-600 text-xs">1時間前</p>
									</div>
								</div>
							),
						},
					]}
					currentPath="/messages"
				/>
			</div>
			<div className="flex-1">
				<h2 className="text-2xl font-bold mb-4">メインコンテンツ</h2>
				<p>サイドバーのナビゲーションを使用してページを移動できます。</p>
			</div>
		</div>
	),
};
