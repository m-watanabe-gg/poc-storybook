import Image from "next/image";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../foundation/Button";

export interface HeroBlockProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * タイトル
	 */
	title: string;
	/**
	 * 説明文
	 */
	description?: string;
	/**
	 * 画像URL
	 */
	image: string;
	/**
	 * 画像の代替テキスト
	 */
	imageAlt?: string;
	/**
	 * CTA ボタンのテキスト
	 */
	buttonText?: string;
	/**
	 * CTA ボタンのリンク先
	 */
	buttonHref?: string;
	/**
	 * レイアウト
	 */
	layout?: "image-left" | "image-right";
	/**
	 * 画像の形状
	 */
	imageShape?: "square" | "rectangle" | "circle";
}

function HeroBlock({
	className,
	title,
	description,
	image,
	imageAlt = "",
	buttonText,
	buttonHref,
	layout = "image-left",
	imageShape = "rectangle",
	ref,
	...props
}: HeroBlockProps & { ref?: React.Ref<HTMLDivElement> }) {
	const imageShapeClasses = {
		square: "aspect-square",
		rectangle: "aspect-video",
		circle: "aspect-square rounded-full overflow-hidden",
	};

	return (
		<div
			ref={ref}
			className={cn("c-hero-block grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center", className)}
			{...props}
		>
			{/* 画像 */}
			<div
				className={cn(
					"c-hero-block__image relative w-full",
					imageShapeClasses[imageShape],
					layout === "image-right" && "md:order-2"
				)}
			>
				<Image
					src={image}
					alt={imageAlt || title}
					fill
					className={cn("object-cover", imageShape !== "circle" && "rounded-(--border-radius)")}
					sizes="(max-width: 768px) 100vw, 50vw"
				/>
			</div>

			{/* コンテンツ */}
			<div className={cn("c-hero-block__content", layout === "image-right" && "md:order-1")}>
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">{title}</h2>
				{description && (
					<p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 md:mb-8">{description}</p>
				)}
				{buttonText && buttonHref && (
					<Button href={buttonHref} size="lg">
						{buttonText}
					</Button>
				)}
			</div>
		</div>
	);
}

export { HeroBlock };
