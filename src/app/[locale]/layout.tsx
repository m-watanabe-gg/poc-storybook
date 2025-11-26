import type { Metadata } from "next";
import { Montserrat, Noto_Sans_JP } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ClientLayout } from "@/components/layout/ClientLayout";
import { locales } from "@/i18n/config";
import { generateSiteMetadata } from "@/lib/metadata";

// Noto Sans JPフォントの設定
const notoSansJP = Noto_Sans_JP({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-noto-sans-jp",
	display: "swap",
});

// Montserratフォントの設定（英語見出し用）
const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["400", "600", "700"],
	variable: "--font-montserrat",
	display: "swap",
});

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	return generateSiteMetadata(locale as "ja" | "en");
}

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;

	// ロケールが有効か確認
	if (!locales.includes(locale as "ja" | "en")) {
		notFound();
	}

	// メッセージを取得
	const messages = await getMessages();

	return (
		<html lang={locale} className={`${notoSansJP.variable} ${montserrat.variable}`}>
			<body className={locale === "en" ? "en" : ""} suppressHydrationWarning>
				<NextIntlClientProvider messages={messages}>
					<ClientLayout>{children}</ClientLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
