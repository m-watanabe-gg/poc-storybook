"use client";

import Image from "next/image";
import type React from "react";
import { cn } from "@/lib/utils";

export interface MainVisualSlide {
	image: string;
	title?: string;
	description?: string;
	alt?: string;
}

export interface MainVisualProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
	/**
	 * スライド画像の配列
	 */
	slides?: MainVisualSlide[];
	/**
	 * タイトル
	 */
	title?: React.ReactNode;
	/**
	 * 説明文
	 */
	description?: React.ReactNode;
	/**
	 * 高さのバリアント
	 */
	height?: "sm" | "md" | "lg" | "xl";
	/**
	 * オーバーレイの有無
	 */
	overlay?: boolean;
	/**
	 * オーバーレイの透明度
	 */
	overlayOpacity?: number;
}

function MainVisual({
	className,
	slides = [],
	title,
	description,
	height = "lg",
	overlay = true,
	overlayOpacity = 0.4,
	ref,
	...props
}: MainVisualProps & { ref?: React.Ref<HTMLDivElement> }) {
	const heightClasses = {
		sm: "h-[300px] md:h-[400px]",
		md: "h-[400px] md:h-[500px]",
		lg: "h-[500px] md:h-[600px]",
		xl: "h-[600px] md:h-[700px]",
	};

	// スライドがない場合のデフォルト画像
	const displaySlide = slides.length > 0 ? slides[0] : null;

	return (
		<div ref={ref} className={cn("relative w-full overflow-hidden", heightClasses[height], className)} {...props}>
			{/* 背景画像 */}
			{displaySlide && (
				<div className="absolute inset-0">
					<Image
						src={displaySlide.image}
						alt={displaySlide.alt || ""}
						fill
						className="object-cover"
						priority
						sizes="100vw"
					/>
				</div>
			)}

			{/* オーバーレイ */}
			{overlay && <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />}

			{/* コンテンツ */}
			{(title || description) && (
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="max-w-grid px-4 md:px-8 text-center">
						<div className="text-white">
							{title && <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">{title}</div>}
							{description && <div className="text-base md:text-lg lg:text-xl leading-relaxed">{description}</div>}
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export { MainVisual };
