"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
	"inline-flex items-center justify-center rounded-none font-bold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-heading",
	{
		variants: {
			variant: {
				default: "bg-gray-900 text-white hover:bg-gray-800",
				secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
				accent: "bg-accent text-white hover:bg-accent/90",
				outline: "border border-gray-300 bg-transparent text-gray-900 hover:bg-gray-50",
				ghost: "bg-transparent text-gray-900 hover:bg-gray-100",
				link: "bg-transparent text-primary hover:underline underline-offset-4",
			},
			size: {
				xs: "h-8 px-3 text-xs",
				sm: "h-10 px-4 text-sm",
				default: "h-12 px-8 text-base",
				lg: "h-14 px-10 text-lg",
				xlg: "h-16 px-12 text-xl",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	}
);

export interface ButtonProps
	extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "ref">,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
	href?: string;
	/**
	 * ホバーアニメーションを有効にする
	 */
	animated?: boolean;
	/**
	 * 右側にアイコンを表示（例: 矢印）
	 */
	rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	({ className, variant, size, href, animated = true, rightIcon, children, ...props }, ref) => {
		// アニメーションなしの場合は通常のHTML要素を使用
		if (!animated) {
			if (href) {
				const { type: _, ...anchorProps } = props;
				return (
					<a
						className={cn(buttonVariants({ variant, size }), className)}
						href={href}
						{...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
					>
						{children}
						{rightIcon && <span className="ml-2">{rightIcon}</span>}
					</a>
				);
			}
			return (
				<button
					className={cn(buttonVariants({ variant, size }), className)}
					ref={ref}
					{...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
				>
					{children}
					{rightIcon && <span className="ml-2">{rightIcon}</span>}
				</button>
			);
		}

		// アニメーションありの場合は、安全なpropsのみを渡す
		const {
			onClick,
			onMouseEnter,
			onMouseLeave,
			onFocus,
			onBlur,
			disabled,
			type,
			id,
			role,
			"aria-label": ariaLabel,
		} = props;

		// 共通のprops
		const baseProps = {
			className: cn(buttonVariants({ variant, size }), className),
			id,
			role,
			"aria-label": ariaLabel,
		};

		if (href) {
			// リンクとして使用する場合（disabledは使用しない）
			const MotionLink = motion.a;
			return (
				<MotionLink
					{...baseProps}
					href={href}
					onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
					onMouseEnter={onMouseEnter as React.MouseEventHandler<HTMLAnchorElement> | undefined}
					onMouseLeave={onMouseLeave as React.MouseEventHandler<HTMLAnchorElement> | undefined}
					onFocus={onFocus as React.FocusEventHandler<HTMLAnchorElement> | undefined}
					onBlur={onBlur as React.FocusEventHandler<HTMLAnchorElement> | undefined}
					aria-disabled={disabled}
					className={cn(baseProps.className, disabled && "pointer-events-none opacity-50")}
				>
					{children}
					{rightIcon && <span className="ml-2">{rightIcon}</span>}
				</MotionLink>
			);
		}

		// ボタンとして使用する場合
		const MotionButton = motion.button;
		return (
			<MotionButton
				{...baseProps}
				ref={ref}
				onClick={onClick}
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				onFocus={onFocus}
				onBlur={onBlur}
				disabled={disabled}
				type={type || "button"}
			>
				{children}
				{rightIcon && <span className="ml-2">{rightIcon}</span>}
			</MotionButton>
		);
	}
);

Button.displayName = "Button";

export { Button, buttonVariants };
