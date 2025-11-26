"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItemProps {
	/**
	 * アコーディオンアイテムのタイトル
	 */
	title: string;
	/**
	 * アコーディオンアイテムのコンテンツ
	 */
	content: React.ReactNode;
	/**
	 * 初期状態で開いているか
	 */
	defaultOpen?: boolean;
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * アコーディオンアイテムの配列
	 */
	items: AccordionItemProps[];
	/**
	 * 一度に1つのみ開くか（accordion）、複数開けるか（collapsible）
	 */
	type?: "single" | "multiple";
}

const AccordionItem: React.FC<AccordionItemProps & { isOpen: boolean; onToggle: () => void }> = ({
	title,
	content,
	isOpen,
	onToggle,
}) => {
	return (
		<div className="border-b border-border">
			<button
				onClick={onToggle}
				className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
				aria-expanded={isOpen}
			>
				<span className="font-medium">{title}</span>
				<svg
					className={cn("w-5 h-5 transition-transform", isOpen && "rotate-180")}
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
			<div
				className={cn(
					"overflow-hidden transition-all duration-300",
					isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
				)}
			>
				<div className="p-4 pt-0">{content}</div>
			</div>
		</div>
	);
};

function Accordion({
	className,
	items,
	type = "single",
	ref,
	...props
}: AccordionProps & { ref?: React.Ref<HTMLDivElement> }) {
	const [openItems, setOpenItems] = useState<Set<number>>(
		new Set(items.map((item, index) => (item.defaultOpen ? index : -1)).filter((i) => i >= 0))
	);

	const handleToggle = (index: number) => {
		setOpenItems((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(index)) {
				newSet.delete(index);
			} else {
				if (type === "single") {
					newSet.clear();
				}
				newSet.add(index);
			}
			return newSet;
		});
	};

	return (
		<div ref={ref} className={cn("c-accordion border border-border rounded", className)} {...props}>
			{items.map((item, index) => (
				<AccordionItem key={index} {...item} isOpen={openItems.has(index)} onToggle={() => handleToggle(index)} />
			))}
		</div>
	);
}

export { Accordion };
