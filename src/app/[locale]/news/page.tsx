import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { Breadcrumb, Pagination } from "@/components/navigation";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "news" });

	return generatePageMetadata({
		title: String(t("title")),
		description: String(t("description")),
		path: "/news/",
		locale: locale as "ja" | "en",
	});
}

export default async function NewsPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "news" });

	// カテゴリマッピング
	const categories = [
		{ slug: "press", label: "プレスリリース" },
		{ slug: "products", label: "製品情報" },
		{ slug: "news", label: "お知らせ" },
		{ slug: "company", label: "企業情報" },
	];

	// サンプルデータ（後でAPIから取得）
	const newsItems = [
		{
			id: 1,
			title: "新製品リリースのお知らせ",
			slug: "new-product-release",
			excerpt: "革新的な新製品を発表しました。詳細はこちらをご覧ください。",
			date: "2025-10-20",
			category: "製品情報",
			image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80",
		},
		{
			id: 2,
			title: "サービスアップデートのご案内",
			slug: "service-update",
			excerpt: "サービスに新機能が追加されました。より便利にご利用いただけます。",
			date: "2025-10-15",
			category: "お知らせ",
			image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
		},
		{
			id: 3,
			title: "年末年始の営業時間について",
			slug: "holiday-schedule",
			excerpt: "年末年始の営業時間をお知らせいたします。",
			date: "2025-10-10",
			category: "お知らせ",
			image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&q=80",
		},
		{
			id: 4,
			title: "新オフィスオープンのお知らせ",
			slug: "new-office-opening",
			excerpt: "東京に新オフィスをオープンいたしました。",
			date: "2025-10-05",
			category: "企業情報",
			image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
		},
		{
			id: 5,
			title: "メディア掲載のお知らせ",
			slug: "media-feature",
			excerpt: "当社のサービスが主要メディアに取り上げられました。",
			date: "2025-10-01",
			category: "プレスリリース",
			image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
		},
	];

	return (
		<>
			<PageHeader title={t("title")} subtitle="NEWS" />

			<Section variant="default" spacing="lg">
				<Container>
					{/* パンくずリスト */}
					<Breadcrumb items={[{ label: t("title") }]} className="mb-8" />
					{/* カテゴリーフィルター */}
					<div className="mb-8 flex flex-wrap gap-3">
						<Link
							href={locale === "en" ? "/en/news/" : "/news/"}
							className="px-4 py-2 rounded-full bg-primary text-white text-sm font-medium"
						>
							すべて
						</Link>
						{categories.map((category) => (
							<Link
								key={category.slug}
								href={locale === "en" ? `/en/news/category/${category.slug}/` : `/news/category/${category.slug}/`}
								className="px-4 py-2 rounded-full bg-gray-200 text-gray-700 text-sm font-medium hover:bg-gray-300 transition-colors"
							>
								{category.label}
							</Link>
						))}
					</div>

					{/* ニュース一覧 */}
					<Suspense fallback={<div className="text-center py-12">読み込み中...</div>}>
						<div className="divide-y divide-gray-200">
							{newsItems.map((item) => (
								<article key={item.id} className="py-6 first:pt-0 last:pb-0">
									<Link href={`/news/${item.slug}/`} className="block group">
										<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
											<div className="flex-1">
												<div className="flex items-center gap-3 mb-2">
													<time className="text-sm text-gray-500">{item.date}</time>
													<span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
														{item.category}
													</span>
												</div>
												<h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
													{item.title}
												</h3>
												<p className="text-sm text-gray-600 line-clamp-2">{item.excerpt}</p>
											</div>
											<div className="flex-shrink-0">
												<svg
													className="w-6 h-6 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													role="img"
													aria-label="右矢印"
												>
													<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
												</svg>
											</div>
										</div>
									</Link>
								</article>
							))}
						</div>
					</Suspense>

					{/* ページネーション */}
					<div className="flex justify-center mt-12">
						<Pagination currentPage={1} totalPages={5} />
					</div>
				</Container>
			</Section>
		</>
	);
}
