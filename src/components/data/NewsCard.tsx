import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

export interface NewsCardProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * 記事のタイトル
	 */
	title: string;
	/**
	 * 記事の説明文
	 */
	description?: string;
	/**
	 * 記事の画像URL
	 */
	image?: string;
	/**
	 * 記事へのリンク
	 */
	href?: string;
	/**
	 * 公開日
	 */
	date?: string;
	/**
	 * カテゴリ
	 */
	category?: string;
	/**
	 * カテゴリのカラー
	 */
	categoryVariant?: "default" | "accent" | "info" | "success";
	/**
	 * カードのレイアウト
	 */
	layout?: "vertical" | "horizontal";
}

function NewsCard({
	className,
	title,
	description,
	image,
	href,
	date,
	category,
	categoryVariant = "default",
	layout = "vertical",
	ref,
	...props
}: NewsCardProps & { ref?: React.Ref<HTMLElement> }) {
	const content = (
		<>
			{image && (
				<div
					className={cn(
						"overflow-hidden bg-gray-100 relative",
						layout === "vertical" ? "aspect-[3/2]" : "w-48 h-48 flex-shrink-0"
					)}
				>
					<Image
						src={image}
						alt={title}
						fill
						className="object-cover"
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</div>
			)}
			<div className={cn("flex-1", layout === "vertical" ? "p-5" : "p-5 flex flex-col")}>
				<div className="flex items-center justify-between gap-2 mb-3">
					{date && <time className="text-xs text-gray-500 font-medium tracking-wider font-heading">{date}</time>}
					{category && (
						<span className="text-xs font-bold uppercase tracking-wider text-primary font-heading">{category}</span>
					)}
				</div>
				<h3 className="text-lg font-bold mb-3 line-clamp-2 leading-snug font-heading group-hover:text-primary transition-colors">
					{title}
				</h3>
				{description && <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">{description}</p>}
			</div>
		</>
	);

	const cardClasses = cn(
		"group bg-white overflow-hidden transition-colors",
		"hover:bg-gray-50 border-b border-gray-100",
		layout === "horizontal" && "flex",
		className
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
		<article ref={ref as React.Ref<HTMLElement>} className={cardClasses} {...props}>
			{content}
		</article>
	);
}

export { NewsCard };
