"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
	label: string;
	content: React.ReactNode;
	disabled?: boolean;
}

export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
	items: TabItem[];
	defaultActiveIndex?: number;
	variant?: "default" | "pills" | "underline";
}

function Tabs({
	className,
	items,
	defaultActiveIndex = 0,
	variant = "default",
	ref,
	...props
}: TabsProps & { ref?: React.Ref<HTMLDivElement> }) {
	const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

	return (
		<div ref={ref} className={cn("c-tabs", className)} {...props}>
			{/* タブナビゲーション */}
			<ul
				className={cn(
					"c-tabs__navs flex border-b",
					variant === "pills" && "border-b-0 gap-2",
					variant === "underline" && "gap-4"
				)}
			>
				{items.map((item, index) => (
					<li key={index}>
						<button
							onClick={() => !item.disabled && setActiveIndex(index)}
							disabled={item.disabled}
							className={cn(
								"c-tabs__nav px-4 py-2 transition-colors",
								variant === "default" && "border-b-2 -mb-px hover:text-primary",
								variant === "pills" && "rounded-lg hover:bg-gray-100",
								variant === "underline" && "border-b-2 -mb-px",
								activeIndex === index && variant === "default" && "border-primary text-primary font-medium",
								activeIndex === index && variant === "pills" && "bg-primary text-white hover:bg-primary",
								activeIndex === index && variant === "underline" && "border-primary text-primary",
								activeIndex !== index && variant !== "pills" && "border-transparent",
								item.disabled && "opacity-50 cursor-not-allowed"
							)}
						>
							{item.label}
						</button>
					</li>
				))}
			</ul>

			{/* タブコンテンツ */}
			<div>
				{items.map((item, index) => (
					<div key={index} className={cn("py-6", activeIndex === index ? "block" : "hidden")}>
						{item.content}
					</div>
				))}
			</div>
		</div>
	);
}

export { Tabs };
