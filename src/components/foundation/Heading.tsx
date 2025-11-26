import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "@/lib/utils";

const headingVariants = cva("font-bold tracking-tight", {
	variants: {
		size: {
			xlg: "text-5xl md:text-7xl leading-tight",
			lg: "text-4xl md:text-5xl leading-tight",
			md: "text-3xl md:text-4xl leading-tight",
			sm: "text-2xl md:text-3xl leading-snug",
			xs: "text-xl md:text-2xl leading-snug",
			xxs: "text-lg md:text-xl leading-normal",
		},
		colorVariant: {
			default: "text-gray-900",
			primary: "text-primary",
			accent: "text-accent",
			white: "text-white",
		},
	},
	defaultVariants: {
		size: "md",
		colorVariant: "default",
	},
});

export interface HeadingProps
	extends Omit<React.HTMLAttributes<HTMLHeadingElement>, "color">,
		VariantProps<typeof headingVariants> {
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	subtitle?: string;
	ref?: React.Ref<HTMLHeadingElement>;
}

function Heading({ className, size, colorVariant, as: Comp = "h2", subtitle, children, ref, ...props }: HeadingProps) {
	return (
		<div className={cn("group", className)}>
			{subtitle && (
				<p className="text-sm md:text-base font-semibold mb-2 text-primary uppercase tracking-widest font-heading">
					{subtitle}
				</p>
			)}
			<Comp ref={ref} className={cn(headingVariants({ size, colorVariant }))} {...props}>
				{children}
			</Comp>
		</div>
	);
}

export { Heading, headingVariants };
