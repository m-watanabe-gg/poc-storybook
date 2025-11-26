"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface SearchFormProps extends Omit<React.FormHTMLAttributes<HTMLFormElement>, "onSubmit"> {
	/**
	 * 検索実行時のコールバック
	 */
	onSearch?: (query: string) => void;
	/**
	 * プレースホルダー
	 */
	placeholder?: string;
	/**
	 * 初期値
	 */
	defaultValue?: string;
	/**
	 * サイズ
	 */
	size?: "sm" | "md" | "lg";
	/**
	 * アイコン表示
	 */
	showIcon?: boolean;
}

function SearchForm({
	className,
	onSearch,
	placeholder = "検索...",
	defaultValue = "",
	size = "md",
	showIcon = true,
	ref,
	...props
}: SearchFormProps & { ref?: React.Ref<HTMLFormElement> }) {
	const [query, setQuery] = useState(defaultValue);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (onSearch) {
			onSearch(query);
		}
	};

	const sizeClasses = {
		sm: "h-8 text-sm",
		md: "h-10 text-base",
		lg: "h-12 text-lg",
	};

	return (
		<form
			ref={ref}
			onSubmit={handleSubmit}
			className={cn("c-search-form relative", className)}
			role="search"
			{...props}
		>
			<div className="relative">
				{showIcon && (
					<div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
						<svg
							className="w-5 h-5"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
						</svg>
					</div>
				)}
				<input
					type="search"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder={placeholder}
					className={cn(
						"w-full border rounded-(--border-radius) transition-colors",
						"focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
						"border-(--color-border)",
						sizeClasses[size],
						showIcon ? "pl-10 pr-4" : "px-4",
						className
					)}
				/>
				{query && (
					<button
						type="button"
						onClick={() => setQuery("")}
						className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
						aria-label="クリア"
					>
						<svg
							className="w-5 h-5"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				)}
			</div>
		</form>
	);
}

export { SearchForm };
