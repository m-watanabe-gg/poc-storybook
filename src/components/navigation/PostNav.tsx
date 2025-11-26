import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

export interface PostNavItem {
	title: string;
	href: string;
	date?: string;
	category?: string;
}

export interface PostNavProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * 前の記事
	 */
	prevPost?: PostNavItem;
	/**
	 * 次の記事
	 */
	nextPost?: PostNavItem;
	/**
	 * レイアウト
	 */
	layout?: "horizontal" | "vertical";
}

function PostNav({
	className,
	prevPost,
	nextPost,
	layout = "horizontal",
	ref,
	...props
}: PostNavProps & { ref?: React.Ref<HTMLElement> }) {
	return (
		<nav
			ref={ref}
			className={cn(
				"c-post-nav",
				layout === "horizontal" ? "grid grid-cols-1 md:grid-cols-2 gap-4" : "space-y-4",
				className
			)}
			{...props}
		>
			{prevPost && (
				<Link
					href={prevPost.href}
					className={cn(
						"c-post-nav__item group relative flex flex-col p-6 border border-border rounded-(--border-radius) transition-all hover:shadow-md hover:border-primary",
						layout === "horizontal" && "md:text-left"
					)}
				>
					<div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
						<svg
							className="w-4 h-4"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M15 19l-7-7 7-7" />
						</svg>
						<span className="font-medium">前の記事</span>
					</div>
					<h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
						{prevPost.title}
					</h3>
					{(prevPost.date || prevPost.category) && (
						<div className="flex items-center gap-2 text-sm text-gray-600 mt-auto">
							{prevPost.category && (
								<span className="px-2 py-0.5 bg-gray-100 rounded text-xs">{prevPost.category}</span>
							)}
							{prevPost.date && <span>{prevPost.date}</span>}
						</div>
					)}
				</Link>
			)}

			{nextPost && (
				<Link
					href={nextPost.href}
					className={cn(
						"c-post-nav__item group relative flex flex-col p-6 border border-border rounded-(--border-radius) transition-all hover:shadow-md hover:border-primary",
						layout === "horizontal" && "md:text-right",
						layout === "horizontal" && !prevPost && "md:col-start-2"
					)}
				>
					<div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
						{layout === "horizontal" && <span className="md:ml-auto" />}
						<span className="font-medium">次の記事</span>
						<svg
							className="w-4 h-4"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M9 5l7 7-7 7" />
						</svg>
					</div>
					<h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
						{nextPost.title}
					</h3>
					{(nextPost.date || nextPost.category) && (
						<div
							className={cn(
								"flex items-center gap-2 text-sm text-gray-600 mt-auto",
								layout === "horizontal" && "md:justify-end"
							)}
						>
							{nextPost.category && (
								<span className="px-2 py-0.5 bg-gray-100 rounded text-xs">{nextPost.category}</span>
							)}
							{nextPost.date && <span>{nextPost.date}</span>}
						</div>
					)}
				</Link>
			)}
		</nav>
	);
}

export { PostNav };
