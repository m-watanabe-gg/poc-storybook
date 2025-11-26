import createMiddleware from "next-intl/middleware";
import { defaultLocale, locales } from "./i18n/config";

export default createMiddleware({
	locales,
	defaultLocale,
	localePrefix: "as-needed",
	// ブラウザの言語設定による自動検出を無効化
	// 常にデフォルトロケール（ja）を優先
	localeDetection: false,
});

export const config = {
	// Skip all paths that should not be internationalized
	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
