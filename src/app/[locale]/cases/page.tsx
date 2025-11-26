import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { CasesClientContent } from "@/components/content/CasesClientContent";
import type { CaseStudy } from "@/components/content/types";
import type { FilterCategory } from "@/components/form";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "cases" });

	return generatePageMetadata({
		title: String(t("title")),
		description: String(t("subtitle")),
		path: "/cases/",
		locale: locale as "ja" | "en",
	});
}

export default async function CasesPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "cases" });

	// サンプル事例データ（実際はAPIから取得）
	const caseStudiesData: CaseStudy[] = [
		{
			id: "1",
			slug: "broadcasting-company-a",
			company: "放送会社A",
			industries: ["broadcasting"],
			products: ["systemA", "systemB"],
			challenges: ["costReduction", "efficiency"],
			summary:
				"映像制作ワークフローを効率化し、制作時間を50%削減。クラウドベースのシステムで、リモートワークにも対応しました。",
			image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
		},
		{
			id: "2",
			slug: "manufacturing-company-b",
			company: "製造業B社",
			industries: ["manufacturing"],
			products: ["systemB", "systemC"],
			challenges: ["costReduction", "quality"],
			summary:
				"生産管理システムの導入で在庫コストを30%削減。リアルタイムでの生産状況把握により、納期遅延が大幅に減少しました。",
			image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
		},
		{
			id: "3",
			slug: "service-company-c",
			company: "サービス業C社",
			industries: ["service"],
			products: ["systemA", "systemC"],
			challenges: ["efficiency", "quality"],
			summary: "顧客管理システムで業務効率が2倍に向上。顧客満足度スコアも20ポイント改善しました。",
			image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
		},
		{
			id: "4",
			slug: "retail-company-d",
			company: "小売業D社",
			industries: ["retail"],
			products: ["systemB"],
			challenges: ["costReduction", "efficiency"],
			summary: "ECサイト刷新で売上が150%増加。在庫連動により機会損失も大幅に減少しました。",
			image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
		},
		{
			id: "5",
			slug: "finance-company-e",
			company: "金融業E社",
			industries: ["finance"],
			products: ["systemA", "systemC"],
			challenges: ["security"],
			summary: "セキュリティ強化と業務効率化を同時実現。コンプライアンス対応もスムーズになりました。",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
		},
		{
			id: "6",
			slug: "education-company-f",
			company: "教育機関F",
			industries: ["education"],
			products: ["systemA"],
			challenges: ["efficiency", "quality"],
			summary: "オンライン学習プラットフォームで受講者数3倍。学習管理の効率も大幅に向上しました。",
			image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
		},
		{
			id: "7",
			slug: "it-company-g",
			company: "IT企業G社",
			industries: ["it"],
			products: ["systemB", "systemC"],
			challenges: ["efficiency"],
			summary: "開発プロセスの自動化により、リリースサイクルを50%短縮。品質も向上しました。",
			image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80",
		},
		{
			id: "8",
			slug: "healthcare-company-h",
			company: "医療機関H",
			industries: ["healthcare"],
			products: ["systemA", "systemC"],
			challenges: ["security", "quality"],
			summary: "電子カルテシステムで業務効率化と医療の質向上を実現。患者満足度も向上しました。",
			image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
		},
		{
			id: "9",
			slug: "logistics-company-i",
			company: "物流業I社",
			industries: ["logistics"],
			products: ["systemB"],
			challenges: ["costReduction", "efficiency"],
			summary: "配送ルート最適化で燃料コスト20%削減。配送時間も短縮しました。",
			image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&q=80",
		},
	];

	// フィルターカテゴリ定義
	const industryFilters: FilterCategory = {
		id: "industries",
		label: String(t("filters.industry")),
		options: [
			{ value: "broadcasting", label: String(t("industries.broadcasting")) },
			{ value: "manufacturing", label: String(t("industries.manufacturing")) },
			{ value: "service", label: String(t("industries.service")) },
			{ value: "retail", label: String(t("industries.retail")) },
			{ value: "finance", label: String(t("industries.finance")) },
			{ value: "education", label: String(t("industries.education")) },
			{ value: "it", label: String(t("industries.it")) },
			{ value: "healthcare", label: String(t("industries.healthcare")) },
			{ value: "logistics", label: String(t("industries.logistics")) },
		],
	};

	const productFilters: FilterCategory = {
		id: "products",
		label: String(t("filters.product")),
		options: [
			{ value: "systemA", label: String(t("products.systemA")) },
			{ value: "systemB", label: String(t("products.systemB")) },
			{ value: "systemC", label: String(t("products.systemC")) },
		],
	};

	const challengeFilters: FilterCategory = {
		id: "challenges",
		label: String(t("filters.challenge")),
		options: [
			{ value: "costReduction", label: String(t("challenges.costReduction")) },
			{ value: "efficiency", label: String(t("challenges.efficiency")) },
			{ value: "quality", label: String(t("challenges.quality")) },
			{ value: "security", label: String(t("challenges.security")) },
		],
	};

	return (
		<>
			<PageHeader title={String(t("title"))} subtitle={String(t("subtitle"))} />

			<Container>
				<CasesClientContent
					initialCases={caseStudiesData}
					industryFilters={industryFilters}
					productFilters={productFilters}
					challengeFilters={challengeFilters}
				/>
			</Container>
		</>
	);
}
