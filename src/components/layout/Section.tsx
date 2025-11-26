import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

const sectionVariants = cva("w-full", {
	variants: {
		variant: {
			default: "bg-white",
			transparent: "bg-transparent",
			gray: "bg-gray-50",
			primary: "bg-primary text-white",
			secondary: "bg-secondary",
			accent: "bg-accent text-white",
			dark: "bg-gray-950 text-white",
		},
		spacing: {
			none: "py-0",
			sm: "py-12 md:py-16",
			default: "py-16 md:py-24",
			lg: "py-24 md:py-32",
			xl: "py-32 md:py-48",
		},
	},
	defaultVariants: {
		variant: "default",
		spacing: "default",
	},
});

export interface SectionProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof sectionVariants> {
	/**
	 * セクションのタイトル（オプション）
	 */
	title?: string;
	/**
	 * セクションのサブタイトル（オプション）
	 */
	subtitle?: string;
	/**
	 * Containerコンポーネントでラップするか
	 * @default true
	 */
	contained?: boolean;
	/**
	 * セクションの横幅を制限するか
	 * @default true
	 */
	constrained?: boolean;
	/**
	 * as プロパティで要素タグを変更
	 * @default 'section'
	 */
	as?: "section" | "div" | "article" | "aside";
}

function Section({
	className,
	variant,
	spacing,
	title,
	subtitle,
	contained = true,
	constrained = true,
	as: Component = "section",
	children,
	...props
}: SectionProps) {
	const content = (
		<>
			{(title || subtitle) && (
				<div className="text-center mb-8 md:mb-12">
					{subtitle && (
						<p
							className={cn(
								"text-sm font-semibold tracking-widest uppercase mb-3 font-heading",
								variant === "primary" || variant === "accent" || variant === "dark" ? "text-white/80" : "text-primary"
							)}
						>
							{subtitle}
						</p>
					)}
					{title && (
						<h2
							className={cn(
								"text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight",
								variant === "primary" || variant === "accent" || variant === "dark" ? "text-white" : "text-gray-900"
							)}
						>
							{title}
						</h2>
					)}
				</div>
			)}
			{children}
		</>
	);

	return (
		<Component className={cn(sectionVariants({ variant, spacing }), className)} {...props}>
			{contained ? <Container constrained={constrained}>{content}</Container> : content}
		</Component>
	);
}

export { Section, sectionVariants };
