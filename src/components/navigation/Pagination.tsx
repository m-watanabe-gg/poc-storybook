"use client";

import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

export interface PaginationProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * 現在のページ番号
	 */
	currentPage: number;
	/**
	 * 総ページ数
	 */
	totalPages: number;
	/**
	 * ページ変更時のコールバック
	 */
	onPageChange?: (page: number) => void;
	/**
	 * ページリンクのhref生成関数
	 */
	getPageHref?: (page: number) => string;
	/**
	 * 表示するページ番号の範囲
	 */
	siblingCount?: number;
}

function Pagination({
	className,
	currentPage,
	totalPages,
	onPageChange,
	getPageHref,
	siblingCount = 1,
	ref,
	...props
}: PaginationProps & { ref?: React.Ref<HTMLElement> }) {
	const generatePageNumbers = () => {
		const pages: (number | string)[] = [];

		// 常に最初のページを表示
		pages.push(1);

		// 現在のページ周辺のページ番号を計算
		const leftSibling = Math.max(currentPage - siblingCount, 2);
		const rightSibling = Math.min(currentPage + siblingCount, totalPages - 1);

		// 最初のページと左側の兄弟ページの間に省略記号が必要か
		if (leftSibling > 2) {
			pages.push("...");
		}

		// 左側の兄弟ページから右側の兄弟ページまでを追加
		for (let i = leftSibling; i <= rightSibling; i++) {
			pages.push(i);
		}

		// 右側の兄弟ページと最後のページの間に省略記号が必要か
		if (rightSibling < totalPages - 1) {
			pages.push("...");
		}

		// 総ページ数が1より大きい場合、最後のページを表示
		if (totalPages > 1) {
			pages.push(totalPages);
		}

		return pages;
	};

	const handlePageClick = (page: number) => {
		if (onPageChange) {
			onPageChange(page);
		}
	};

	const PageButton = ({ page }: { page: number | string }) => {
		if (page === "...") {
			return (
				<li>
					<span className="px-3 py-2">…</span>
				</li>
			);
		}

		const pageNum = page as number;
		const isActive = pageNum === currentPage;
		const href = getPageHref ? getPageHref(pageNum) : `?page=${pageNum}`;

		const content = (
			<span
				className={cn(
					"px-3 py-2 rounded transition-colors",
					isActive ? "bg-primary text-white font-medium" : "hover:bg-gray-100"
				)}
			>
				{pageNum}
			</span>
		);

		if (getPageHref) {
			return (
				<li>
					<Link href={href}>{content}</Link>
				</li>
			);
		}

		return (
			<li>
				<button onClick={() => handlePageClick(pageNum)} disabled={isActive} className="disabled:cursor-default">
					{content}
				</button>
			</li>
		);
	};

	return (
		<nav ref={ref} className={className} aria-label="ページネーション" {...props}>
			<ul className="flex items-center gap-1">
				{/* 前へボタン */}
				<li>
					{currentPage > 1 ? (
						getPageHref ? (
							<Link
								href={getPageHref(currentPage - 1)}
								className="px-3 py-2 rounded hover:bg-gray-100 transition-colors"
							>
								‹
							</Link>
						) : (
							<button
								onClick={() => handlePageClick(currentPage - 1)}
								className="px-3 py-2 rounded hover:bg-gray-100 transition-colors"
							>
								‹
							</button>
						)
					) : (
						<span className="px-3 py-2 text-gray-400 cursor-not-allowed">‹</span>
					)}
				</li>

				{/* ページ番号 */}
				{generatePageNumbers().map((page, index) => (
					<PageButton key={index} page={page} />
				))}

				{/* 次へボタン */}
				<li>
					{currentPage < totalPages ? (
						getPageHref ? (
							<Link
								href={getPageHref(currentPage + 1)}
								className="px-3 py-2 rounded hover:bg-gray-100 transition-colors"
							>
								›
							</Link>
						) : (
							<button
								onClick={() => handlePageClick(currentPage + 1)}
								className="px-3 py-2 rounded hover:bg-gray-100 transition-colors"
							>
								›
							</button>
						)
					) : (
						<span className="px-3 py-2 text-gray-400 cursor-not-allowed">›</span>
					)}
				</li>
			</ul>
		</nav>
	);
}

export { Pagination };
