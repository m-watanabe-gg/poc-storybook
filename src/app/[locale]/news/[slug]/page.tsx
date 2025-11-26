import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { ShareButtons } from "@/components/content";
import { Container } from "@/components/layout/Container";
import { PostNav } from "@/components/navigation";
import { generatePageMetadata } from "@/lib/metadata";

interface PageProps {
	params: Promise<{
		locale: string;
		slug: string;
	}>;
}

interface NewsArticle {
	title: string;
	date: string;
	category: string;
	author?: string;
	image?: string;
	content: string;
	prev?: {
		title: string;
		slug: string;
	};
	next?: {
		title: string;
		slug: string;
	};
}

// サンプルデータ（後でAPIから取得）
const newsData: Record<string, NewsArticle> = {
	"new-product-release": {
		title: "新製品リリースのお知らせ",
		date: "2025-10-20",
		category: "製品情報",
		author: "広報部",
		image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
		content: `
			<p>この度、弊社では革新的な新製品をリリースいたしました。</p>
			
			<h2>製品の特徴</h2>
			<p>本製品は以下の特徴を有しています：</p>
			<ul>
				<li>最新のAI技術を搭載</li>
				<li>直感的なユーザーインターフェース</li>
				<li>高度なセキュリティ機能</li>
				<li>クラウドベースでどこからでもアクセス可能</li>
			</ul>

			<h2>価格と提供開始時期</h2>
			<p>製品の価格は月額9,800円（税込）からとなります。2025年11月1日より提供開始予定です。</p>

			<h2>お問い合わせ</h2>
			<p>製品に関する詳細については、お問い合わせフォームよりご連絡ください。</p>
		`,
		prev: { title: "前の記事", slug: "service-update" },
		next: { title: "次の記事", slug: "holiday-schedule" },
	},
	"service-update": {
		title: "サービスアップデートのご案内",
		date: "2025-10-15",
		category: "お知らせ",
		author: "開発チーム",
		image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
		content: `
			<p>サービスに新機能が追加されました。</p>
			
			<h2>新機能の概要</h2>
			<p>以下の機能が追加されました：</p>
			<ul>
				<li>ダッシュボードのカスタマイズ機能</li>
				<li>レポート自動生成機能</li>
				<li>外部サービスとの連携強化</li>
			</ul>

			<h2>利用方法</h2>
			<p>新機能は管理画面の設定メニューからご利用いただけます。</p>
		`,
		prev: { title: "前の記事", slug: "new-product-release" },
		next: { title: "次の記事", slug: "holiday-schedule" },
	},
	"holiday-schedule": {
		title: "年末年始の営業時間について",
		date: "2025-10-10",
		category: "お知らせ",
		author: "総務部",
		image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&q=80",
		content: `
			<p>年末年始の営業時間をお知らせいたします。</p>
			
			<h2>休業期間</h2>
			<p>2025年12月29日（日）〜 2026年1月3日（金）</p>

			<h2>営業再開</h2>
			<p>2026年1月4日（土）より通常営業いたします。</p>

			<p>休業期間中のお問い合わせにつきましては、1月4日以降順次対応させていただきます。</p>
		`,
		prev: { title: "前の記事", slug: "service-update" },
		next: { title: "次の記事", slug: "new-office-opening" },
	},
	"new-office-opening": {
		title: "新オフィスオープンのお知らせ",
		date: "2025-10-05",
		category: "企業情報",
		author: "広報部",
		image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1200&q=80",
		content: `
			<p>東京に新オフィスをオープンいたしました。</p>
			
			<h2>新オフィスの所在地</h2>
			<p>〒100-0001<br>東京都千代田区千代田1-1-1</p>

			<h2>アクセス</h2>
			<p>東京駅より徒歩5分</p>

			<h2>施設概要</h2>
			<p>最新の設備を備えた快適なワークスペースとなっております。</p>
		`,
		prev: { title: "前の記事", slug: "holiday-schedule" },
		next: { title: "次の記事", slug: "media-feature" },
	},
	"media-feature": {
		title: "メディア掲載のお知らせ",
		date: "2025-10-01",
		category: "プレスリリース",
		author: "広報部",
		image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200&q=80",
		content: `
			<p>当社のサービスが主要メディアに取り上げられました。</p>
			
			<h2>掲載メディア</h2>
			<p>以下のメディアに当社のサービスが紹介されました：</p>
			<ul>
				<li>日経新聞（2025年9月28日掲載）</li>
				<li>TechCrunch Japan（2025年9月29日掲載）</li>
				<li>ITmedia（2025年9月30日掲載）</li>
			</ul>

			<h2>掲載内容</h2>
			<p>当社の革新的なサービスについて、詳細な記事が掲載されました。特に、AI技術を活用した業務効率化の取り組みが高く評価されています。</p>

			<h2>今後の展開</h2>
			<p>今回のメディア掲載を機に、さらなるサービス向上に努めてまいります。</p>
		`,
		prev: { title: "前の記事", slug: "new-office-opening" },
	},
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { locale, slug } = await params;

	// 記事データを取得
	const article = newsData[slug];

	// 記事が見つからない場合はデフォルトのメタデータを返す
	if (!article) {
		return generatePageMetadata({
			title: "記事が見つかりません",
			description: "お探しの記事は見つかりませんでした。",
			path: `/news/${slug}/`,
			locale: locale as "ja" | "en",
		});
	}

	return generatePageMetadata({
		title: article.title,
		description: article.content.replace(/<[^>]*>/g, "").substring(0, 160),
		path: `/news/${slug}/`,
		locale: locale as "ja" | "en",
		image: article.image,
		type: "article",
	});
}

export default async function NewsDetailPage({ params }: PageProps) {
	const { locale, slug } = await params;
	const t = await getTranslations("news");

	// 記事データを取得
	const article = newsData[slug];

	// 記事が見つからない場合は404
	if (!article) {
		notFound();
	}

	return (
		<article className="py-16">
			<Container>
				<div className="max-w-4xl mx-auto">
					{/* 記事タイトル */}
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">{article.title}</h1>

					{/* メタ情報 */}
					<div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-600">
						<time dateTime={article.date}>
							{new Date(article.date).toLocaleDateString(locale === "en" ? "en-US" : "ja-JP", {
								year: "numeric",
								month: "long",
								day: "numeric",
							})}
						</time>
						<span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">{article.category}</span>
						{article.author && (
							<span>
								{t("author")}: {article.author}
							</span>
						)}
					</div>

					{/* アイキャッチ画像 */}
					{article.image && (
						<div className="mb-12 rounded-lg overflow-hidden relative aspect-video">
							<Image
								src={article.image}
								alt={article.title}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw, 800px"
								priority
							/>
						</div>
					)}

					{/* 本文 */}
					<Suspense fallback={<div className="py-12">読み込み中...</div>}>
						<div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: article.content }} />
					</Suspense>

					{/* シェアボタン */}
					<div className="mb-12 py-8 border-t border-b">
						<ShareButtons
							url={`https://example.com/${locale === "en" ? "en/" : ""}news/${slug}`}
							title={article.title}
							variant="icon-only"
						/>
					</div>

					{/* 前後の記事ナビゲーション */}
					<PostNav
						prevPost={
							article.prev
								? {
										title: article.prev.title,
										href: `/news/${article.prev.slug}`,
									}
								: undefined
						}
						nextPost={
							article.next
								? {
										title: article.next.title,
										href: `/news/${article.next.slug}`,
									}
								: undefined
						}
					/>
				</div>
			</Container>
		</article>
	);
}

// 静的パラメータ生成（SSG用）
export async function generateStaticParams() {
	const slugs = Object.keys(newsData);

	return slugs.flatMap((slug) => [
		{ locale: "ja", slug },
		{ locale: "en", slug },
	]);
}
