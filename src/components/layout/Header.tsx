"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import type React from "react";
import { useLayout } from "@/context/LayoutContext";
import { Button } from "../foundation/Button";
import { Container } from "./Container";

export interface HeaderProps {
	/**
	 * シンプルなヘッダー表示（ロゴのみ）
	 */
	simple?: boolean;
	/**
	 * ホームページ用の表示
	 */
	isHome?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ simple = false, isHome = false }) => {
	const t = useTranslations("common");
	const locale = useLocale();
	const pathname = usePathname();
	const { isMenuOpen, toggleMenu, isLangOpen, toggleLang, setIsLangOpen, setIsMenuOpen } = useLayout();

	const Logo = isHome ? "h1" : "div";

	// 現在のパスから言語を切り替えるためのヘルパー関数
	const getLocalizedPath = (targetLocale: string) => {
		// 現在のパスから現在のロケールを除去
		const pathWithoutLocale = pathname.replace(/^\/(en|ja)(\/|$)/, "/");
		// ターゲットロケールを追加（jaの場合はプレフィックスなし）
		return targetLocale === "ja" ? pathWithoutLocale || "/" : `/en${pathWithoutLocale}`;
	};

	const navItems = [
		{ href: "/about/", label: String(t("about")) },
		{ href: "/services/", label: String(t("services")) },
		{ href: "/cases/", label: "導入事例" },
		{ href: "/news/", label: String(t("news")) },
	];

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
			<Container>
				<div className="flex items-center justify-between h-header">
					{/* ロゴ */}
					<Logo>
						<Link href={locale === "en" ? "/en" : "/"} className="flex items-center">
							<span className="text-xl font-bold text-primary">GrowGroup StyleGuide</span>
						</Link>
					</Logo>

					{!simple && (
						<>
							{/* デスクトップナビゲーション */}
							<nav className="hidden md:flex items-center gap-6">
								<ul className="flex items-center gap-4">
									{navItems.map((item) => (
										<li key={item.href}>
											<Link
												href={locale === "en" ? `/en${item.href}` : item.href}
												className="hover:text-primary transition-colors"
											>
												{item.label}
											</Link>
										</li>
									))}
								</ul>

								{/* 言語切り替え */}
								<div className="relative">
									<button type="button" onClick={toggleLang} className="px-3 py-1 border rounded hover:bg-gray-50">
										{locale === "ja" ? "日本語" : "English"}
									</button>
									{isLangOpen && (
										<div className="absolute top-full right-0 mt-2 bg-white border rounded shadow-lg min-w-30">
											<Link
												href={getLocalizedPath("ja")}
												className="block px-4 py-2 hover:bg-gray-50"
												onClick={() => setIsLangOpen(false)}
											>
												日本語
											</Link>
											<Link
												href={getLocalizedPath("en")}
												className="block px-4 py-2 hover:bg-gray-50"
												onClick={() => setIsLangOpen(false)}
											>
												English
											</Link>
										</div>
									)}
								</div>

								{/* お問い合わせボタン */}
								<Button href={locale === "en" ? "/en/contact/" : "/contact/"} size="sm">
									{String(t("contact"))}
								</Button>
							</nav>

							{/* モバイルメニュートグル */}
							<button onClick={toggleMenu} className="md:hidden p-2" aria-label="メニューを開く">
								<svg
									className="w-6 h-6"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							</button>

							{/* モバイルメニュー */}
							<AnimatePresence>
								{isMenuOpen && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{ duration: 0.3 }}
										className="md:hidden absolute top-full left-0 right-0 bg-white border-b shadow-lg overflow-hidden"
									>
										<nav className="p-4">
											<motion.ul
												initial="closed"
												animate="open"
												exit="closed"
												variants={{
													open: {
														transition: { staggerChildren: 0.07, delayChildren: 0.1 },
													},
													closed: {
														transition: { staggerChildren: 0.05, staggerDirection: -1 },
													},
												}}
												className="space-y-2"
											>
												{navItems.map((item) => (
													<motion.li
														key={item.href}
														variants={{
															open: {
																y: 0,
																opacity: 1,
																transition: {
																	y: { stiffness: 1000, velocity: -100 },
																},
															},
															closed: {
																y: 20,
																opacity: 0,
																transition: {
																	y: { stiffness: 1000 },
																},
															},
														}}
													>
														<Link
															href={locale === "en" ? `/en${item.href}` : item.href}
															className="block py-2 hover:text-primary transition-colors"
															onClick={() => setIsMenuOpen(false)}
														>
															{item.label}
														</Link>
													</motion.li>
												))}
												<motion.li
													variants={{
														open: {
															y: 0,
															opacity: 1,
															transition: {
																y: { stiffness: 1000, velocity: -100 },
															},
														},
														closed: {
															y: 20,
															opacity: 0,
															transition: {
																y: { stiffness: 1000 },
															},
														},
													}}
													className="pt-4 border-t"
												>
													<Link
														href={locale === "en" ? "/en/contact/" : "/contact/"}
														className="block py-2 text-primary transition-colors"
														onClick={() => setIsMenuOpen(false)}
													>
														{String(t("contact"))}
													</Link>
												</motion.li>
											</motion.ul>
										</nav>
									</motion.div>
								)}
							</AnimatePresence>
						</>
					)}
				</div>
			</Container>
		</header>
	);
};
