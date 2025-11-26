import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "@/lib/utils";

const loaderVariants = cva("c-loader", {
	variants: {
		variant: {
			spinner: "inline-block border-4 border-gray-200 border-t-primary rounded-full animate-spin",
			dots: "flex gap-2",
			pulse: "inline-block bg-primary rounded-full animate-pulse",
		},
		size: {
			sm: "",
			md: "",
			lg: "",
		},
	},
	compoundVariants: [
		{
			variant: "spinner",
			size: "sm",
			className: "w-4 h-4",
		},
		{
			variant: "spinner",
			size: "md",
			className: "w-8 h-8",
		},
		{
			variant: "spinner",
			size: "lg",
			className: "w-12 h-12",
		},
		{
			variant: "pulse",
			size: "sm",
			className: "w-4 h-4",
		},
		{
			variant: "pulse",
			size: "md",
			className: "w-8 h-8",
		},
		{
			variant: "pulse",
			size: "lg",
			className: "w-12 h-12",
		},
	],
	defaultVariants: {
		variant: "spinner",
		size: "md",
	},
});

export interface LoaderProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof loaderVariants> {
	/**
	 * ローディング中であることを示すテキスト
	 */
	label?: string;
}

function Loader({ className, variant, size, label, ref, ...props }: LoaderProps & { ref?: React.Ref<HTMLDivElement> }) {
	if (variant === "dots") {
		const dotSize = size === "sm" ? "w-2 h-2" : size === "lg" ? "w-4 h-4" : "w-3 h-3";
		return (
			<div
				ref={ref}
				className={cn("c-loader flex flex-col items-center gap-4", className)}
				role="status"
				aria-live="polite"
				{...props}
			>
				<div className={cn(loaderVariants({ variant, size }))}>
					<div className={cn("bg-primary rounded-full animate-bounce", dotSize)} />
					<div className={cn("bg-primary rounded-full animate-bounce [animation-delay:0.1s]", dotSize)} />
					<div className={cn("bg-primary rounded-full animate-bounce [animation-delay:0.2s]", dotSize)} />
				</div>
				{label && <span className="sr-only">{label}</span>}
			</div>
		);
	}

	return (
		<div
			ref={ref}
			className={cn("c-loader flex flex-col items-center gap-4", className)}
			role="status"
			aria-live="polite"
			{...props}
		>
			<div className={cn(loaderVariants({ variant, size }))} />
			{label && <span className="text-sm text-gray-600">{label}</span>}
		</div>
	);
}

export { Loader, loaderVariants };
