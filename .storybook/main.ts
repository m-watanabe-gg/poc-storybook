import type { StorybookConfig } from "@storybook/nextjs";

// GitHub Pages用のベースパス設定
// 環境変数 STORYBOOK_BASE_PATH が設定されている場合はそれを使用
// 例: STORYBOOK_BASE_PATH=/repository-name
const basePath = process.env.STORYBOOK_BASE_PATH || "";

const config: StorybookConfig = {
	stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
	addons: ["@chromatic-com/storybook", "@storybook/addon-docs", "@storybook/addon-a11y"],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	staticDirs: ["../public"],
	// GitHub Pages用のベースパス設定
	...(basePath && { base: basePath }),
};
export default config;
