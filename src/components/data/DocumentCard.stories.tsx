import type { Meta, StoryObj } from "@storybook/react";
import { DocumentCard } from "./DocumentCard";

const meta: Meta<typeof DocumentCard> = {
	title: "Components/DocumentCard",
	component: DocumentCard,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		fileType: {
			control: "select",
			options: ["pdf", "excel", "word", "pptx", "zip", "other"],
			description: "ファイルタイプ",
		},
	},
};

export default meta;
type Story = StoryObj<typeof DocumentCard>;

export const PDF: Story = {
	args: {
		title: "会社案内パンフレット",
		fileType: "pdf",
		fileSize: "2.3 MB",
		href: "/downloads/company-brochure.pdf",
		description: "当社のサービスと実績をまとめた資料です。",
		date: "2025-10-20",
	},
};

export const Excel: Story = {
	args: {
		title: "価格表 2025年度版",
		fileType: "excel",
		fileSize: "156 KB",
		href: "/downloads/price-list.xlsx",
		description: "製品とサービスの詳細な価格表です。",
		date: "2025-04-01",
	},
};

export const Word: Story = {
	args: {
		title: "利用規約",
		fileType: "word",
		fileSize: "85 KB",
		href: "/downloads/terms.docx",
		description: "サービス利用規約の詳細版です。",
		date: "2025-01-15",
	},
};

export const PowerPoint: Story = {
	args: {
		title: "製品紹介プレゼンテーション",
		fileType: "pptx",
		fileSize: "5.8 MB",
		href: "/downloads/product-presentation.pptx",
		description: "製品の特徴と使い方を説明したスライド資料です。",
		date: "2025-09-10",
	},
};

export const ZIP: Story = {
	args: {
		title: "デザインアセット一式",
		fileType: "zip",
		fileSize: "45.2 MB",
		href: "/downloads/design-assets.zip",
		description: "ロゴ、アイコン、テンプレートなどを含むZIPファイルです。",
		date: "2025-08-05",
	},
};

export const WithoutIcon: Story = {
	args: {
		title: "技術仕様書",
		fileType: "pdf",
		fileSize: "1.1 MB",
		href: "/downloads/technical-spec.pdf",
		showIcon: false,
	},
};

export const MinimalInfo: Story = {
	args: {
		title: "簡易ドキュメント",
		fileType: "pdf",
		href: "/downloads/simple.pdf",
	},
};

export const DocumentList: Story = {
	render: () => (
		<div className="space-y-4 max-w-4xl">
			<h2 className="text-2xl font-bold mb-6">ダウンロード資料</h2>
			<DocumentCard
				title="会社案内パンフレット 2025"
				fileType="pdf"
				fileSize="2.3 MB"
				href="#"
				description="当社のサービスと実績を詳しく紹介しています。"
				date="2025-10-01"
			/>
			<DocumentCard
				title="製品カタログ"
				fileType="pdf"
				fileSize="8.7 MB"
				href="#"
				description="全製品ラインナップとスペック一覧です。"
				date="2025-09-15"
			/>
			<DocumentCard
				title="価格表 2025年度版"
				fileType="excel"
				fileSize="156 KB"
				href="#"
				description="製品とサービスの価格表（税込）。"
				date="2025-04-01"
			/>
			<DocumentCard
				title="導入事例集"
				fileType="pptx"
				fileSize="12.5 MB"
				href="#"
				description="お客様の成功事例を紹介するプレゼンテーション資料。"
				date="2025-08-20"
			/>
		</div>
	),
};

export const Grid: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl">
			<DocumentCard title="製品カタログ" fileType="pdf" fileSize="8.7 MB" href="#" description="全製品の詳細情報" />
			<DocumentCard title="価格表" fileType="excel" fileSize="156 KB" href="#" description="2025年度版価格表" />
			<DocumentCard title="導入事例" fileType="pptx" fileSize="12.5 MB" href="#" description="成功事例のプレゼン" />
			<DocumentCard title="技術資料" fileType="zip" fileSize="25.3 MB" href="#" description="開発者向けドキュメント" />
		</div>
	),
};

export const InSection: Story = {
	render: () => (
		<div className="max-w-4xl">
			<section className="mb-12">
				<h2 className="text-2xl font-bold mb-2">製品資料</h2>
				<p className="text-gray-600 mb-6">製品に関する詳細な資料をダウンロードいただけます。</p>
				<div className="space-y-4">
					<DocumentCard
						title="製品カタログ総合版"
						fileType="pdf"
						fileSize="15.2 MB"
						href="#"
						description="全製品の詳細スペックと価格情報を掲載しています。"
						date="2025-10-01"
					/>
					<DocumentCard
						title="クイックスタートガイド"
						fileType="pdf"
						fileSize="3.5 MB"
						href="#"
						description="製品の基本的な使い方をステップバイステップで説明します。"
						date="2025-09-28"
					/>
				</div>
			</section>

			<section>
				<h2 className="text-2xl font-bold mb-2">技術資料</h2>
				<p className="text-gray-600 mb-6">開発者向けの技術文書をご用意しています。</p>
				<div className="space-y-4">
					<DocumentCard
						title="API仕様書"
						fileType="pdf"
						fileSize="2.1 MB"
						href="#"
						description="REST APIの詳細な仕様とサンプルコードです。"
						date="2025-10-15"
					/>
					<DocumentCard
						title="SDK ドキュメント"
						fileType="zip"
						fileSize="8.9 MB"
						href="#"
						description="各種プログラミング言語向けのSDKとサンプル集。"
						date="2025-10-10"
					/>
				</div>
			</section>
		</div>
	),
};

export const AllFileTypes: Story = {
	render: () => (
		<div className="space-y-4 max-w-4xl">
			<h2 className="text-2xl font-bold mb-6">すべてのファイルタイプ</h2>
			<DocumentCard
				title="PDFドキュメント"
				fileType="pdf"
				fileSize="2.3 MB"
				href="#"
				description="PDF形式のドキュメント"
			/>
			<DocumentCard
				title="Excelスプレッドシート"
				fileType="excel"
				fileSize="156 KB"
				href="#"
				description="Excel形式のデータファイル"
			/>
			<DocumentCard
				title="Wordドキュメント"
				fileType="word"
				fileSize="85 KB"
				href="#"
				description="Word形式の文書ファイル"
			/>
			<DocumentCard
				title="PowerPointプレゼンテーション"
				fileType="pptx"
				fileSize="5.8 MB"
				href="#"
				description="PowerPoint形式のスライド"
			/>
			<DocumentCard title="ZIPアーカイブ" fileType="zip" fileSize="45.2 MB" href="#" description="圧縮ファイル" />
			<DocumentCard title="その他のファイル" fileType="other" fileSize="1.2 MB" href="#" description="汎用ファイル" />
		</div>
	),
};
