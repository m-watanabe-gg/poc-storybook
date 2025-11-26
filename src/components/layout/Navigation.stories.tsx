import type { Meta, StoryObj } from "@storybook/react";
import { Navigation } from "./Navigation";

const meta: Meta<typeof Navigation> = {
	title: "Layout/Navigation",
	component: Navigation,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["horizontal", "vertical"],
			description: "ナビゲーションのレイアウト",
		},
		align: {
			control: "select",
			options: ["left", "center", "right"],
			description: "水平レイアウト時の配置",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Navigation>;

const sampleItems = [
	{ label: "ホーム", href: "/" },
	{ label: "会社概要", href: "/about" },
	{ label: "サービス", href: "/services" },
	{ label: "ニュース", href: "/news" },
	{ label: "お問い合わせ", href: "/contact" },
];

const itemsWithSubmenu = [
	{ label: "ホーム", href: "/" },
	{
		label: "サービス",
		href: "/services",
		children: [
			{ label: "Webサイト制作", href: "/services/web" },
			{ label: "アプリ開発", href: "/services/app" },
			{ label: "コンサルティング", href: "/services/consulting" },
		],
	},
	{
		label: "企業情報",
		href: "/company",
		children: [
			{ label: "会社概要", href: "/company/about" },
			{ label: "沿革", href: "/company/history" },
			{ label: "アクセス", href: "/company/access" },
		],
	},
	{ label: "お問い合わせ", href: "/contact" },
];

export const Default: Story = {
	args: {
		items: sampleItems,
		currentPath: "/",
	},
};

export const WithSubmenu: Story = {
	args: {
		items: itemsWithSubmenu,
		currentPath: "/services",
	},
};

export const CenterAligned: Story = {
	args: {
		items: sampleItems,
		align: "center",
		currentPath: "/about",
	},
};

export const RightAligned: Story = {
	args: {
		items: sampleItems,
		align: "right",
		currentPath: "/news",
	},
};

export const Vertical: Story = {
	args: {
		items: sampleItems,
		variant: "vertical",
		currentPath: "/services",
	},
};

export const VerticalWithSubmenu: Story = {
	args: {
		items: itemsWithSubmenu,
		variant: "vertical",
		currentPath: "/services/web",
	},
};

export const InHeader: Story = {
	render: () => (
		<div className="bg-white shadow">
			<div className="max-w-6xl mx-auto px-4">
				<div className="flex items-center justify-between h-16">
					<div className="text-xl font-bold text-primary">Logo</div>
					<Navigation items={sampleItems} currentPath="/" />
				</div>
			</div>
		</div>
	),
};

export const InSidebar: Story = {
	render: () => (
		<div className="flex gap-8">
			<aside className="w-64 bg-gray-50 p-4 rounded-(--border-radius)">
				<h3 className="font-bold mb-4">サイドメニュー</h3>
				<Navigation items={itemsWithSubmenu} variant="vertical" currentPath="/services/web" />
			</aside>
			<div className="flex-1">
				<h2 className="text-2xl font-bold mb-4">メインコンテンツ</h2>
				<p>サイドバーのナビゲーションから選択してください。</p>
			</div>
		</div>
	),
};

export const MegaMenu: Story = {
	args: {
		items: [
			{ label: "ホーム", href: "/" },
			{
				label: "製品",
				href: "/products",
				children: [
					{ label: "製品A", href: "/products/a" },
					{ label: "製品B", href: "/products/b" },
					{ label: "製品C", href: "/products/c" },
					{ label: "製品D", href: "/products/d" },
				],
			},
			{
				label: "ソリューション",
				href: "/solutions",
				children: [
					{ label: "業界別", href: "/solutions/industry" },
					{ label: "課題別", href: "/solutions/challenge" },
					{ label: "規模別", href: "/solutions/scale" },
				],
			},
			{
				label: "サポート",
				href: "/support",
				children: [
					{ label: "ヘルプセンター", href: "/support/help" },
					{ label: "マニュアル", href: "/support/manual" },
					{ label: "FAQ", href: "/support/faq" },
					{ label: "お問い合わせ", href: "/support/contact" },
				],
			},
		],
		currentPath: "/products/a",
	},
};
