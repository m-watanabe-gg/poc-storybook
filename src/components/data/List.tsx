import type React from "react";
import { cn } from "@/lib/utils";

export interface ListProps extends React.HTMLAttributes<HTMLUListElement | HTMLOListElement> {
	/**
	 * リストの種類
	 */
	as?: "ul" | "ol";
	/**
	 * リストのスタイルバリエーション
	 */
	variant?: "default" | "disc" | "circle" | "square" | "decimal" | "icon" | "check";
	/**
	 * リストアイテムの配列
	 */
	items?: React.ReactNode[];
}

function List({
	className,
	as = "ul",
	variant = "default",
	items,
	children,
	ref,
	...props
}: ListProps & { ref?: React.Ref<HTMLUListElement | HTMLOListElement> }) {
	const Component = as;

	const listClasses = cn(
		"c-list space-y-2",
		variant === "disc" && "list-disc list-inside",
		variant === "circle" && "list-[circle] list-inside",
		variant === "square" && "list-[square] list-inside",
		variant === "decimal" && "list-decimal list-inside",
		variant === "icon" && "space-y-3",
		variant === "check" && "space-y-3",
		className
	);

	const renderItem = (item: React.ReactNode, index: number) => {
		if (variant === "icon") {
			return (
				<li key={index} className="flex items-start gap-2">
					<span className="c-icon-font text-primary mt-0.5">chevron_right</span>
					<span className="flex-1">{item}</span>
				</li>
			);
		}

		if (variant === "check") {
			return (
				<li key={index} className="flex items-start gap-2">
					<span className="text-primary mt-0.5">✓</span>
					<span className="flex-1">{item}</span>
				</li>
			);
		}

		return <li key={index}>{item}</li>;
	};

	return (
		<Component ref={ref as never} className={listClasses} {...props}>
			{items ? items.map(renderItem) : children}
		</Component>
	);
}

export { List };
