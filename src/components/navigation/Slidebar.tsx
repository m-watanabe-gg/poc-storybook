"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

export interface SlidebarItem {
	label: string;
	href: string;
	children?: SlidebarItem[];
}

export interface SlidebarProps {
	/**
	 * メニューアイテム
	 */
	items: SlidebarItem[];
	/**
	 * 開閉状態
	 */
	isOpen: boolean;
	/**
	 * 閉じる時のコールバック
	 */
	onClose: () => void;
	/**
	 * タイトル
	 */
	title?: string;
	/**
	 * フッターコンテンツ
	 */
	footer?: React.ReactNode;
	/**
	 * スライド方向
	 */
	position?: "left" | "right";
}

const Slidebar: React.FC<SlidebarProps> = ({ items, isOpen, onClose, title = "Menu", footer, position = "left" }) => {
	const [expandedItems, setExpandedItems] = React.useState<string[]>([]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	const toggleExpand = (label: string) => {
		setExpandedItems((prev) => (prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]));
	};

	const handleBackdropClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	return (
		<>
			{/* バックドロップ */}
			<div
				className={cn(
					"fixed inset-0 bg-black/60 z-100 transition-opacity duration-300",
					isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
				)}
				onClick={handleBackdropClick}
			/>

			{/* スライドバー */}
			<aside
				className={cn(
					"fixed top-0 bottom-0 w-[280px] md:w-[320px] bg-white z-101 transition-transform duration-300 flex flex-col shadow-2xl",
					position === "left" ? "left-0" : "right-0",
					isOpen ? "translate-x-0" : position === "left" ? "-translate-x-full" : "translate-x-full"
				)}
			>
				{/* ヘッダー */}
				<div className="flex items-center justify-between p-4 border-b border-border">
					<h2 className="text-lg font-bold">{title}</h2>
					<button
						onClick={onClose}
						className="w-10 h-10 flex items-center justify-center rounded hover:bg-gray-100 transition-colors"
						aria-label="閉じる"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>
				</div>

				{/* メニュー */}
				<nav className="flex-1 overflow-y-auto">
					<ul>
						{items.map((item, index) => {
							const hasChildren = item.children && item.children.length > 0;
							const isExpanded = expandedItems.includes(item.label);

							return (
								<li key={`${item.label}-${index}`} className="border-b border-border">
									{hasChildren ? (
										<>
											<button
												onClick={() => toggleExpand(item.label)}
												className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-gray-50 transition-colors"
											>
												<span className="font-medium">{item.label}</span>
												<svg
													className={cn("w-5 h-5 transition-transform", isExpanded && "rotate-180")}
													fill="none"
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path d="M19 9l-7 7-7-7" />
												</svg>
											</button>
											{isExpanded && item.children && (
												<ul className="bg-gray-50">
													{item.children.map((child, childIndex) => (
														<li key={`${child.label}-${childIndex}`} className="border-t border-border">
															<Link
																href={child.href}
																onClick={onClose}
																className="block px-6 py-2.5 text-sm hover:bg-gray-100 transition-colors"
															>
																{child.label}
															</Link>
														</li>
													))}
												</ul>
											)}
										</>
									) : (
										<Link
											href={item.href}
											onClick={onClose}
											className="block px-4 py-3 font-medium hover:bg-gray-50 transition-colors"
										>
											{item.label}
										</Link>
									)}
								</li>
							);
						})}
					</ul>
				</nav>

				{/* フッター */}
				{footer && <div className="p-4 border-t border-border">{footer}</div>}
			</aside>
		</>
	);
};

export { Slidebar };
