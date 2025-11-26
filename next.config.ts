import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
	/**
	 * URL末尾に必ずスラッシュを付ける
	 * 例: /news → /news/
	 */
	trailingSlash: true,
	/**
	 * 外部画像ホストの許可
	 */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "placehold.co",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
			},
			{
				protocol: "https",
				hostname: "via.placeholder.com",
			},
		],
	},
};

export default withNextIntl(nextConfig);
