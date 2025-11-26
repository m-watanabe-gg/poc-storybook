"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface ShareButtonProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * シェアするURL
	 */
	url: string;
	/**
	 * シェアするタイトル
	 */
	title?: string;
	/**
	 * 表示するSNS
	 * @default ["twitter", "facebook", "copy"]
	 */
	platforms?: Array<"twitter" | "facebook" | "copy">;
	/**
	 * ボタンのバリエーション
	 * @default "default"
	 */
	variant?: "default" | "icon";
	/**
	 * サイズ
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg";
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLDivElement>;
}

function ShareButton({
	className,
	url,
	title = "",
	platforms = ["twitter", "facebook", "copy"],
	variant = "default",
	size = "md",
	ref,
	...props
}: ShareButtonProps) {
	const [isCopied, setIsCopied] = useState(false);

	const handleShare = (platform: string) => {
		const encodedUrl = encodeURIComponent(url);
		const encodedTitle = encodeURIComponent(title);

		const shareUrls = {
			twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
			facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
		};

		if (platform === "copy") {
			handleCopy();
		} else if (platform in shareUrls) {
			window.open(shareUrls[platform as keyof typeof shareUrls], "_blank", "width=600,height=400");
		}
	};

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(url);
			setIsCopied(true);
			setTimeout(() => {
				setIsCopied(false);
			}, 2000);
		} catch (err) {
			console.error("URLのコピーに失敗しました:", err);
		}
	};

	const sizeClasses = {
		sm: variant === "icon" ? "w-8 h-8" : "px-3 py-1.5 text-sm",
		md: variant === "icon" ? "w-10 h-10" : "px-4 py-2 text-base",
		lg: variant === "icon" ? "w-12 h-12" : "px-6 py-3 text-lg",
	};

	const platformConfig = {
		twitter: {
			label: "Twitter",
			color: "hover:bg-[#1DA1F2] hover:text-white",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="Twitter">
					<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
				</svg>
			),
		},
		facebook: {
			label: "Facebook",
			color: "hover:bg-[#4267B2] hover:text-white",
			icon: (
				<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" role="img" aria-label="Facebook">
					<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
				</svg>
			),
		},
		copy: {
			label: isCopied ? "コピーしました！" : "URLをコピー",
			color: "hover:bg-gray-600 hover:text-white",
			icon: isCopied ? (
				<svg
					className="w-5 h-5"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
					role="img"
					aria-label="チェックマーク"
				>
					<path d="M5 13l4 4L19 7" />
				</svg>
			) : (
				<svg
					className="w-5 h-5"
					fill="none"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
					role="img"
					aria-label="コピー"
				>
					<path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
				</svg>
			),
		},
	};

	return (
		<div ref={ref} className={cn("flex items-center gap-2", className)} {...props}>
			{platforms.map((platform) => {
				const config = platformConfig[platform];
				return (
					<button
						key={platform}
						type="button"
						onClick={() => handleShare(platform)}
						className={cn(
							"rounded transition-all duration-200",
							"focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
							"flex items-center justify-center gap-2",
							"border border-gray-300 text-gray-700",
							config.color,
							sizeClasses[size]
						)}
						aria-label={config.label}
					>
						{config.icon}
						{variant !== "icon" && <span>{config.label}</span>}
					</button>
				);
			})}
		</div>
	);
}

export { ShareButton };
