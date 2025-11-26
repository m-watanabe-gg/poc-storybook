"use client";

import type React from "react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface ShareButtonsProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * 共有するURL
	 */
	url: string;
	/**
	 * 共有するタイトル
	 */
	title?: string;
	/**
	 * 表示するボタン
	 */
	platforms?: ("twitter" | "facebook" | "line" | "copy")[];
	/**
	 * ボタンのサイズ
	 */
	size?: "sm" | "md" | "lg";
	/**
	 * 表示スタイル
	 */
	variant?: "default" | "icon-only";
}

function ShareButtons({
	className,
	url,
	title = "",
	platforms = ["twitter", "facebook", "line", "copy"],
	size = "md",
	variant = "default",
	ref,
	...props
}: ShareButtonsProps & { ref?: React.Ref<HTMLDivElement> }) {
	const encodedUrl = encodeURIComponent(url);
	const encodedTitle = encodeURIComponent(title);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(url);
			alert("URLをコピーしました");
		} catch (err) {
			console.error("Failed to copy:", err);
		}
	};

	const shareLinks = {
		twitter: `https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
		facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
		line: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
	};

	const sizeClasses = {
		sm: "px-3 py-1.5 text-sm",
		md: "px-4 py-2 text-base",
		lg: "px-6 py-3 text-lg",
	};

	const iconSizeClasses = {
		sm: "w-8 h-8 text-sm",
		md: "w-10 h-10 text-base",
		lg: "w-12 h-12 text-lg",
	};

	const platformConfig: Record<
		string,
		{
			label: string;
			icon: string | ReactNode;
			color: string;
		}
	> = {
		twitter: {
			label: "X",
			icon: "𝕏",
			color: "bg-black hover:bg-gray-800",
		},
		facebook: {
			label: "Facebook",
			icon: "f",
			color: "bg-[#1877f2] hover:bg-[#0c63d4]",
		},
		line: {
			label: "LINE",
			icon: (
				<svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" role="img" aria-label="LINE">
					<path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
				</svg>
			),
			color: "bg-[#00B900] hover:bg-[#00a000]",
		},
		copy: {
			label: "URLをコピー",
			icon: "📋",
			color: "bg-gray-600 hover:bg-gray-700",
		},
	};

	return (
		<div ref={ref} className={cn("c-share-buttons flex gap-2 items-center", className)} {...props}>
			{variant === "default" && <span className="text-sm text-gray-600 mr-2">シェア：</span>}
			{platforms.map((platform) => {
				const config = platformConfig[platform];
				const isPlatformCopy = platform === "copy";

				if (variant === "icon-only") {
					return (
						<button
							key={platform}
							onClick={isPlatformCopy ? handleCopy : undefined}
							{...(!isPlatformCopy && {
								onClick: () => window.open(shareLinks[platform], "_blank"),
							})}
							className={cn(
								"flex items-center justify-center rounded-full text-white transition-colors",
								config.color,
								iconSizeClasses[size]
							)}
							aria-label={config.label}
						>
							{typeof config.icon === "string" ? config.icon : config.icon}
						</button>
					);
				}

				return (
					<button
						key={platform}
						onClick={isPlatformCopy ? handleCopy : undefined}
						{...(!isPlatformCopy && {
							onClick: () => window.open(shareLinks[platform], "_blank"),
						})}
						className={cn(
							"flex items-center gap-2 rounded text-white transition-colors",
							config.color,
							sizeClasses[size]
						)}
					>
						{typeof config.icon === "string" ? <span>{config.icon}</span> : config.icon}
						<span>{config.label}</span>
					</button>
				);
			})}
		</div>
	);
}

export { ShareButtons };
