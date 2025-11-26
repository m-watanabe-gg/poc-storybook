import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "@/lib/utils";

const badgeVariants = cva("inline-flex items-center justify-center rounded-full font-medium transition-colors", {
	variants: {
		variant: {
			default: "bg-primary text-white",
			secondary: "bg-secondary text-black",
			accent: "bg-accent text-white",
			success: "bg-state-success text-white",
			warning: "bg-state-warning text-white",
			danger: "bg-state-danger text-white",
			info: "bg-state-info text-white",
			outline: "border border-border bg-white text-black",
		},
		size: {
			sm: "text-xs px-2 py-0.5",
			default: "text-sm px-2.5 py-0.5",
			lg: "text-base px-3 py-1",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
	/**
	 * バッジに表示するアイコン
	 */
	icon?: React.ReactNode;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLSpanElement>;
}

function Badge({ className, variant, size, icon, children, ref, ...props }: BadgeProps) {
	return (
		<span ref={ref} className={cn(badgeVariants({ variant, size }), className)} {...props}>
			{icon && <span className="mr-1">{icon}</span>}
			{children}
		</span>
	);
}

export { Badge, badgeVariants };
