import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "@/lib/utils";

const boxVariants = cva("rounded overflow-hidden", {
	variants: {
		variant: {
			default: "bg-white border border-border",
			filled: "bg-gray-50 border border-border",
			primary: "bg-primary/5 border border-primary/20",
			secondary: "bg-secondary border-0",
			accent: "bg-accent/5 border border-accent/20",
			outline: "bg-transparent border-2 border-border",
		},
		padding: {
			none: "p-0",
			sm: "p-4",
			md: "p-6",
			lg: "p-8",
			xl: "p-10",
		},
		shadow: {
			none: "",
			sm: "shadow-sm",
			md: "shadow-md",
			lg: "shadow-lg",
		},
	},
	defaultVariants: {
		variant: "default",
		padding: "md",
		shadow: "none",
	},
});

export interface BoxProps
	extends Omit<React.HTMLAttributes<HTMLDivElement>, "title">,
		VariantProps<typeof boxVariants> {
	/**
	 * ボックスのタイトル
	 */
	title?: React.ReactNode;
	/**
	 * タイトルのアクション（右側に表示）
	 */
	action?: React.ReactNode;
	/**
	 * フッター
	 */
	footer?: React.ReactNode;
}

function Box({
	className,
	variant,
	padding,
	shadow,
	title,
	action,
	footer,
	children,
	ref,
	...props
}: BoxProps & { ref?: React.Ref<HTMLDivElement> }) {
	return (
		<div ref={ref} className={cn(boxVariants({ variant, shadow }), className)} {...props}>
			{title && (
				<div
					className={cn(
						"flex items-center justify-between border-b",
						padding === "none" ? "p-4" : padding === "sm" ? "px-4 py-3" : "px-6 py-4",
						variant === "default" || variant === "filled" || variant === "outline"
							? "border-border bg-gray-50/50"
							: variant === "primary"
								? "border-primary/10 bg-primary/5"
								: variant === "accent"
									? "border-accent/10 bg-accent/5"
									: "border-border"
					)}
				>
					<h3 className="font-bold text-base">{title}</h3>
					{action && <div>{action}</div>}
				</div>
			)}
			<div className={cn(padding !== "none" && boxVariants({ padding }))}>{children}</div>
			{footer && (
				<div
					className={cn(
						"border-t",
						padding === "none" ? "p-4" : padding === "sm" ? "px-4 py-3" : "px-6 py-4",
						variant === "default" || variant === "filled" || variant === "outline"
							? "border-border bg-gray-50/50"
							: variant === "primary"
								? "border-primary/10"
								: variant === "accent"
									? "border-accent/10"
									: "border-border"
					)}
				>
					{footer}
				</div>
			)}
		</div>
	);
}

export { Box, boxVariants };
