"use client";

import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import type React from "react";
import { Container } from "./Container";

export interface FooterProps {
	/**
	 * シンプルなフッター表示
	 */
	simple?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ simple = false }) => {
	const t = useTranslations("footer");
	const locale = useLocale();
	const currentYear = new Date().getFullYear();

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<footer className="bg-primary text-white">
			{/* ページトップボタン */}
			<button
				onClick={scrollToTop}
				className="fixed bottom-8 right-8 w-12 h-12 bg-accent text-white rounded-full shadow-lg hover:opacity-75 transition-opacity z-40"
				aria-label="ページ上部に戻る"
			>
				<svg
					className="w-6 h-6 mx-auto"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M5 15l7-7 7 7" />
				</svg>
			</button>

			<Container className="py-12">
				{!simple && (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
						{/* メインメニュー */}
						<div>
							<ul className="space-y-2">
								<li>
									<Link href={locale === "en" ? "/en/" : "/"} className="hover:opacity-75">
										{String(t("home"))}
									</Link>
								</li>
								<li>
									<Link href={locale === "en" ? "/en/about/" : "/about/"} className="hover:opacity-75">
										私たちについて
									</Link>
								</li>
							</ul>
						</div>

						{/* サービス */}
						<div>
							<div className="font-bold mb-3">
								<span>サービス</span>
							</div>
							<ul className="space-y-2 text-sm">
								<li>
									<Link href={locale === "en" ? "/en/services/" : "/services/"} className="hover:opacity-75">
										サービス一覧
									</Link>
								</li>
							</ul>
						</div>

						{/* 導入事例 */}
						<div>
							<div className="font-bold mb-3">
								<span>導入事例</span>
							</div>
							<ul className="space-y-2 text-sm">
								<li>
									<Link href={locale === "en" ? "/en/cases/" : "/cases/"} className="hover:opacity-75">
										導入事例一覧
									</Link>
								</li>
							</ul>
						</div>

						{/* ニュース */}
						<div>
							<div className="font-bold mb-3">
								<span>お知らせ</span>
							</div>
							<ul className="space-y-2 text-sm">
								<li>
									<Link href={locale === "en" ? "/en/news/" : "/news/"} className="hover:opacity-75">
										ニュース
									</Link>
								</li>
							</ul>
						</div>

						{/* その他 */}
						<div>
							<ul className="space-y-2">
								<li>
									<Link href={locale === "en" ? "/en/contact/" : "/contact/"} className="hover:opacity-75">
										お問い合わせ
									</Link>
								</li>
								<li>
									<Link href={locale === "en" ? "/en/privacy/" : "/privacy/"} className="hover:opacity-75">
										{String(t("privacyPolicy"))}
									</Link>
								</li>
							</ul>
						</div>
					</div>
				)}

				<div className="border-t border-white/20 pt-8">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						{/* ロゴ */}
						<Link href={locale === "en" ? "/en/" : "/"}>
							<span className="text-2xl font-bold">GrowGroup StyleGuide</span>
						</Link>

						{/* コピーライト */}
						<small className="text-sm opacity-75">{String(t("copyright")).replace("2025", String(currentYear))}</small>
					</div>
				</div>
			</Container>
		</footer>
	);
};
