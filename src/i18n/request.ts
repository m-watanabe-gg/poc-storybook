import { getRequestConfig } from "next-intl/server";
import { defaultLocale, locales } from "./config";

export default getRequestConfig(async ({ requestLocale }) => {
	// requestLocale から locale を取得（Next.js 16対応）
	let locale = await requestLocale;

	// localeが未定義の場合はデフォルトロケールを使用
	if (!locale) {
		locale = defaultLocale;
	}

	// ロケールが有効か確認
	if (!locales.includes(locale as "ja" | "en")) {
		console.warn(`Invalid locale: ${locale}, falling back to ${defaultLocale}`);
		locale = defaultLocale;
	}

	return {
		locale: locale as string,
		messages: (await import(`./locales/${locale}.json`)).default,
	};
});
