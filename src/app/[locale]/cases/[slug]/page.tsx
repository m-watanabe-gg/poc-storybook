import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Card } from "@/components/data";
import { Badge } from "@/components/foundation/Badge";
import { Button } from "@/components/foundation/Button";
import { Heading } from "@/components/foundation/Heading";
import { Gallery } from "@/components/gallery";
import { Accordion } from "@/components/interactive";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Breadcrumb, type BreadcrumbItem } from "@/components/navigation";
import { BackButton } from "@/components/utility/BackButton";
import { generatePageMetadata } from "@/lib/metadata";

interface CaseDetailData {
	slug: string;
	company: string;
	industry: string;
	industries: string[];
	products: string[];
	challenge: string;
	solution: string;
	result: string;
	image: string;
	interview?: Array<{
		question: string;
		answer: string;
	}>;
	gallery: Array<{
		src: string;
		alt: string;
	}>;
	relatedCases: Array<{
		slug: string;
		company: string;
		industry: string;
		summary: string;
		image: string;
	}>;
}

// サンプル事例詳細データ（実際はAPIから取得）
const caseDetailsData: Record<string, CaseDetailData> = {
	"broadcasting-company-a": {
		slug: "broadcasting-company-a",
		company: "放送会社A",
		industry: "放送・映像",
		industries: ["放送・映像"],
		products: ["システムA", "システムB"],
		challenge:
			"従来のオンプレミス型の映像制作システムでは、制作チームが同じ場所にいる必要があり、リモートワークに対応できませんでした。また、大容量の映像ファイルの共有に時間がかかり、制作スケジュールに遅延が発生していました。",
		solution:
			"クラウドベースの映像制作システム「システムA」と、リアルタイム編集機能を持つ「システムB」を導入。複数拠点からの同時編集が可能になり、ファイル共有もクラウド経由で即座に行えるようになりました。",
		result:
			"制作時間を50%削減に成功。リモートワークへの完全対応により、優秀な人材を全国から採用できるようになりました。また、ストレージコストも30%削減できました。",
		image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=1200&q=80",
		interview: [
			{
				question: "導入のきっかけは何でしたか？",
				answer: "コロナ禍でリモートワークの必要性が高まったことがきっかけです。従来のシステムでは対応が困難でした。",
			},
			{
				question: "導入後の変化を教えてください",
				answer:
					"制作チームの働き方が大きく変わりました。場所を選ばずに高品質な映像制作ができるようになり、チーム全体の満足度も向上しています。",
			},
			{
				question: "今後の展望は？",
				answer: "AI技術を活用した自動編集機能の導入を検討しています。さらなる効率化を目指していきたいと思います。",
			},
		],
		gallery: [
			{
				src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
				alt: "オフィスの様子",
			},
			{
				src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
				alt: "システム画面1",
			},
			{
				src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
				alt: "システム画面2",
			},
			{
				src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
				alt: "チームの様子",
			},
		],
		relatedCases: [
			{
				slug: "broadcasting-company-f",
				company: "映像制作会社F",
				industry: "放送・映像",
				summary: "クラウドベースの映像編集システムで、複数拠点での共同作業が可能に",
				image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=600&q=80",
			},
			{
				slug: "service-company-c",
				company: "サービス業C社",
				industry: "サービス業",
				summary: "顧客管理システムで業務効率が2倍に向上",
				image: "https://placehold.co/600x400/FF9800/FFFFFF?text=Company+C",
			},
			{
				slug: "it-company-e",
				company: "IT企業E社",
				industry: "IT",
				summary: "開発プロセスの自動化により、リリースサイクルを50%短縮",
				image: "https://placehold.co/600x400/F44336/FFFFFF?text=Company+E",
			},
		],
	},
	// 他の事例も同様に定義（簡略化のため省略）
	"manufacturing-company-b": {
		slug: "manufacturing-company-b",
		company: "製造業B社",
		industry: "製造業",
		industries: ["製造業"],
		products: ["生産管理システム", "在庫管理システム", "IoTセンサー"],
		challenge:
			"従来の手作業による在庫管理では、在庫の可視化が困難で、過剰在庫と欠品が頻繁に発生していました。また、生産計画と実際の在庫状況が連動しておらず、納期遅延や機会損失が課題となっていました。月次の在庫棚卸に3日間を要し、業務効率も低下していました。",
		solution:
			"統合生産管理システムと、リアルタイム在庫管理システムを導入。工場内にIoTセンサーを設置し、製品の入出庫を自動で記録。生産計画と在庫状況が連動し、適正在庫を自動で算出する仕組みを構築しました。さらに、需要予測AIを活用し、季節変動にも対応できる発注システムを実現しました。",
		result:
			"在庫コストを30%削減に成功。過剰在庫が60%減少し、欠品率も90%改善しました。月次棚卸作業が3日から半日に短縮され、業務効率が大幅に向上。納期遵守率も95%から99.5%に改善し、顧客満足度が向上しました。",
		image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&q=80",
		interview: [
			{
				question: "導入前の最も大きな課題は何でしたか？",
				answer:
					"在庫の可視化ができていなかったことです。倉庫に何がどれだけあるのか正確に把握できず、生産現場と営業部門の間で情報共有ができていませんでした。その結果、お客様からの急な注文に対応できないケースも多々ありました。",
			},
			{
				question: "システム導入の決め手は何でしたか？",
				answer:
					"リアルタイムでの在庫把握と、生産計画との連動が決め手でした。デモンストレーションで、IoTセンサーによる自動記録と需要予測AIの精度の高さを実感し、これなら課題を解決できると確信しました。",
			},
			{
				question: "導入後、社内でどのような変化がありましたか？",
				answer:
					"まず、在庫に関する問い合わせが激減しました。誰でもリアルタイムで在庫状況を確認できるようになったためです。また、生産現場では適正在庫が維持されるようになり、倉庫スペースに余裕ができました。その結果、新製品ラインの増設も可能になりました。",
			},
			{
				question: "導入時に苦労した点はありますか？",
				answer:
					"最初はベテラン社員から「慣れた手作業の方が早い」という声もありました。しかし、実際に使い始めて業務が楽になったことを実感してもらえると、今では積極的に活用してくれています。段階的な導入とトレーニングが重要でした。",
			},
			{
				question: "今後の展望を教えてください",
				answer:
					"現在は自社工場のみの導入ですが、今後は協力会社との在庫情報共有も進めたいと考えています。サプライチェーン全体で在庫を最適化することで、さらなるコスト削減と納期短縮を目指します。",
			},
		],
		gallery: [
			{
				src: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
				alt: "工場内の生産ライン",
			},
			{
				src: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=800&q=80",
				alt: "在庫管理システムの画面",
			},
			{
				src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
				alt: "IoTセンサーが設置された倉庫",
			},
			{
				src: "https://images.unsplash.com/photo-1581092160607-ee67e3cfdde9?w=800&q=80",
				alt: "スタッフミーティングの様子",
			},
		],
		relatedCases: [
			{
				slug: "manufacturing-company-g",
				company: "製造業G社",
				industry: "製造業",
				summary: "品質管理システムの導入で不良品率を80%削減",
				image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=600&q=80",
			},
			{
				slug: "retail-company-d",
				company: "小売業D社",
				industry: "小売業",
				summary: "ECサイト刷新で売上が150%増加",
				image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
			},
			{
				slug: "finance-company-e",
				company: "金融業E社",
				industry: "金融業",
				summary: "セキュリティ強化と業務効率化を同時実現",
				image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
			},
		],
	},
};

interface PageProps {
	params: Promise<{
		slug: string;
		locale: string;
	}>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { locale, slug } = await params;

	// 事例データを取得
	const caseData = caseDetailsData[slug];

	// 事例が見つからない場合はデフォルトのメタデータを返す
	if (!caseData) {
		return generatePageMetadata({
			title: "事例が見つかりません",
			description: "お探しの導入事例は見つかりませんでした。",
			path: `/cases/${slug}/`,
			locale: locale as "ja" | "en",
		});
	}

	// 課題・解決策・成果を組み合わせて説明文を生成（160文字以内）
	const description = `${caseData.company} - ${caseData.industry} | ${caseData.result.substring(0, 100)}`;

	return generatePageMetadata({
		title: `${caseData.company} 導入事例`,
		description: description,
		path: `/cases/${slug}/`,
		locale: locale as "ja" | "en",
		image: caseData.image,
		type: "article",
	});
}

// 静的パラメータ生成
export async function generateStaticParams() {
	const locales = ["ja", "en"];
	const slugs = Object.keys(caseDetailsData);

	return locales.flatMap((locale) =>
		slugs.map((slug) => ({
			locale,
			slug,
		}))
	);
}

export default async function CaseDetailPage({ params }: PageProps) {
	const { slug, locale } = await params;
	const t = await getTranslations("cases");

	const caseData = caseDetailsData[slug];

	if (!caseData) {
		notFound();
	}

	const breadcrumbItems: BreadcrumbItem[] = [{ label: t("title"), href: "/cases/" }, { label: caseData.company }];

	return (
		<>
			{/* ページヘッダー */}
			<PageHeader title={caseData.company} subtitle={caseData.industry} />

			{/* パンくずリスト */}
			<section className="py-6 border-b">
				<Container>
					<div className="flex items-center justify-between">
						<Breadcrumb items={breadcrumbItems} />
						<BackButton variant="outline" size="sm" />
					</div>
				</Container>
			</section>

			{/* メイン画像 */}
			<section>
				<div className="relative aspect-[21/9] w-full overflow-hidden">
					<Image src={caseData.image} alt={caseData.company} fill className="object-cover" priority />
				</div>
			</section>

			{/* 導入概要 */}
			<Section variant="default" spacing="lg">
				<Container>
					<Heading as="h2" size="lg" className="text-center mb-12">
						{t("detail.overview")}
					</Heading>

					<div className="max-w-4xl mx-auto space-y-8">
						{/* 企業情報 */}
						<div>
							<div className="flex items-center gap-2 mb-3">
								<Heading as="h3" size="sm">
									{t("detail.company")}
								</Heading>
								{caseData.industries.map((industry) => (
									<Badge key={industry} variant="secondary">
										{industry}
									</Badge>
								))}
							</div>
							<p className="text-lg font-medium">{caseData.company}</p>
						</div>

						{/* 課題 */}
						<div className="bg-accent/5 rounded-lg p-6">
							<Heading as="h3" size="sm" className="mb-4 text-accent">
								{t("detail.challenge")}
							</Heading>
							<p className="text-gray-700 leading-relaxed">{caseData.challenge}</p>
						</div>

						{/* 導入ソリューション */}
						<div className="bg-primary/5 rounded-lg p-6">
							<Heading as="h3" size="sm" className="mb-4 text-primary">
								{t("detail.solution")}
							</Heading>
							<div className="mb-4">
								{caseData.products.map((product) => (
									<Badge key={product} variant="default" className="mr-2">
										{product}
									</Badge>
								))}
							</div>
							<p className="text-gray-700 leading-relaxed">{caseData.solution}</p>
						</div>

						{/* 効果 */}
						<div className="bg-state-success/5 rounded-lg p-6">
							<Heading as="h3" size="sm" className="mb-4 text-state-success">
								{t("detail.result")}
							</Heading>
							<p className="text-gray-700 leading-relaxed">{caseData.result}</p>
						</div>
					</div>
				</Container>
			</Section>

			{/* インタビュー */}
			{caseData.interview && caseData.interview.length > 0 && (
				<Section variant="gray" spacing="lg">
					<Container>
						<Heading as="h2" size="lg" className="text-center mb-12">
							{t("detail.interview")}
						</Heading>

						<div className="max-w-3xl mx-auto">
							<Accordion
								items={caseData.interview.map((item) => ({
									title: item.question,
									content: item.answer,
								}))}
								type="single"
							/>
						</div>
					</Container>
				</Section>
			)}

			{/* ギャラリー */}
			{caseData.gallery && caseData.gallery.length > 0 && (
				<Section variant="default" spacing="lg">
					<Container>
						<Heading as="h2" size="lg" className="text-center mb-12">
							{t("detail.gallery")}
						</Heading>

						<Gallery items={caseData.gallery} columns={2} gap="lg" enableLightbox />
					</Container>
				</Section>
			)}

			{/* 関連事例 */}
			{caseData.relatedCases && caseData.relatedCases.length > 0 && (
				<Section variant="gray" spacing="lg">
					<Container>
						<Heading as="h2" size="lg" className="text-center mb-12">
							{t("detail.relatedCases")}
						</Heading>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
							{caseData.relatedCases.map((relatedCase) => (
								<Card
									key={relatedCase.slug}
									variant="elevated"
									image={relatedCase.image}
									title={relatedCase.company}
									description={relatedCase.summary}
									href={`/cases/${relatedCase.slug}/`}
								>
									<Badge variant="secondary" size="sm" className="mb-2">
										{relatedCase.industry}
									</Badge>
								</Card>
							))}
						</div>

						<div className="text-center">
							<Button href={locale === "en" ? "/en/cases/" : "/cases/"} variant="outline">
								{t("detail.viewAllCases")}
							</Button>
						</div>
					</Container>
				</Section>
			)}

			{/* CTA */}
			<Section variant="primary" spacing="lg">
				<Container>
					<div className="text-center max-w-2xl mx-auto">
						<Heading as="h2" size="lg" className="text-white mb-6">
							同じような課題をお持ちですか？
						</Heading>
						<p className="text-white/90 text-lg mb-8">
							お客様のビジネス課題に最適なソリューションをご提案します。まずはお気軽にご相談ください。
						</p>
						<div className="flex flex-wrap gap-4 justify-center">
							<Button href={locale === "en" ? "/en/contact/" : "/contact/"} variant="accent" size="lg">
								お問い合わせ
							</Button>
							<Button
								href={locale === "en" ? "/en/services/" : "/services/"}
								variant="outline"
								size="lg"
								className="bg-white/10 border-white text-white hover:bg-white/20"
							>
								サービスを見る
							</Button>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
