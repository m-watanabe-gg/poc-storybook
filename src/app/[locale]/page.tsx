import { useLocale, useTranslations } from "next-intl";
import { MdArrowForward } from "react-icons/md";
import { ScrollReveal } from "@/components/animation";
import { CaseSlider } from "@/components/carousel/CaseSlider";
import { HeroSlider } from "@/components/carousel/HeroSlider";
import { Card, NewsCard } from "@/components/data";
import { Badge } from "@/components/foundation/Badge";
import { Button } from "@/components/foundation/Button";
import { Heading } from "@/components/foundation/Heading";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";

export default function HomePage() {
	const locale = useLocale();
	const t = useTranslations("home");
	const tServices = useTranslations("services");

	// サンプルニュースデータ（最新3件）
	const latestNews = [
		{
			slug: "new-feature-release",
			title: "新機能リリースのお知らせ",
			date: "2025-10-20",
			category: "プレスリリース",
			excerpt: "最新のコンポーネントと機能を追加しました。詳細はこちらをご覧ください。",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
		},
		{
			slug: "new-office-opening",
			title: "新オフィスオープンのお知らせ",
			date: "2025-10-05",
			category: "企業情報",
			excerpt: "東京に新オフィスをオープンいたしました。",
			image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
		},
		{
			slug: "media-feature",
			title: "メディア掲載のお知らせ",
			date: "2025-10-01",
			category: "プレスリリース",
			excerpt: "当社のサービスが主要メディアに取り上げられました。",
			image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
		},
	];

	// ヒーロースライダーデータ
	const heroSlides = [
		{
			image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80",
			title: t("hero.title"),
			subtitle: t("hero.subtitle"),
			overlayOpacity: 0.75,
		},
		{
			image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80",
			title: "デザインとパフォーマンスの融合",
			subtitle: "美しく、高速で、使いやすいWebサイトを実現",
			overlayOpacity: 0.7,
		},
		{
			image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80",
			title: "未来を創るデジタル体験",
			subtitle: "ユーザーを魅了する体験設計とコンポーネント管理",
			overlayOpacity: 0.8,
		},
	];

	// サンプル導入事例データ（6件）
	const casestudies = [
		{
			slug: "broadcasting-company-a",
			company: "放送会社A",
			industry: "放送・映像",
			image: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
			summary: "映像制作ワークフローを効率化し、制作時間を50%削減",
		},
		{
			slug: "manufacturing-company-b",
			company: "製造業B社",
			industry: "製造業",
			image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
			summary: "生産管理システムの導入で在庫コストを30%削減",
		},
		{
			slug: "service-company-c",
			company: "サービス業C社",
			industry: "サービス業",
			image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=80",
			summary: "顧客管理システムで業務効率が2倍に向上",
		},
		{
			slug: "retail-company-d",
			company: "小売業D社",
			industry: "小売業",
			image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
			summary: "ECサイト刷新で売上が150%増加",
		},
		{
			slug: "finance-company-e",
			company: "金融業E社",
			industry: "金融業",
			image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
			summary: "セキュリティ強化と業務効率化を同時実現",
		},
		{
			slug: "education-company-f",
			company: "教育機関F",
			industry: "教育",
			image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
			summary: "オンライン学習プラットフォームで受講者数3倍",
		},
	];

	return (
		<>
			{/* ヒーロースライダー */}
			<HeroSlider slides={heroSlides} autoPlay autoPlayInterval={6000} showIndicators showArrows />

			{/* 特徴セクション */}
			<Section variant="default" spacing="lg">
				<Container>
					<ScrollReveal variant="fadeIn">
						<Heading as="h2" size="lg" className="text-center mb-12">
							{t("features.title")}
						</Heading>
					</ScrollReveal>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						<ScrollReveal variant="slideUp" delay={0}>
							<Card
								variant="elevated"
								title={t("features.componentManagement.title")}
								description={t("features.componentManagement.description")}
							/>
						</ScrollReveal>
						<ScrollReveal variant="slideUp" delay={0.1}>
							<Card
								variant="elevated"
								title={t("features.multilingual.title")}
								description={t("features.multilingual.description")}
							/>
						</ScrollReveal>
						<ScrollReveal variant="slideUp" delay={0.2}>
							<Card
								variant="elevated"
								title={t("features.typescript.title")}
								description={t("features.typescript.description")}
							/>
						</ScrollReveal>
						<ScrollReveal variant="slideUp" delay={0.3}>
							<Card
								variant="elevated"
								title={t("features.modernStack.title")}
								description={t("features.modernStack.description")}
							/>
						</ScrollReveal>
						<ScrollReveal variant="slideUp" delay={0.4}>
							<Card
								variant="elevated"
								title={t("features.fullstack.title")}
								description={t("features.fullstack.description")}
							/>
						</ScrollReveal>
						<ScrollReveal variant="slideUp" delay={0.5}>
							<Card
								variant="elevated"
								title={t("features.quality.title")}
								description={t("features.quality.description")}
							/>
						</ScrollReveal>
					</div>
				</Container>
			</Section>

			{/* サービスセクション */}
			<Section variant="gray" spacing="lg">
				<Container>
					<ScrollReveal variant="fadeIn">
						<div className="text-center mb-12">
							<p className="text-sm text-primary font-semibold mb-2">{t("services.subtitle")}</p>
							<Heading as="h2" size="lg">
								{t("services.title")}
							</Heading>
						</div>
					</ScrollReveal>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
						<ScrollReveal variant="scale" delay={0}>
							<Card
								variant="bordered"
								title={tServices("webDevelopment.title")}
								description={tServices("webDevelopment.description")}
								className="hover:shadow-lg transition-shadow"
							/>
						</ScrollReveal>
						<ScrollReveal variant="scale" delay={0.1}>
							<Card
								variant="bordered"
								title={tServices("systemDevelopment.title")}
								description={tServices("systemDevelopment.description")}
								className="hover:shadow-lg transition-shadow"
							/>
						</ScrollReveal>
						<ScrollReveal variant="scale" delay={0.2}>
							<Card
								variant="bordered"
								title={tServices("consulting.title")}
								description={tServices("consulting.description")}
								className="hover:shadow-lg transition-shadow"
							/>
						</ScrollReveal>
						<ScrollReveal variant="scale" delay={0.3}>
							<Card
								variant="bordered"
								title={tServices("design.title")}
								description={tServices("design.description")}
								className="hover:shadow-lg transition-shadow"
							/>
						</ScrollReveal>
					</div>

					<ScrollReveal variant="fadeIn" delay={0.4}>
						<div className="text-center">
							<Button
								href={locale === "en" ? "/en/services/" : "/services/"}
								size="lg"
								animated={false}
								rightIcon={<MdArrowForward />}
							>
								{t("services.viewAll")}
							</Button>
						</div>
					</ScrollReveal>
				</Container>
			</Section>

			{/* ニュースセクション */}
			<Section variant="transparent" spacing="lg">
				<Container>
					<ScrollReveal variant="fadeIn">
						<div className="text-center mb-12">
							<p className="text-sm text-primary font-semibold mb-2">{t("news.subtitle")}</p>
							<Heading as="h2" size="lg">
								{t("news.title")}
							</Heading>
						</div>
					</ScrollReveal>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
						{latestNews.map((news, index) => (
							<ScrollReveal key={news.slug} variant="slideUp" delay={index * 0.1}>
								<NewsCard
									title={news.title}
									date={news.date}
									category={news.category}
									description={news.excerpt}
									image={news.image}
									href={`/news/${news.slug}/`}
								/>
							</ScrollReveal>
						))}
					</div>

					<ScrollReveal variant="fadeIn" delay={0.3}>
						<div className="text-center">
							<Button
								href={locale === "en" ? "/en/news/" : "/news/"}
								variant="outline"
								animated={false}
								size="lg"
								rightIcon={<MdArrowForward />}
							>
								{t("news.viewAll")}
							</Button>
						</div>
					</ScrollReveal>
				</Container>
			</Section>

			{/* 導入事例セクション */}
			<Section variant="gray" spacing="lg">
				<Container>
					<ScrollReveal variant="fadeIn">
						<div className="text-center mb-12">
							<Heading as="h2" size="lg" subtitle={t("cases.subtitle")}>
								{t("cases.title")}
							</Heading>
						</div>
					</ScrollReveal>

					<CaseSlider
						items={casestudies.map((caseItem) => ({
							id: caseItem.slug,
							card: {
								variant: "elevated",
								image: caseItem.image,
								title: caseItem.company,
								description: caseItem.summary,
								href: `/cases/${caseItem.slug}/`,
								badge: caseItem.industry,
							},
						}))}
						slidesToShow={3}
						spaceBetween={32}
						arrowVariant="secondary"
					/>

					<ScrollReveal variant="fadeIn" delay={0.3}>
						<div className="text-center mt-8">
							<Button
								href={locale === "en" ? "/en/cases/" : "/cases/"}
								animated={false}
								size="lg"
								rightIcon={<MdArrowForward />}
							>
								{t("cases.viewAll")}
							</Button>
						</div>
					</ScrollReveal>
				</Container>
			</Section>

			{/* CTAセクション */}
			<Section variant="secondary" spacing="lg">
				<Container>
					<ScrollReveal variant="scale">
						<div className="text-center max-w-2xl mx-auto">
							<Heading as="h2" size="lg" className="mb-6">
								{t("cta.title")}
							</Heading>
							<p className="text-lg mb-8 text-gray-700">{t("cta.description")}</p>
							<div className="flex flex-wrap gap-4 justify-center">
								<Button href={locale === "en" ? "/en/format/" : "/format/"} size="lg">
									{t("cta.components")}
								</Button>
								<Button href={locale === "en" ? "/en/news/" : "/news/"} size="lg" variant="outline">
									{t("cta.news")}
								</Button>
							</div>
						</div>
					</ScrollReveal>
				</Container>
			</Section>
		</>
	);
}
