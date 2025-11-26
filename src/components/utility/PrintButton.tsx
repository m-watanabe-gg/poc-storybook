"use client";

import type React from "react";
import { cn } from "@/lib/utils";

export interface PrintButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
	/**
	 * ボタンのラベル
	 * @default "印刷"
	 */
	label?: string;
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
	 * カスタム印刷処理（指定しない場合はwindow.print()を使用）
	 */
	onPrint?: () => void;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLButtonElement>;
}

function PrintButton({
	className,
	label = "印刷",
	variant = "default",
	size = "md",
	onPrint,
	ref,
	...props
}: PrintButtonProps) {
	const handlePrint = () => {
		if (onPrint) {
			onPrint();
		} else {
			window.print();
		}
	};

	const variantClasses = {
		default: "bg-gray-600 text-white hover:bg-gray-700",
		outline: "border border-gray-400 text-gray-700 hover:bg-gray-100",
		ghost: "text-gray-700 hover:bg-gray-100",
		icon: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
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
			onClick={handlePrint}
			className={cn(
				"rounded transition-colors duration-200",
				"focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2",
				"flex items-center justify-center gap-2",
				variantClasses[variant],
				sizeClasses[size],
				className
			)}
			aria-label={label}
			{...props}
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
				<path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
			</svg>
			{variant !== "icon" && <span>{label}</span>}
		</button>
	);
}

export { PrintButton };
