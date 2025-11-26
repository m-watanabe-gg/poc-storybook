"use client";

import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

export interface NavigationItem {
	label: string;
	href: string;
	children?: NavigationItem[];
	external?: boolean;
}

export interface NavigationProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * ナビゲーションアイテム
	 */
	items: NavigationItem[];
	/**
	 * 現在のパス
	 */
	currentPath?: string;
	/**
	 * バリアント
	 */
	variant?: "horizontal" | "vertical";
	/**
	 * 表示方向（水平時）
	 */
	align?: "left" | "center" | "right";
}

function Navigation({
	className,
	items,
	currentPath,
	variant = "horizontal",
	align = "left",
	ref,
	...props
}: NavigationProps & { ref?: React.Ref<HTMLElement> }) {
	const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

	const isActive = (href: string) => {
		if (!currentPath) return false;
		return currentPath === href || currentPath.startsWith(`${href}/`);
	};

	const alignClasses = {
		left: "justify-start",
		center: "justify-center",
		right: "justify-end",
	};

	return (
		<nav ref={ref} className={cn("l-navigation", variant === "vertical" && "w-full", className)} {...props}>
			<ul
				className={cn(
					"l-navigation__list",
					variant === "horizontal" ? `flex gap-1 md:gap-2 ${alignClasses[align]}` : "space-y-1"
				)}
			>
				{items.map((item, index) => {
					const hasChildren = item.children && item.children.length > 0;
					const active = isActive(item.href);
					const submenuOpen = openSubmenu === item.label;

					return (
						<li
							key={`${item.href}-${index}`}
							className={cn("l-navigation__item relative", variant === "vertical" && "w-full")}
						>
							{hasChildren ? (
								<>
									<button
										onClick={() => setOpenSubmenu(submenuOpen ? null : item.label)}
										className={cn(
											"l-navigation__link flex items-center gap-2 px-4 py-2 rounded transition-colors",
											"hover:bg-gray-100",
											active && "bg-primary/10 text-primary font-medium",
											variant === "vertical" && "w-full justify-between"
										)}
									>
										<span>{item.label}</span>
										<svg
											className={cn("w-4 h-4 transition-transform", submenuOpen && "rotate-180")}
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
									{submenuOpen && (
										<ul
											className={cn(
												variant === "horizontal"
													? "absolute top-full left-0 mt-1 min-w-48 bg-white shadow-lg rounded border border-border py-1"
													: "ml-4 mt-1 space-y-1"
											)}
										>
											{item.children?.map((child, childIndex) => (
												<li key={`${child.href}-${childIndex}`}>
													<Link
														href={child.href}
														target={child.external ? "_blank" : undefined}
														rel={child.external ? "noopener noreferrer" : undefined}
														className={cn(
															"block px-4 py-2 text-sm transition-colors hover:bg-gray-100",
															isActive(child.href) && "bg-primary/10 text-primary font-medium"
														)}
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
									target={item.external ? "_blank" : undefined}
									rel={item.external ? "noopener noreferrer" : undefined}
									className={cn(
										"l-navigation__link block px-4 py-2 rounded transition-colors",
										"hover:bg-gray-100",
										active && "bg-primary/10 text-primary font-medium"
									)}
								>
									{item.label}
								</Link>
							)}
						</li>
					);
				})}
			</ul>
		</nav>
	);
}

export { Navigation };
