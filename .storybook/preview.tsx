import type { Preview } from "@storybook/react";
import { NextIntlClientProvider } from "next-intl";
import { LayoutProvider } from "../src/context/LayoutContext";
import "../src/app/globals.css";

// デフォルトのメッセージ（日本語）
const messages = {
	common: {
		home: "ホーム",
		about: "私たちについて",
		services: "サービス",
		news: "ニュース",
		contact: "お問い合わせ",
		readMore: "続きを読む",
		submit: "送信",
		cancel: "キャンセル",
		close: "閉じる",
		loading: "読み込み中...",
		error: "エラーが発生しました",
		notFound: "ページが見つかりません",
	},
	nav: {
		menu: "メニュー",
		languageSwitch: "Language",
	},
	home: {
		title: "ホーム",
		description: "GrowGroupデザインシステムに基づいたスタイルガイド",
		hero: {
			title: "Next.jsスタイルガイド",
			subtitle: "モダンなWebサイト構築ソリューション",
		},
	},
	contact: {
		title: "お問い合わせ",
		description: "お気軽にお問い合わせください",
		form: {
			name: "お名前",
			namePlaceholder: "山田 太郎",
			email: "メールアドレス",
			emailPlaceholder: "example@example.com",
			subject: "件名",
			subjectPlaceholder: "お問い合わせ内容",
			message: "メッセージ",
			messagePlaceholder: "お問い合わせ内容をご記入ください",
			submit: "送信する",
			success: "お問い合わせを受け付けました",
			error: "送信に失敗しました",
		},
		validation: {
			nameRequired: "お名前を入力してください",
			emailRequired: "メールアドレスを入力してください",
			emailInvalid: "有効なメールアドレスを入力してください",
			subjectRequired: "件名を入力してください",
			messageRequired: "メッセージを入力してください",
		},
	},
	news: {
		title: "ニュース",
		description: "最新のニュースをお届けします",
		categories: "カテゴリー",
		publishedAt: "公開日",
		author: "著者",
		noArticles: "記事がありません",
	},
	footer: {
		copyright: "© 2025 株式会社サンプル All Rights Reserved.",
		privacyPolicy: "プライバシーポリシー",
		terms: "利用規約",
		home: "ホーム",
	},
};

const preview: Preview = {
	decorators: [
		(Story) => (
			<NextIntlClientProvider locale="ja" messages={messages}>
				<LayoutProvider>
					<Story />
				</LayoutProvider>
			</NextIntlClientProvider>
		),
	],
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		backgrounds: {
			default: "light",
			values: [
				{
					name: "light",
					value: "#ffffff",
				},
				{
					name: "dark",
					value: "#1a1a1a",
				},
				{
					name: "secondary",
					value: "#f9f7f0",
				},
			],
		},
		viewport: {
			viewports: {
				mobile: {
					name: "Mobile",
					styles: {
						width: "375px",
						height: "667px",
					},
				},
				tablet: {
					name: "Tablet",
					styles: {
						width: "768px",
						height: "1024px",
					},
				},
				desktop: {
					name: "Desktop",
					styles: {
						width: "1440px",
						height: "900px",
					},
				},
			},
		},
		nextjs: {
			appDirectory: true,
			navigation: {
				pathname: "/",
				query: {},
			},
		},
		docs: {
			story: {
				inline: true,
			},
		},
	},
};

export default preview;
