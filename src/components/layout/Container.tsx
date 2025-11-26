import type React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * コンテナの最大幅を制限するか
	 * @default true
	 */
	constrained?: boolean;
	/**
	 * パディングを適用するか
	 * @default true
	 */
	padded?: boolean;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLDivElement>;
}

function Container({ className, constrained = true, padded = true, children, ref, ...props }: ContainerProps) {
	return (
		<div
			ref={ref}
			className={cn("w-full", constrained && "max-w-grid mx-auto", padded && "px-4 md:px-8", className)}
			{...props}
		>
			{children}
		</div>
	);
}

export { Container };
