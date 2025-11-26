"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface CopyButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
	/**
	 * コピーするテキスト
	 */
	text: string;
	/**
	 * ボタンのラベル
	 * @default "コピー"
	 */
	label?: string;
	/**
	 * コピー成功時のラベル
	 * @default "コピーしました！"
	 */
	successLabel?: string;
	/**
	 * ボタンのバリエーション
	 * @default "default"
	 */
	variant?: "default" | "outline" | "ghost" | "icon";
	/**
	 * サイズ
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg";
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLButtonElement>;
}

function CopyButton({
	className,
	text,
	label = "コピー",
	successLabel = "コピーしました！",
	variant = "default",
	size = "md",
	ref,
	...props
}: CopyButtonProps) {
	const [isCopied, setIsCopied] = useState(false);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text);
			setIsCopied(true);
			setTimeout(() => {
				setIsCopied(false);
			}, 2000);
		} catch (err) {
			console.error("コピーに失敗しました:", err);
		}
	};

	const variantClasses = {
		default: "bg-primary text-white hover:bg-primary/90",
		outline: "border border-primary text-primary hover:bg-primary hover:text-white",
		ghost: "text-primary hover:bg-primary/10",
		icon: "text-gray-600 hover:text-primary hover:bg-gray-100",
	};

	const sizeClasses = {
		sm: variant === "icon" ? "w-8 h-8" : "px-3 py-1.5 text-sm",
		md: variant === "icon" ? "w-10 h-10" : "px-4 py-2 text-base",
		lg: variant === "icon" ? "w-12 h-12" : "px-6 py-3 text-lg",
	};

	return (
		<button
			ref={ref}
			type="button"
			onClick={handleCopy}
			className={cn(
				"rounded transition-all duration-200",
				"focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
				"flex items-center justify-center gap-2",
				variantClasses[variant],
				sizeClasses[size],
				className
			)}
			aria-label={isCopied ? successLabel : label}
			{...props}
		>
			{isCopied ? (
				<>
					<svg
						className="w-5 h-5"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M5 13l4 4L19 7" />
					</svg>
					{variant !== "icon" && <span>{successLabel}</span>}
				</>
			) : (
				<>
					<svg
						className="w-5 h-5"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
					</svg>
					{variant !== "icon" && <span>{label}</span>}
				</>
			)}
		</button>
	);
}

export { CopyButton };
