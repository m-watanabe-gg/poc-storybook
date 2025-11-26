import type React from "react";
import { cn } from "@/lib/utils";

export interface BlockquoteProps extends React.BlockquoteHTMLAttributes<HTMLQuoteElement> {
	/**
	 * 引用元
	 */
	cite?: string;
	/**
	 * 引用元の表示名
	 */
	citeName?: string;
	/**
	 * バリアント
	 */
	variant?: "default" | "bordered" | "highlight";
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLQuoteElement>;
}

function Blockquote({ className, cite, citeName, variant = "default", children, ref, ...props }: BlockquoteProps) {
	const variantClasses = {
		default: "border-l-4 border-primary pl-4 italic text-gray-700",
		bordered: "border border-border p-4 rounded bg-gray-50",
		highlight: "border-l-4 border-accent pl-4 bg-accent/5 py-2 font-medium text-gray-800",
	};

	return (
		<figure className={cn("my-6", className)}>
			<blockquote ref={ref} cite={cite} className={cn("text-base leading-relaxed", variantClasses[variant])} {...props}>
				{children}
			</blockquote>
			{(citeName || cite) && <figcaption className="mt-2 text-sm text-gray-600">— {citeName || cite}</figcaption>}
		</figure>
	);
}

export { Blockquote };
