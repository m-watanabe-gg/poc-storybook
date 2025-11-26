import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Breadcrumb, type BreadcrumbItem, Pagination } from "@/components/navigation";
import { generatePageMetadata } from "@/lib/metadata";

// カテゴリマッピング
const categoryMap: Record<string, { ja: string; en: string }> = {
	press: { ja: "プレスリリース", en: "Press Release" },
	products: { ja: "製品情報", en: "Products" },
	news: { ja: "お知らせ", en: "News" },
	company: { ja: "企業情報", en: "Company" },
};

interface PageProps {
	params: Promise<{
		locale: string;
		slug: string;
	}>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { locale, slug } = await params;
	const t = await getTranslations({ locale, namespace: "news" });

	// カテゴリ名を取得
	const categoryName = categoryMap[slug]?.[locale as "ja" | "en"] || slug;

	return generatePageMetadata({
		title: `${categoryName} | ${String(t("title"))}`,
		description: `${categoryName}カテゴリのニュース一覧`,
		path: `/news/category/${slug}/`,
		locale: locale as "ja" | "en",
	});
}

export async function generateStaticParams() {
	const categories = ["press", "products", "news", "company"];
	const locales = ["ja", "en"];

	return locales.flatMap((locale) =>
		categories.map((slug) => ({
			locale,
			slug,
		}))
	);
}

export default async function NewsCategoryPage({ params }: PageProps) {
	const { locale, slug: categorySlug } = await params;
	const t = await getTranslations({ locale, namespace: "news" });

	// カテゴリ名を取得
	const categoryName = categoryMap[categorySlug]?.[locale as "ja" | "en"] || categorySlug;

	// サンプルデータ（後でAPIから取得）
	const allNewsItems = [
		{
			id: 1,
			title: "新製品リリースのお知らせ",
			slug: "new-product-release",
			excerpt: "革新的な新製品を発表しました。詳細はこちらをご覧ください。",
			date: "2025-10-20",
			category: "products",
			categoryLabel: "製品情報",
			image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
		},
		{
			id: 2,
			title: "サービスアップデートのご案内",
			slug: "service-update",
			excerpt: "サービスに新機能が追加されました。より便利にご利用いただけます。",
			date: "2025-10-15",
			category: "news",
			categoryLabel: "お知らせ",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
		},
		{
			id: 3,
			title: "年末年始の営業時間について",
			slug: "holiday-schedule",
			excerpt: "年末年始の営業時間をお知らせいたします。",
			date: "2025-10-10",
			category: "news",
			categoryLabel: "お知らせ",
		},
		{
			id: 4,
			title: "新オフィスオープンのお知らせ",
			slug: "new-office-opening",
			excerpt: "東京に新オフィスをオープンいたしました。",
			date: "2025-10-05",
			category: "company",
			categoryLabel: "企業情報",
			image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
		},
		{
			id: 5,
			title: "メディア掲載のお知らせ",
			slug: "media-feature",
			excerpt: "当社のサービスが主要メディアに取り上げられました。",
			date: "2025-10-01",
			category: "press",
			categoryLabel: "プレスリリース",
			image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
		},
	];

	// カテゴリでフィルター
	const filteredNews = allNewsItems.filter((item) => item.category === categorySlug);

	// パンくずリスト
	const breadcrumbItems: BreadcrumbItem[] = [
		{ label: String(t("breadcrumb.home")), href: locale === "en" ? "/en/" : "/" },
		{ label: String(t("title")), href: locale === "en" ? "/en/news/" : "/news/" },
		{ label: categoryName, href: "" },
	];

	return (
		<>
			<PageHeader title={categoryName} subtitle={`${categoryName}カテゴリのニュース一覧`} />

			<Container>
				<Suspense fallback={<div className="py-12">読み込み中...</div>}>
					<Section variant="default" spacing="lg">
						<div className="mb-8">
							<Breadcrumb items={breadcrumbItems} />
						</div>

						{/* 記事一覧 */}
						<div className="space-y-6">
							{filteredNews.length > 0 ? (
								filteredNews.map((item) => (
									<article
										key={item.id}
										className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
									>
										<Link
											href={locale === "en" ? `/en/news/${item.slug}/` : `/news/${item.slug}/`}
											className="block p-6"
										>
											<div className="flex items-start gap-4">
												<div className="flex-1">
													<div className="flex items-center gap-3 mb-2">
														<time className="text-sm text-gray-600" dateTime={item.date}>
															{new Date(item.date).toLocaleDateString(locale === "en" ? "en-US" : "ja-JP", {
																year: "numeric",
																month: "long",
																day: "numeric",
															})}
														</time>
														<span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
															{item.categoryLabel}
														</span>
													</div>
													<h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-primary transition-colors">
														{item.title}
													</h2>
													{item.excerpt && <p className="text-gray-600 text-sm line-clamp-2">{item.excerpt}</p>}
												</div>
												<div className="flex-shrink-0">
													<svg
														className="w-6 h-6 text-gray-400"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
														role="img"
														aria-label="詳細を見る"
													>
														<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
													</svg>
												</div>
											</div>
										</Link>
									</article>
								))
							) : (
								<div className="text-center py-12">
									<p className="text-gray-600">このカテゴリにはまだ記事がありません。</p>
								</div>
							)}
						</div>

						{/* ページネーション */}
						<div className="mt-12">
							<Pagination currentPage={1} totalPages={1} />
						</div>
					</Section>
				</Suspense>
			</Container>
		</>
	);
}
