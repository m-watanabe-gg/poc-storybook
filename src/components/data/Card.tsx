import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * カードのタイトル
	 */
	title?: string;
	/**
	 * カードの説明文
	 */
	description?: string;
	/**
	 * カードの画像URL
	 */
	image?: string;
	/**
	 * カードのリンク先
	 */
	href?: string;
	/**
	 * カードのバリアント
	 */
	variant?: "default" | "bordered" | "elevated";
}

function Card({
	className,
	title,
	description,
	image,
	href,
	variant = "default",
	children,
	ref,
	...props
}: CardProps & { ref?: React.Ref<HTMLDivElement> }) {
	const cardClasses = cn(
		"group block h-full overflow-hidden transition-colors bg-white",
		variant === "bordered" && "border border-gray-200",
		variant === "elevated" && "shadow-sm hover:shadow-md",
		className
	);

	const content = (
		<>
			{image && (
				<div className="aspect-[3/2] overflow-hidden relative bg-gray-100">
					<Image
						src={image}
						alt={title || ""}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			)}
			<div className={cn("flex flex-col", image ? "p-6" : "p-8")}>
				{title && (
					<h3 className="text-xl font-bold mb-3 font-heading leading-tight group-hover:text-primary transition-colors">
						{title}
					</h3>
				)}
				{description && <p className="text-gray-600 leading-relaxed text-sm">{description}</p>}
				{children}
			</div>
		</>
	);

	if (href) {
		return (
			<Link
				href={href}
				ref={ref as React.Ref<HTMLAnchorElement>}
				className={cardClasses}
				{...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
			>
				{content}
			</Link>
		);
	}

	return (
		<div ref={ref} className={cardClasses} {...props}>
			{content}
		</div>
	);
}

export { Card };
