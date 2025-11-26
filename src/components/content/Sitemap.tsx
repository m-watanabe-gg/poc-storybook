import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

export interface SitemapItem {
	label: string;
	href: string;
	children?: SitemapItem[];
}

export interface SitemapSection {
	title: string;
	items: SitemapItem[];
}

export interface SitemapProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * サイトマップのセクション
	 */
	sections: SitemapSection[];
	/**
	 * カラム数
	 */
	columns?: 2 | 3 | 4;
}

function Sitemap({
	className,
	sections,
	columns = 3,
	ref,
	...props
}: SitemapProps & { ref?: React.Ref<HTMLDivElement> }) {
	const columnClasses = {
		2: "grid-cols-1 md:grid-cols-2",
		3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
		4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
	};

	return (
		<div ref={ref} className={cn("grid gap-8", columnClasses[columns], className)} {...props}>
			{sections.map((section) => (
				<div key={section.title}>
					<h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-primary">{section.title}</h3>
					<ul className="space-y-2">
						{section.items.map((item) => (
							<li key={item.href}>
								<Link href={item.href} className="text-gray-700 hover:text-primary hover:underline transition-colors">
									{item.label}
								</Link>
								{item.children && item.children.length > 0 && (
									<ul className="ml-4 mt-2 space-y-1.5">
										{item.children.map((child) => (
											<li key={child.href} className="text-sm">
												<Link
													href={child.href}
													className="text-gray-600 hover:text-primary hover:underline transition-colors flex items-center gap-1"
												>
													<svg
														className="w-3 h-3"
														fill="currentColor"
														viewBox="0 0 20 20"
														role="img"
														aria-label="右矢印"
													>
														<path
															fillRule="evenodd"
															d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
															clipRule="evenodd"
														/>
													</svg>
													{child.label}
												</Link>
											</li>
										))}
									</ul>
								)}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}

export { Sitemap };
