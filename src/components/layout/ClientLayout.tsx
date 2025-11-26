"use client";

import type React from "react";
import { LayoutProvider } from "@/context/LayoutContext";
import { Footer, type FooterProps } from "./Footer";
import { Header, type HeaderProps } from "./Header";

interface ClientLayoutProps {
	children: React.ReactNode;
	/**
	 * Headerのprops（オプション）
	 */
	headerProps?: HeaderProps;
	/**
	 * Footerのprops（オプション）
	 */
	footerProps?: FooterProps;
	/**
	 * Headerを非表示にする
	 */
	hideHeader?: boolean;
	/**
	 * Footerを非表示にする
	 */
	hideFooter?: boolean;
}

/**
 * クライアント側のレイアウトコンポーネント
 * LayoutProviderでラップし、Header/Footer/mainを統合
 */
export function ClientLayout({
	children,
	headerProps = {},
	footerProps = {},
	hideHeader = false,
	hideFooter = false,
}: ClientLayoutProps) {
	return (
		<LayoutProvider>
			{!hideHeader && <Header {...headerProps} />}
			<main className="pt-header">{children}</main>
			{!hideFooter && <Footer {...footerProps} />}
		</LayoutProvider>
	);
}
