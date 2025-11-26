import type React from "react";
import { cn } from "@/lib/utils";

export interface TableProps extends React.TableHTMLAttributes<HTMLTableElement> {
	/**
	 * テーブルのバリエーション
	 */
	variant?: "default" | "bordered" | "striped" | "compact";
	/**
	 * レスポンシブ対応（横スクロール可能）
	 */
	responsive?: boolean;
}

function Table({
	className,
	variant = "default",
	responsive = false,
	children,
	ref,
	...props
}: TableProps & { ref?: React.Ref<HTMLTableElement> }) {
	const table = (
		<table
			ref={ref}
			className={cn(
				"w-full text-left",
				variant === "bordered" && "border border-border",
				variant === "striped" && "[&_tbody_tr:nth-child(even)]:bg-gray-50",
				variant === "compact" && "[&_th]:py-2 [&_td]:py-2",
				className
			)}
			{...props}
		>
			{children}
		</table>
	);

	if (responsive) {
		return <div className="overflow-x-auto">{table}</div>;
	}

	return table;
}

function TableHead({
	className,
	ref,
	...props
}: React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.Ref<HTMLTableSectionElement> }) {
	return <thead ref={ref} className={cn("bg-gray-100 border-b border-border", className)} {...props} />;
}

function TableBody({
	className,
	ref,
	...props
}: React.HTMLAttributes<HTMLTableSectionElement> & { ref?: React.Ref<HTMLTableSectionElement> }) {
	return <tbody ref={ref} className={cn(className)} {...props} />;
}

function TableRow({
	className,
	ref,
	...props
}: React.HTMLAttributes<HTMLTableRowElement> & { ref?: React.Ref<HTMLTableRowElement> }) {
	return <tr ref={ref} className={cn("border-b border-border last:border-b-0", className)} {...props} />;
}

function TableHeader({
	className,
	ref,
	...props
}: React.ThHTMLAttributes<HTMLTableCellElement> & { ref?: React.Ref<HTMLTableCellElement> }) {
	return <th ref={ref} className={cn("px-4 py-3 font-medium text-left", className)} {...props} />;
}

function TableCell({
	className,
	ref,
	...props
}: React.TdHTMLAttributes<HTMLTableCellElement> & { ref?: React.Ref<HTMLTableCellElement> }) {
	return <td ref={ref} className={cn("px-4 py-3", className)} {...props} />;
}

export { Table, TableHead, TableBody, TableRow, TableHeader, TableCell };
