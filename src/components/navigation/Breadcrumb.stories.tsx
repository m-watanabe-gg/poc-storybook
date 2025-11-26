import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
	title: "Components/Breadcrumb",
	component: Breadcrumb,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
	args: {
		items: [
			{ label: "ホーム", href: "/" },
			{ label: "カテゴリ", href: "/category" },
			{ label: "サブカテゴリ", href: "/category/sub" },
			{ label: "現在のページ" },
		],
	},
};

export const Short: Story = {
	args: {
		items: [{ label: "ホーム", href: "/" }, { label: "現在のページ" }],
	},
};

export const Long: Story = {
	args: {
		items: [
			{ label: "ホーム", href: "/" },
			{ label: "製品", href: "/products" },
			{ label: "カテゴリA", href: "/products/category-a" },
			{ label: "サブカテゴリB", href: "/products/category-a/sub-b" },
			{ label: "詳細ページ", href: "/products/category-a/sub-b/detail" },
			{ label: "現在のページ" },
		],
	},
};

export const CustomSeparator: Story = {
	args: {
		items: [{ label: "ホーム", href: "/" }, { label: "ニュース", href: "/news" }, { label: "記事詳細" }],
		separator: "→",
	},
};

export const WithIcons: Story = {
	args: {
		items: [{ label: "🏠 ホーム", href: "/" }, { label: "📰 ニュース", href: "/news" }, { label: "📄 記事詳細" }],
		separator: "/",
	},
};
