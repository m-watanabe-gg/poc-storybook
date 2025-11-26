import type { Metadata } from "next";

/**
 * サイトの基本情報
 */
export const siteConfig = {
	name: "GrowGroup Style Guide",
	description: {
		ja: "Next.js 16とTailwind CSS v4を使用したモダンなWebソリューション。コンポーネント駆動開発とStorybookで効率的なデザインシステムを実現。",
		en: "Modern web solution with Next.js 16 and Tailwind CSS v4. Efficient design system with component-driven development and Storybook.",
	},
	url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
	ogImage: "/og-image.png",
	twitterCard: "summary_large_image",
	twitterCreator: "@your_twitter_handle", // 必要に応じて変更
};

/**
 * 共通のOGP設定を生成
 */
export function generateSiteMetadata(locale: "ja" | "en" = "ja"): Metadata {
	const baseUrl = siteConfig.url;
	const description = siteConfig.description[locale];

	return {
		metadataBase: new URL(baseUrl),
		title: {
			template: `%s | ${siteConfig.name}`,
			default: siteConfig.name,
		},
		description,
		keywords: [
			"Next.js",
			"React",
			"TypeScript",
			"Tailwind CSS",
			"Storybook",
			"デザインシステム",
			"コンポーネントライブラリ",
		],
		authors: [{ name: "GrowGroup" }],
		creator: "GrowGroup",
		openGraph: {
			type: "website",
			locale: locale === "ja" ? "ja_JP" : "en_US",
			url: baseUrl,
			title: siteConfig.name,
			description,
			siteName: siteConfig.name,
			images: [
				{
					url: siteConfig.ogImage,
					width: 1200,
					height: 630,
					alt: siteConfig.name,
				},
			],
		},
		twitter: {
			card: siteConfig.twitterCard as "summary_large_image",
			title: siteConfig.name,
			description,
			images: [siteConfig.ogImage],
			creator: siteConfig.twitterCreator,
		},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		},
		alternates: {
			canonical: baseUrl,
			languages: {
				ja: `${baseUrl}/`,
				en: `${baseUrl}/en/`,
			},
		},
	};
}

/**
 * ページ固有のメタデータを生成
 */
export function generatePageMetadata({
	title,
	description,
	path = "",
	locale = "ja",
	image,
	noIndex = false,
	type = "website",
}: {
	title: string;
	description: string;
	path?: string;
	locale?: "ja" | "en";
	image?: string;
	noIndex?: boolean;
	type?: "website" | "article";
}): Metadata {
	const baseUrl = siteConfig.url;
	const url = `${baseUrl}${locale === "en" ? "/en" : ""}${path}`;
	const ogImage = image || siteConfig.ogImage;

	return {
		title,
		description,
		openGraph: {
			type,
			locale: locale === "ja" ? "ja_JP" : "en_US",
			url,
			title,
			description,
			siteName: siteConfig.name,
			images: [
				{
					url: ogImage,
					width: 1200,
					height: 630,
					alt: title,
				},
			],
		},
		twitter: {
			card: "summary_large_image",
			title,
			description,
			images: [ogImage],
			creator: siteConfig.twitterCreator,
		},
		robots: noIndex
			? {
					index: false,
					follow: false,
				}
			: undefined,
		alternates: {
			canonical: url,
		},
	};
}
