"use client";

import { useRouter } from "next/navigation";
import type React from "react";
import { cn } from "@/lib/utils";

export interface BackButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
	/**
	 * ボタンのラベル
	 * @default "戻る"
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
	 * カスタム戻る処理（指定しない場合はrouter.back()を使用）
	 */
	onBack?: () => void;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLButtonElement>;
}

function BackButton({
	className,
	label = "戻る",
	variant = "default",
	size = "md",
	onBack,
	ref,
	...props
}: BackButtonProps) {
	const router = useRouter();

	const handleClick = () => {
		if (onBack) {
			onBack();
		} else {
			router.back();
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
			onClick={handleClick}
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
				<path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
			</svg>
			{variant !== "icon" && <span>{label}</span>}
		</button>
	);
}

export { BackButton };
