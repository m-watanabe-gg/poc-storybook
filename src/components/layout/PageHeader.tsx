import Image from "next/image";
import type React from "react";
import { cn } from "@/lib/utils";

export interface PageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * ページタイトル
	 */
	title: string;
	/**
	 * サブタイトル
	 */
	subtitle?: string;
	/**
	 * 説明文
	 */
	description?: string;
	/**
	 * 背景画像
	 */
	image?: string;
	/**
	 * 画像の代替テキスト
	 */
	imageAlt?: string;
	/**
	 * 高さのバリアント
	 */
	size?: "sm" | "md" | "lg";
	/**
	 * オーバーレイの透明度
	 */
	overlayOpacity?: number;
}

function PageHeader({
	className,
	title,
	subtitle,
	description,
	image,
	imageAlt = "",
	size = "md",
	overlayOpacity = 0.5,
	ref,
	...props
}: PageHeaderProps & { ref?: React.Ref<HTMLDivElement> }) {
	const sizeClasses = {
		sm: "h-[200px] md:h-[250px]",
		md: "h-[250px] md:h-[300px]",
		lg: "h-[300px] md:h-[400px]",
	};

	return (
		<div
			ref={ref}
			className={cn(
				"relative w-full overflow-hidden flex items-center justify-center",
				sizeClasses[size],
				!image && "bg-primary",
				className
			)}
			{...props}
		>
			{/* 背景画像 */}
			{image && (
				<>
					<div className="absolute inset-0">
						<Image src={image} alt={imageAlt} fill className="object-cover" priority sizes="100vw" />
					</div>
					{/* オーバーレイ */}
					<div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />
				</>
			)}

			{/* コンテンツ */}
			<div className="relative z-10 max-w-grid px-4 md:px-8 text-center text-white">
				{subtitle && <div className="text-sm md:text-base font-medium mb-2 opacity-90">{subtitle}</div>}
				<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
				{description && <p className="mt-4 text-base md:text-lg opacity-90 max-w-3xl mx-auto">{description}</p>}
			</div>
		</div>
	);
}

export { PageHeader };
