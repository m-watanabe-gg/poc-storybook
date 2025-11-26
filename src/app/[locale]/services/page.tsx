import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Box } from "@/components/content";
import { Card } from "@/components/data";
import { Heading } from "@/components/foundation/Heading";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "services" });

	return generatePageMetadata({
		title: String(t("title")),
		description: String(t("subtitle")),
		path: "/services/",
		locale: locale as "ja" | "en",
	});
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "services" });

	const services = [
		{
			title: String(t("webDevelopment.title")),
			description: String(t("webDevelopment.description")),
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
			icon: "🌐",
		},
		{
			title: String(t("systemDevelopment.title")),
			description: String(t("systemDevelopment.description")),
			image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
			icon: "⚙️",
		},
		{
			title: String(t("consulting.title")),
			description: String(t("consulting.description")),
			image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&q=80",
			icon: "💡",
		},
		{
			title: String(t("design.title")),
			description: String(t("design.description")),
			image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
			icon: "🎨",
		},
	];

	return (
		<>
			<PageHeader title={String(t("title"))} subtitle={String(t("subtitle"))} />

			{/* サービス一覧 */}
			<section className="py-16 md:py-24">
				<Container>
					<div className="text-center mb-16">
						<Heading as="h2" size="lg" className="mb-6">
							{String(t("description"))}
						</Heading>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">
							最新の技術と豊富な経験を活かして、お客様のビジネスに最適なソリューションを提供します。
						</p>
					</div>

					<div className="space-y-16">
						{services.map((service) => (
							<div key={service.title} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
								{/* 画像 */}
								<div>
									<Card variant="elevated" image={service.image} />
								</div>

								{/* コンテンツ */}
								<div>
									<Box padding="lg">
										<div className="text-5xl mb-4">{service.icon}</div>
										<Heading as="h3" size="md" className="mb-4">
											{service.title}
										</Heading>
										<p className="text-base leading-relaxed text-gray-700 mb-6">{service.description}</p>
										<Link
											href="/contact/"
											className="inline-flex items-center text-primary font-medium hover:underline"
										>
											詳しく見る
											<svg
												className="w-5 h-5 ml-2"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
												role="img"
												aria-label="右矢印"
											>
												<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
											</svg>
										</Link>
									</Box>
								</div>
							</div>
						))}
					</div>
				</Container>
			</section>

			{/* 特徴セクション */}
			<section className="bg-secondary py-16 md:py-24">
				<Container>
					<Heading as="h2" size="lg" className="text-center mb-12">
						私たちの強み
					</Heading>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card
							variant="elevated"
							title="豊富な実績"
							description="多様な業界での開発実績があり、お客様のビジネスに最適なソリューションをご提案します。"
						/>
						<Card
							variant="elevated"
							title="最新技術"
							description="常に最新の技術トレンドをキャッチアップし、モダンで保守性の高いシステムを構築します。"
						/>
						<Card
							variant="elevated"
							title="迅速な対応"
							description="アジャイル開発手法を採用し、柔軟かつスピーディーにプロジェクトを進行します。"
						/>
					</div>
				</Container>
			</section>

			{/* CTAセクション */}
			<section className="py-16 md:py-24">
				<Container>
					<div className="text-center max-w-2xl mx-auto">
						<Heading as="h2" size="lg" className="mb-6">
							プロジェクトを始めましょう
						</Heading>
						<p className="text-lg mb-8 text-gray-700">
							お客様のビジネス課題をお聞かせください。最適なソリューションをご提案いたします。
						</p>
						<div className="flex gap-4 justify-center">
							<Link
								href="/contact/"
								className="inline-block px-8 py-3 bg-primary text-white rounded-full font-medium hover:opacity-90 transition-opacity"
							>
								お問い合わせ
							</Link>
							<Link
								href="/about/"
								className="inline-block px-8 py-3 bg-white text-primary border-2 border-primary rounded-full font-medium hover:bg-primary hover:text-white transition-colors"
							>
								会社について
							</Link>
						</div>
					</div>
				</Container>
			</section>
		</>
	);
}
