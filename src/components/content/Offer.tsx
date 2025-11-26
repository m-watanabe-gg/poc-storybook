import Image from "next/image";
import type React from "react";
import { cn } from "@/lib/utils";
import { Button } from "../foundation/Button";

export interface OfferProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * タイトル
	 */
	title: string;
	/**
	 * 説明文
	 */
	description?: string;
	/**
	 * CTAボタンのテキスト
	 */
	buttonText: string;
	/**
	 * CTAボタンのリンク先
	 */
	buttonHref: string;
	/**
	 * 背景画像
	 */
	backgroundImage?: string;
	/**
	 * バリアント
	 */
	variant?: "primary" | "secondary" | "accent" | "gradient";
	/**
	 * サイズ
	 */
	size?: "sm" | "md" | "lg";
}

function Offer({
	className,
	title,
	description,
	buttonText,
	buttonHref,
	backgroundImage,
	variant = "primary",
	size = "md",
	ref,
	...props
}: OfferProps & { ref?: React.Ref<HTMLDivElement> }) {
	const variantClasses = {
		primary: "bg-primary text-white",
		secondary: "bg-secondary text-gray-900",
		accent: "bg-accent text-white",
		gradient: "bg-gradient-to-r from-primary to-accent text-white",
	};

	const sizeClasses = {
		sm: "py-8 md:py-12",
		md: "py-12 md:py-16",
		lg: "py-16 md:py-24",
	};

	return (
		<div
			ref={ref}
			className={cn("c-offer relative overflow-hidden", variantClasses[variant], sizeClasses[size], className)}
			{...props}
		>
			{/* 背景画像 */}
			{backgroundImage && (
				<>
					<div className="absolute inset-0">
						<Image src={backgroundImage} alt="" fill className="object-cover" sizes="100vw" />
					</div>
					<div className="absolute inset-0 bg-black/50" />
				</>
			)}

			{/* コンテンツ */}
			<div className="relative z-10 max-w-grid mx-auto px-4 md:px-8 text-center">
				<h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
				{description && <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto opacity-90">{description}</p>}
				<Button
					href={buttonHref}
					size="lg"
					variant={variant === "secondary" ? "default" : "secondary"}
					className={cn(variant === "secondary" && "bg-primary text-white hover:bg-primary/90")}
				>
					{buttonText}
				</Button>
			</div>
		</div>
	);
}

export { Offer };
