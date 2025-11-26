"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface ScrollToTopProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	/**
	 * スクロール位置がこの値を超えたらボタンを表示（px）
	 * @default 300
	 */
	showAfter?: number;
	/**
	 * ボタンの位置
	 * @default "bottom-right"
	 */
	position?: "bottom-right" | "bottom-left" | "bottom-center";
	/**
	 * スムーススクロールの有効化
	 * @default true
	 */
	smooth?: boolean;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLButtonElement>;
}

function ScrollToTop({
	className,
	showAfter = 300,
	position = "bottom-right",
	smooth = true,
	ref,
	...props
}: ScrollToTopProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.scrollY > showAfter) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, [showAfter]);

	const scrollToTop = () => {
		if (smooth) {
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		} else {
			window.scrollTo(0, 0);
		}
	};

	const positionClasses = {
		"bottom-right": "right-4 md:right-8",
		"bottom-left": "left-4 md:left-8",
		"bottom-center": "left-1/2 -translate-x-1/2",
	};

	if (!isVisible) {
		return null;
	}

	return (
		<button
			ref={ref}
			type="button"
			onClick={scrollToTop}
			className={cn(
				"fixed bottom-4 md:bottom-8 z-50",
				"w-12 h-12 rounded-full bg-primary text-white shadow-lg",
				"flex items-center justify-center",
				"hover:bg-primary/90 transition-all duration-300",
				"focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
				positionClasses[position],
				className
			)}
			aria-label="ページトップへ戻る"
			{...props}
		>
			<svg
				className="w-6 h-6"
				fill="none"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path d="M5 10l7-7m0 0l7 7m-7-7v18" />
			</svg>
		</button>
	);
}

export { ScrollToTop };
