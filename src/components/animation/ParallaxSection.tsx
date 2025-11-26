"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import type React from "react";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export interface ParallaxSectionProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * 背景画像URL
	 */
	image: string;
	/**
	 * 画像の代替テキスト
	 */
	imageAlt?: string;
	/**
	 * パララックスの強度（大きいほど速く動く）
	 */
	speed?: number;
	/**
	 * オーバーレイの透明度
	 */
	overlayOpacity?: number;
	/**
	 * セクションの高さ
	 */
	height?: "sm" | "md" | "lg" | "full";
}

function ParallaxSection({
	className,
	image,
	imageAlt = "",
	speed = 0.5,
	overlayOpacity = 0.3,
	height = "md",
	children,
	...props
}: ParallaxSectionProps) {
	const sectionRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	// speedを使用してパララックス効果を調整
	const moveAmount = 20 * speed;
	const y = useTransform(scrollYProgress, [0, 1], [`-${moveAmount}%`, `${moveAmount}%`]);

	const heightClasses = {
		sm: "h-[400px]",
		md: "h-[600px]",
		lg: "h-[800px]",
		full: "h-screen",
	};

	return (
		<div ref={sectionRef} className={cn("relative overflow-hidden", heightClasses[height], className)} {...props}>
			{/* パララックス背景画像 */}
			<motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
				<Image src={image} alt={imageAlt} fill className="object-cover" sizes="100vw" priority />
			</motion.div>

			{/* オーバーレイ */}
			<div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity }} />

			{/* コンテンツ */}
			<div className="relative z-10 h-full flex items-center justify-center">{children}</div>
		</div>
	);
}

export { ParallaxSection };
