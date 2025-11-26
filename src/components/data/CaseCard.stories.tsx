import type { Meta, StoryObj } from "@storybook/react";
import { CaseCard } from "./CaseCard";

const meta: Meta<typeof CaseCard> = {
	title: "Components/CaseCard",
	component: CaseCard,
	parameters: {
		docs: {
			description: {
				component: "導入事例専用のカードコンポーネント。業種、製品、課題をバッジで表示します。",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		company: {
			control: { type: "text" },
		},
		industries: {
			control: { type: "object" },
		},
		products: {
			control: { type: "object" },
		},
		challenges: {
			control: { type: "object" },
		},
		summary: {
			control: { type: "text" },
		},
		image: {
			control: { type: "text" },
		},
		href: {
			control: { type: "text" },
		},
		variant: {
			control: { type: "select" },
			options: ["default", "compact"],
		},
	},
};

export default meta;
type Story = StoryObj<typeof CaseCard>;

/**
 * デフォルトの導入事例カード
 */
export const Default: Story = {
	args: {
		company: "放送会社A",
		industries: ["放送・映像"],
		products: ["システムA", "システムB"],
		challenges: ["コスト削減", "業務効率化"],
		summary:
			"映像制作ワークフローを効率化し、制作時間を50%削減。クラウドベースのシステムで、リモートワークにも対応しました。",
		image: "https://placehold.co/800x450/4CAF50/FFFFFF?text=Broadcasting+Company",
		href: "/cases/broadcasting-company-a/",
	},
};

/**
 * コンパクトバリエーション
 */
export const Compact: Story = {
	args: {
		...Default.args,
		variant: "compact",
	},
};

/**
 * 製造業の事例
 */
export const ManufacturingCase: Story = {
	args: {
		company: "製造業B社",
		industries: ["製造業"],
		products: ["生産管理システム", "在庫管理システム"],
		challenges: ["在庫最適化", "品質向上"],
		summary:
			"生産管理システムの導入で在庫コストを30%削減。リアルタイムでの生産状況把握により、納期遅延が大幅に減少しました。",
		image: "https://placehold.co/800x450/2196F3/FFFFFF?text=Manufacturing",
		href: "/cases/manufacturing-company-b/",
	},
};

/**
 * サービス業の事例
 */
export const ServiceCase: Story = {
	args: {
		company: "サービス業C社",
		industries: ["サービス業", "小売"],
		products: ["顧客管理システム"],
		challenges: ["業務効率化", "顧客満足度向上"],
		summary:
			"顧客管理システムで業務効率が2倍に向上。顧客データの一元管理により、パーソナライズされたサービス提供が可能になりました。",
		image: "https://placehold.co/800x450/FF9800/FFFFFF?text=Service+Company",
		href: "/cases/service-company-c/",
	},
};

/**
 * 複数業種の事例
 */
export const MultiIndustryCase: Story = {
	args: {
		company: "複合企業D社",
		industries: ["製造業", "サービス業", "IT"],
		products: ["統合基幹システム", "分析ツール", "クラウドインフラ"],
		challenges: ["コスト削減", "業務効率化", "品質向上", "データ活用"],
		summary:
			"複数事業を展開する企業向けに統合基幹システムを導入。事業横断でのデータ活用により、経営の意思決定スピードが大幅に向上しました。",
		image: "https://placehold.co/800x450/9C27B0/FFFFFF?text=Multi+Business",
		href: "/cases/multi-business-d/",
	},
};

/**
 * グリッドレイアウトの例
 */
export const GridLayout: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			<CaseCard
				company="放送会社A"
				industries={["放送・映像"]}
				products={["システムA"]}
				challenges={["コスト削減"]}
				summary="映像制作ワークフローを効率化し、制作時間を50%削減"
				image="https://placehold.co/600x400/4CAF50/FFFFFF?text=Company+A"
				href="/cases/company-a/"
			/>
			<CaseCard
				company="製造業B社"
				industries={["製造業"]}
				products={["生産管理システム"]}
				challenges={["業務効率化"]}
				summary="生産管理システムの導入で在庫コストを30%削減"
				image="https://placehold.co/600x400/2196F3/FFFFFF?text=Company+B"
				href="/cases/company-b/"
			/>
			<CaseCard
				company="サービス業C社"
				industries={["サービス業"]}
				products={["顧客管理システム"]}
				challenges={["品質向上"]}
				summary="顧客管理システムで業務効率が2倍に向上"
				image="https://placehold.co/600x400/FF9800/FFFFFF?text=Company+C"
				href="/cases/company-c/"
			/>
		</div>
	),
};

/**
 * コンパクトレイアウトの例
 */
export const CompactGridLayout: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
			{[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
				<CaseCard
					key={i}
					variant="compact"
					company={`企業${i}`}
					industries={["業種"]}
					products={["製品"]}
					challenges={["課題"]}
					summary="導入事例の概要テキスト"
					image={`https://placehold.co/400x300/297B50/FFFFFF?text=Case+${i}`}
					href={`/cases/case-${i}/`}
				/>
			))}
		</div>
	),
};
