"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface Language {
	code: string;
	label: string;
	flag?: string;
}

export interface LangSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * 言語リスト
	 */
	languages: Language[];
	/**
	 * 現在の言語コード
	 */
	currentLang: string;
	/**
	 * 言語変更時のコールバック
	 */
	onLanguageChange?: (langCode: string) => void;
	/**
	 * 表示スタイル
	 */
	variant?: "dropdown" | "inline";
	/**
	 * ドロップダウンの位置
	 */
	position?: "left" | "right";
}

function LangSelector({
	className,
	languages,
	currentLang,
	onLanguageChange,
	variant = "dropdown",
	position = "right",
	ref,
	...props
}: LangSelectorProps & { ref?: React.Ref<HTMLDivElement> }) {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	const currentLanguage = languages.find((lang) => lang.code === currentLang);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleLanguageSelect = (langCode: string) => {
		if (onLanguageChange) {
			onLanguageChange(langCode);
		}
		setIsOpen(false);
	};

	if (variant === "inline") {
		return (
			<div ref={ref} className={cn("flex gap-2", className)} {...props}>
				{languages.map((lang) => (
					<button
						key={lang.code}
						onClick={() => handleLanguageSelect(lang.code)}
						className={cn(
							"px-3 py-1.5 text-sm rounded transition-colors",
							currentLang === lang.code
								? "bg-primary text-white font-medium"
								: "bg-gray-100 hover:bg-gray-200 text-gray-700"
						)}
					>
						{lang.flag && <span className="mr-1">{lang.flag}</span>}
						{lang.label}
					</button>
				))}
			</div>
		);
	}

	return (
		<div ref={dropdownRef} className={cn("relative", className)} {...props}>
			<button
				onClick={() => setIsOpen(!isOpen)}
				className="flex items-center gap-2 px-3 py-2 text-sm border border-border rounded hover:bg-gray-50 transition-colors"
			>
				{currentLanguage?.flag && <span className="text-lg">{currentLanguage.flag}</span>}
				<span className="font-medium">{currentLanguage?.label || "Language"}</span>
				<svg
					className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")}
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M19 9l-7 7-7-7" />
				</svg>
			</button>

			{isOpen && (
				<div
					className={cn(
						"absolute top-full mt-2 min-w-full bg-white border border-border rounded shadow-lg py-1 z-50",
						position === "right" ? "right-0" : "left-0"
					)}
				>
					{languages.map((lang) => (
						<button
							key={lang.code}
							onClick={() => handleLanguageSelect(lang.code)}
							className={cn(
								"w-full flex items-center gap-2 px-4 py-2 text-sm text-left transition-colors hover:bg-gray-50",
								currentLang === lang.code && "bg-primary/10 text-primary font-medium"
							)}
						>
							{lang.flag && <span className="text-lg">{lang.flag}</span>}
							<span>{lang.label}</span>
							{currentLang === lang.code && (
								<svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
									<path
										fillRule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clipRule="evenodd"
									/>
								</svg>
							)}
						</button>
					))}
				</div>
			)}
		</div>
	);
}

export { LangSelector };
