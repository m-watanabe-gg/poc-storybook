import type { Meta, StoryObj } from "@storybook/react";
import { Sitemap } from "./Sitemap";

const meta: Meta<typeof Sitemap> = {
	title: "Components/Sitemap",
	component: Sitemap,
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
	},
};

export default meta;
type Story = StoryObj<typeof Sitemap>;

const sampleSections = [
	{
		title: "製品情報",
		items: [
			{
				label: "製品一覧",
				href: "/products",
				children: [
					{ label: "製品A", href: "/products/a" },
					{ label: "製品B", href: "/products/b" },
					{ label: "製品C", href: "/products/c" },
				],
			},
			{ label: "価格表", href: "/products/pricing" },
			{ label: "導入事例", href: "/products/cases" },
		],
	},
	{
		title: "サービス",
		items: [
			{ label: "Webサイト制作", href: "/services/web" },
			{ label: "アプリ開発", href: "/services/app" },
			{ label: "システム開発", href: "/services/system" },
			{ label: "コンサルティング", href: "/services/consulting" },
		],
	},
	{
		title: "企業情報",
		items: [
			{
				label: "会社概要",
				href: "/company",
				children: [
					{ label: "代表挨拶", href: "/company/message" },
					{ label: "沿革", href: "/company/history" },
					{ label: "組織図", href: "/company/organization" },
				],
			},
			{ label: "アクセス", href: "/company/access" },
			{ label: "採用情報", href: "/recruit" },
		],
	},
	{
		title: "サポート",
		items: [
			{ label: "よくある質問", href: "/support/faq" },
			{ label: "お問い合わせ", href: "/support/contact" },
			{ label: "資料請求", href: "/support/documents" },
		],
	},
];

export const Default: Story = {
	args: {
		sections: sampleSections,
	},
};

export const TwoColumns: Story = {
	args: {
		sections: sampleSections.slice(0, 2),
		columns: 2,
	},
};

export const FourColumns: Story = {
	args: {
		sections: sampleSections,
		columns: 4,
	},
};

export const Simple: Story = {
	args: {
		sections: [
			{
				title: "メインページ",
				items: [
					{ label: "ホーム", href: "/" },
					{ label: "製品", href: "/products" },
					{ label: "サービス", href: "/services" },
					{ label: "会社概要", href: "/about" },
					{ label: "お問い合わせ", href: "/contact" },
				],
			},
		],
		columns: 2,
	},
};

export const Detailed: Story = {
	args: {
		sections: [
			{
				title: "製品",
				items: [
					{
						label: "ソフトウェア",
						href: "/products/software",
						children: [
							{ label: "CMS", href: "/products/software/cms" },
							{ label: "CRM", href: "/products/software/crm" },
							{ label: "SFA", href: "/products/software/sfa" },
						],
					},
					{
						label: "ハードウェア",
						href: "/products/hardware",
						children: [
							{ label: "サーバー", href: "/products/hardware/server" },
							{ label: "ネットワーク機器", href: "/products/hardware/network" },
						],
					},
				],
			},
			{
				title: "サービス",
				items: [
					{
						label: "開発サービス",
						href: "/services/development",
						children: [
							{ label: "Web開発", href: "/services/development/web" },
							{ label: "モバイルアプリ", href: "/services/development/mobile" },
							{ label: "業務システム", href: "/services/development/system" },
						],
					},
					{
						label: "運用サービス",
						href: "/services/operation",
						children: [
							{ label: "保守", href: "/services/operation/maintenance" },
							{ label: "監視", href: "/services/operation/monitoring" },
						],
					},
				],
			},
			{
				title: "企業情報",
				items: [
					{ label: "会社概要", href: "/company" },
					{ label: "代表挨拶", href: "/company/message" },
					{ label: "沿革", href: "/company/history" },
					{ label: "採用情報", href: "/recruit" },
				],
			},
		],
		columns: 3,
	},
};

export const InFooter: Story = {
	render: () => (
		<div className="bg-gray-900 text-white p-8 md:p-16">
			<div className="max-w-6xl mx-auto">
				<h2 className="text-2xl font-bold mb-8">サイトマップ</h2>
				<div className="[&_h3]:text-white [&_h3]:border-white/20 [&_a]:text-gray-300 [&_a:hover]:text-white">
					<Sitemap sections={sampleSections} columns={4} />
				</div>
				<div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
					<p>© 2025 Company Name. All rights reserved.</p>
				</div>
			</div>
		</div>
	),
};

export const LargeWebsite: Story = {
	args: {
		sections: [
			{
				title: "製品・サービス",
				items: [
					{ label: "製品一覧", href: "/products" },
					{ label: "サービス一覧", href: "/services" },
					{ label: "価格", href: "/pricing" },
					{ label: "導入事例", href: "/cases" },
					{ label: "パートナー", href: "/partners" },
				],
			},
			{
				title: "サポート",
				items: [
					{ label: "ヘルプセンター", href: "/help" },
					{ label: "FAQ", href: "/faq" },
					{ label: "チュートリアル", href: "/tutorials" },
					{ label: "API ドキュメント", href: "/api" },
					{ label: "お問い合わせ", href: "/contact" },
				],
			},
			{
				title: "企業情報",
				items: [
					{ label: "会社概要", href: "/company" },
					{ label: "ニュース", href: "/news" },
					{ label: "ブログ", href: "/blog" },
					{ label: "採用情報", href: "/careers" },
					{ label: "IR情報", href: "/ir" },
				],
			},
			{
				title: "法的情報",
				items: [
					{ label: "利用規約", href: "/terms" },
					{ label: "プライバシーポリシー", href: "/privacy" },
					{ label: "特定商取引法", href: "/legal" },
					{ label: "セキュリティ", href: "/security" },
				],
			},
		],
		columns: 4,
	},
};
