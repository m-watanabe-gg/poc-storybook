"use client";

import { motion, useAnimation, useInView, type Variants } from "framer-motion";
import type React from "react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export interface ScrollRevealProps {
	/**
	 * 子要素
	 */
	children: React.ReactNode;
	/**
	 * CSSクラス名
	 */
	className?: string;
	/**
	 * インラインスタイル
	 */
	style?: React.CSSProperties;
	/**
	 * アニメーションのバリアント
	 */
	variant?: "fadeIn" | "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "scale" | "none";
	/**
	 * アニメーションの遅延（秒）
	 */
	delay?: number;
	/**
	 * アニメーションの持続時間（秒）
	 */
	duration?: number;
	/**
	 * 一度だけアニメーションするか
	 */
	once?: boolean;
	/**
	 * ビューポートに入る閾値（0-1）
	 */
	threshold?: number;
}

const variants: Record<string, Variants> = {
	fadeIn: {
		hidden: { opacity: 0 },
		visible: { opacity: 1 },
	},
	slideUp: {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
	},
	slideDown: {
		hidden: { opacity: 0, y: -50 },
		visible: { opacity: 1, y: 0 },
	},
	slideLeft: {
		hidden: { opacity: 0, x: 50 },
		visible: { opacity: 1, x: 0 },
	},
	slideRight: {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0 },
	},
	scale: {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1 },
	},
	none: {
		hidden: {},
		visible: {},
	},
};

function ScrollReveal({
	className,
	style,
	children,
	variant = "fadeIn",
	delay = 0,
	duration = 0.6,
	once = true,
	threshold = 0.1,
	ref,
}: ScrollRevealProps & { ref?: React.Ref<HTMLDivElement> }) {
	const controls = useAnimation();
	const innerRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(innerRef, {
		once,
		amount: threshold,
	});

	useEffect(() => {
		if (isInView) {
			controls.start("visible");
		} else if (!once) {
			controls.start("hidden");
		}
	}, [isInView, controls, once]);

	return (
		<motion.div
			ref={(node) => {
				// Handle both refs
				if (typeof ref === "function") {
					ref(node);
				} else if (ref) {
					(ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
				}
				(innerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
			}}
			className={cn(className)}
			style={style}
			variants={variants[variant]}
			initial="hidden"
			animate={controls}
			transition={{
				duration,
				delay,
				ease: "easeOut",
			}}
		>
			{children}
		</motion.div>
	);
}

ScrollReveal.displayName = "ScrollReveal";

export { ScrollReveal };
