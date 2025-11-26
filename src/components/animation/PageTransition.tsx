"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type React from "react";
import { cn } from "@/lib/utils";

export interface PageTransitionProps {
	/**
	 * 子要素
	 */
	children: React.ReactNode;
	/**
	 * トランジションのバリアント
	 */
	variant?: "fade" | "slide" | "scale" | "slideUp" | "slideDown";
	/**
	 * アニメーションの持続時間（秒）
	 */
	duration?: number;
	/**
	 * カスタムクラス名
	 */
	className?: string;
}

const variants = {
	fade: {
		initial: { opacity: 0 },
		animate: { opacity: 1 },
		exit: { opacity: 0 },
	},
	slide: {
		initial: { x: 100, opacity: 0 },
		animate: { x: 0, opacity: 1 },
		exit: { x: -100, opacity: 0 },
	},
	scale: {
		initial: { scale: 0.95, opacity: 0 },
		animate: { scale: 1, opacity: 1 },
		exit: { scale: 0.95, opacity: 0 },
	},
	slideUp: {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: -50, opacity: 0 },
	},
	slideDown: {
		initial: { y: -50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
		exit: { y: 50, opacity: 0 },
	},
};

function PageTransition({ children, variant = "fade", duration = 0.3, className }: PageTransitionProps) {
	const pathname = usePathname();

	return (
		<AnimatePresence mode="wait" initial={false}>
			<motion.div
				key={pathname}
				initial="initial"
				animate="animate"
				exit="exit"
				variants={variants[variant]}
				transition={{
					duration,
					ease: "easeInOut",
				}}
				className={cn("w-full", className)}
			>
				{children}
			</motion.div>
		</AnimatePresence>
	);
}

PageTransition.displayName = "PageTransition";

export { PageTransition };
