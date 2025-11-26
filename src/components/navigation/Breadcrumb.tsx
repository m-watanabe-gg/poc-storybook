import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

export interface BreadcrumbItem {
	label: string;
	href?: string;
}

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLElement> {
	items: BreadcrumbItem[];
	separator?: React.ReactNode;
}

function Breadcrumb({
	className,
	items,
	separator = "›",
	ref,
	...props
}: BreadcrumbProps & { ref?: React.Ref<HTMLElement> }) {
	return (
		<nav ref={ref} className={cn("c-breadcrumb", className)} aria-label="パンくずリスト" {...props}>
			<ol className="flex flex-wrap items-center gap-2 text-sm">
				{items.map((item, index) => {
					const isLast = index === items.length - 1;

					return (
						<li key={index} className="flex items-center gap-2">
							{item.href && !isLast ? (
								<Link href={item.href} className="text-primary hover:opacity-75 transition-opacity">
									{item.label}
								</Link>
							) : (
								<span className={cn(isLast && "text-gray-600")}>{item.label}</span>
							)}

							{!isLast && <span className="text-gray-400">{separator}</span>}
						</li>
					);
				})}
			</ol>
		</nav>
	);
}

export { Breadcrumb };
