import type React from "react";
import { cn } from "@/lib/utils";

export interface HRProps extends React.HTMLAttributes<HTMLHRElement> {
	/**
	 * 区切り線のバリアント
	 */
	variant?: "default" | "dashed" | "dotted" | "gradient";
	/**
	 * 区切り線の太さ
	 */
	thickness?: "thin" | "medium" | "thick";
	/**
	 * 余白
	 */
	spacing?: "sm" | "md" | "lg";
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLHRElement>;
}

function HR({ className, variant = "default", thickness = "thin", spacing = "md", ref, ...props }: HRProps) {
	const variantClasses = {
		default: "border-solid border-border",
		dashed: "border-dashed border-border",
		dotted: "border-dotted border-border",
		gradient: "border-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent",
	};

	const thicknessClasses = {
		thin: variant === "gradient" ? "h-px" : "border-t",
		medium: variant === "gradient" ? "h-0.5" : "border-t-2",
		thick: variant === "gradient" ? "h-1" : "border-t-4",
	};

	const spacingClasses = {
		sm: "my-4",
		md: "my-8",
		lg: "my-12",
	};

	return (
		<hr
			ref={ref}
			className={cn(
				"w-full",
				variant !== "gradient" && variantClasses[variant],
				thicknessClasses[thickness],
				spacingClasses[spacing],
				variant === "gradient" && variantClasses[variant],
				className
			)}
			{...props}
		/>
	);
}

export { HR };
