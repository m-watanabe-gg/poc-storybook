"use client";

import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

export interface AsideNavItem {
	label: string;
	href: string;
	icon?: React.ReactNode;
	badge?: string;
}

export interface AsideNavBlock {
	title?: string;
	items?: AsideNavItem[];
	content?: React.ReactNode;
	image?: string;
}

export interface AsideNavProps extends React.HTMLAttributes<HTMLElement> {
	/**
	 * サイドバーブロックの配列
	 */
	blocks: AsideNavBlock[];
	/**
	 * 現在のパス
	 */
	currentPath?: string;
}

function AsideNav({ className, blocks, currentPath, ref, ...props }: AsideNavProps & { ref?: React.Ref<HTMLElement> }) {
	const isActive = (href: string) => {
		if (!currentPath) return false;
		return currentPath === href || currentPath.startsWith(`${href}/`);
	};

	return (
		<aside ref={ref} className={cn("w-full space-y-6", className)} {...props}>
			{blocks.map((block, blockIndex) => (
				<div key={blockIndex} className="bg-white rounded border border-border overflow-hidden">
					{block.title && (
						<div className="bg-gray-50 px-4 py-3 border-b border-border">
							<h3 className="font-bold text-sm">{block.title}</h3>
						</div>
					)}

					{block.items && block.items.length > 0 && (
						<ul className="py-2">
							{block.items.map((item, itemIndex) => {
								const active = isActive(item.href);
								return (
									<li key={`${item.href}-${itemIndex}`}>
										<Link
											href={item.href}
											className={cn(
												"flex items-center justify-between px-4 py-2 text-sm transition-colors hover:bg-gray-50",
												active && "bg-primary/10 text-primary font-medium border-l-4 border-primary"
											)}
										>
											<span className="flex items-center gap-2">
												{item.icon && <span>{item.icon}</span>}
												<span>{item.label}</span>
											</span>
											{item.badge && (
												<span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-full bg-accent text-white">
													{item.badge}
												</span>
											)}
										</Link>
									</li>
								);
							})}
						</ul>
					)}

					{block.image && (
						<div className="relative w-full aspect-video">
							<Image src={block.image} alt="" fill className="object-cover" sizes="(max-width: 768px) 100vw, 320px" />
						</div>
					)}

					{block.content && <div className="p-4">{block.content}</div>}
				</div>
			))}
		</aside>
	);
}

export { AsideNav };
