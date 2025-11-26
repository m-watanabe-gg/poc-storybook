"use client";

import { createContext, type ReactNode, useContext, useEffect, useState } from "react";

interface LayoutContextType {
	/**
	 * モバイルメニューの開閉状態
	 */
	isMenuOpen: boolean;
	/**
	 * モバイルメニューを設定
	 */
	setIsMenuOpen: (open: boolean) => void;
	/**
	 * モバイルメニューをトグル
	 */
	toggleMenu: () => void;
	/**
	 * 言語選択メニューの開閉状態
	 */
	isLangOpen: boolean;
	/**
	 * 言語選択メニューを設定
	 */
	setIsLangOpen: (open: boolean) => void;
	/**
	 * 言語選択メニューをトグル
	 */
	toggleLang: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export function LayoutProvider({ children }: { children: ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLangOpen, setIsLangOpen] = useState(false);

	// メニューが開いているときにスクロールを無効化
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	// ページ遷移時にメニューを閉じる
	useEffect(() => {
		const handleRouteChange = () => {
			setIsMenuOpen(false);
			setIsLangOpen(false);
		};

		// URLの変化を監視
		window.addEventListener("popstate", handleRouteChange);

		return () => {
			window.removeEventListener("popstate", handleRouteChange);
		};
	}, []);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	const toggleLang = () => setIsLangOpen((prev) => !prev);

	return (
		<LayoutContext.Provider
			value={{
				isMenuOpen,
				setIsMenuOpen,
				toggleMenu,
				isLangOpen,
				setIsLangOpen,
				toggleLang,
			}}
		>
			{children}
		</LayoutContext.Provider>
	);
}

/**
 * Layout状態管理用のカスタムフック
 * @throws {Error} LayoutProvider外で使用した場合
 */
export function useLayout() {
	const context = useContext(LayoutContext);
	if (!context) {
		throw new Error("useLayout must be used within LayoutProvider");
	}
	return context;
}
