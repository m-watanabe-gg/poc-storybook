import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../foundation/Button";
import { Slidebar } from "./Slidebar";

const meta: Meta<typeof Slidebar> = {
	title: "Components/Slidebar",
	component: Slidebar,
	parameters: {
		layout: "fullscreen",
	},
	tags: ["autodocs"],
	argTypes: {
		position: {
			control: "select",
			options: ["left", "right"],
			description: "スライド方向",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Slidebar>;

const sampleItems = [
	{ label: "ホーム", href: "/" },
	{
		label: "製品情報",
		href: "/products",
		children: [
			{ label: "製品A", href: "/products/a" },
			{ label: "製品B", href: "/products/b" },
			{ label: "製品C", href: "/products/c" },
		],
	},
	{
		label: "サービス",
		href: "/services",
		children: [
			{ label: "Webサイト制作", href: "/services/web" },
			{ label: "アプリ開発", href: "/services/app" },
			{ label: "コンサルティング", href: "/services/consulting" },
		],
	},
	{ label: "会社概要", href: "/about" },
	{ label: "お問い合わせ", href: "/contact" },
];

function SlidebarExample() {
	const [isOpen, setIsOpen] = React.useState(true);

	return (
		<div className="relative h-screen">
			<div className="p-8">
				<Button onClick={() => setIsOpen(true)}>メニューを開く</Button>
			</div>
			<Slidebar items={sampleItems} isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</div>
	);
}

export const Default: Story = {
	render: () => <SlidebarExample />,
};

function SlidebarRightExample() {
	const [isOpen, setIsOpen] = React.useState(true);

	return (
		<div className="relative h-screen">
			<div className="p-8">
				<Button onClick={() => setIsOpen(true)}>右からメニューを開く</Button>
			</div>
			<Slidebar items={sampleItems} isOpen={isOpen} onClose={() => setIsOpen(false)} position="right" />
		</div>
	);
}

export const RightPosition: Story = {
	render: () => <SlidebarRightExample />,
};

function SlidebarWithFooterExample() {
	const [isOpen, setIsOpen] = React.useState(true);

	return (
		<div className="relative h-screen">
			<div className="p-8">
				<Button onClick={() => setIsOpen(true)}>メニューを開く（フッター付き）</Button>
			</div>
			<Slidebar
				items={sampleItems}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title="サイトメニュー"
				footer={
					<div className="space-y-2">
						<Button variant="secondary" className="w-full justify-center">
							ログイン
						</Button>
						<Button className="w-full justify-center">新規登録</Button>
					</div>
				}
			/>
		</div>
	);
}

export const WithFooter: Story = {
	render: () => <SlidebarWithFooterExample />,
};

function SlidebarSimpleExample() {
	const [isOpen, setIsOpen] = React.useState(true);

	const simpleItems = [
		{ label: "ホーム", href: "/" },
		{ label: "製品", href: "/products" },
		{ label: "サービス", href: "/services" },
		{ label: "会社概要", href: "/about" },
		{ label: "お問い合わせ", href: "/contact" },
	];

	return (
		<div className="relative h-screen">
			<div className="p-8">
				<Button onClick={() => setIsOpen(true)}>シンプルメニュー</Button>
			</div>
			<Slidebar items={simpleItems} isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</div>
	);
}

export const SimpleMenu: Story = {
	render: () => <SlidebarSimpleExample />,
};

function MobileHeaderExample() {
	const [isOpen, setIsOpen] = React.useState(false);

	return (
		<div className="relative min-h-screen">
			{/* モバイルヘッダー */}
			<header className="bg-white border-b border-(--color-border) p-4 flex items-center justify-between md:hidden">
				<button
					onClick={() => setIsOpen(true)}
					className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 rounded"
					aria-label="メニューを開く"
				>
					<svg
						className="w-6 h-6"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				</button>
				<div className="text-lg font-bold">サイトロゴ</div>
				<div className="w-10" />
			</header>

			{/* コンテンツ */}
			<div className="p-8">
				<h1 className="text-3xl font-bold mb-4">モバイルヘッダーの例</h1>
				<p className="text-gray-600 mb-4">左上のハンバーガーメニューをクリックしてスライドバーを開いてください。</p>
				<Button onClick={() => setIsOpen(true)}>メニューを開く</Button>
			</div>

			<Slidebar
				items={sampleItems}
				isOpen={isOpen}
				onClose={() => setIsOpen(false)}
				title="メニュー"
				footer={
					<div className="text-xs text-gray-600 text-center">
						<p>© 2025 Company Name</p>
					</div>
				}
			/>
		</div>
	);
}

export const MobileHeader: Story = {
	render: () => <MobileHeaderExample />,
};

function DeepMenuExample() {
	const [isOpen, setIsOpen] = React.useState(true);

	const deepItems = [
		{ label: "ホーム", href: "/" },
		{
			label: "製品",
			href: "/products",
			children: [
				{ label: "製品A", href: "/products/a" },
				{ label: "製品B", href: "/products/b" },
				{ label: "製品C", href: "/products/c" },
				{ label: "製品D", href: "/products/d" },
				{ label: "製品E", href: "/products/e" },
			],
		},
		{
			label: "サービス",
			href: "/services",
			children: [
				{ label: "Webサイト制作", href: "/services/web" },
				{ label: "アプリ開発", href: "/services/app" },
				{ label: "システム開発", href: "/services/system" },
				{ label: "コンサルティング", href: "/services/consulting" },
				{ label: "保守運用", href: "/services/maintenance" },
			],
		},
		{
			label: "企業情報",
			href: "/company",
			children: [
				{ label: "会社概要", href: "/company/about" },
				{ label: "代表挨拶", href: "/company/message" },
				{ label: "沿革", href: "/company/history" },
				{ label: "アクセス", href: "/company/access" },
			],
		},
		{ label: "採用情報", href: "/recruit" },
		{ label: "お問い合わせ", href: "/contact" },
	];

	return (
		<div className="relative h-screen">
			<div className="p-8">
				<Button onClick={() => setIsOpen(true)}>多階層メニュー</Button>
			</div>
			<Slidebar items={deepItems} isOpen={isOpen} onClose={() => setIsOpen(false)} title="サイトマップ" />
		</div>
	);
}

export const DeepMenu: Story = {
	render: () => <DeepMenuExample />,
};
