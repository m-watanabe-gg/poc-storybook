"use client";

import { AnimatePresence, motion } from "framer-motion";
import type React from "react";
import { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export interface HeroSlide {
	/**
	 * 背景画像URL
	 */
	image: string;
	/**
	 * メインタイトル
	 */
	title: string;
	/**
	 * サブタイトル
	 */
	subtitle: string;
	/**
	 * オーバーレイの不透明度 (0-1)
	 */
	overlayOpacity?: number;
}

export interface HeroSliderProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * スライドの配列
	 */
	slides: HeroSlide[];
	/**
	 * 自動再生間隔（ミリ秒）
	 */
	autoPlayInterval?: number;
	/**
	 * 自動再生を有効にするか
	 */
	autoPlay?: boolean;
	/**
	 * インジケーターを表示するか
	 */
	showIndicators?: boolean;
	/**
	 * 矢印ナビゲーションを表示するか
	 */
	showArrows?: boolean;
	/**
	 * スライドの高さ
	 */
	height?: string;
}

function HeroSlider({
	className,
	slides,
	autoPlayInterval = 5000,
	autoPlay = true,
	showIndicators = true,
	showArrows = true,
	height = "calc(100vh - var(--header-height))",
	ref,
	...props
}: HeroSliderProps & { ref?: React.Ref<HTMLDivElement> }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [direction, setDirection] = useState(0);

	const handleNext = useCallback(() => {
		setDirection(1);
		setCurrentIndex((prev) => (prev + 1) % slides.length);
	}, [slides.length]);

	const handlePrev = useCallback(() => {
		setDirection(-1);
		setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
	}, [slides.length]);

	// 自動再生
	useEffect(() => {
		if (!autoPlay || slides.length <= 1) return;

		const interval = setInterval(() => {
			handleNext();
		}, autoPlayInterval);

		return () => clearInterval(interval);
	}, [handleNext, autoPlay, autoPlayInterval, slides.length]);

	const handleIndicatorClick = (index: number) => {
		setDirection(index > currentIndex ? 1 : -1);
		setCurrentIndex(index);
	};

	const slideVariants = {
		enter: (direction: number) => ({
			x: direction > 0 ? "100%" : "-100%",
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
		},
		exit: (direction: number) => ({
			x: direction > 0 ? "-100%" : "100%",
			opacity: 0,
		}),
	};

	const currentSlide = slides[currentIndex];

	return (
		<div ref={ref} className={cn("relative overflow-hidden", className)} style={{ height }} {...props}>
			<AnimatePresence initial={false} custom={direction}>
				<motion.div
					key={currentIndex}
					custom={direction}
					variants={slideVariants}
					initial="enter"
					animate="center"
					exit="exit"
					transition={{
						x: { type: "spring", stiffness: 300, damping: 30 },
						opacity: { duration: 0.2 },
					}}
					className="absolute inset-0"
				>
					{/* 背景画像 */}
					<div
						className="absolute inset-0 bg-cover bg-center bg-no-repeat"
						style={{ backgroundImage: `url(${currentSlide.image})` }}
					/>

					{/* オーバーレイ */}
					<div className="absolute inset-0 bg-black/40" style={{ opacity: currentSlide.overlayOpacity ?? 0.4 }} />

					{/* コンテンツ */}
					<div className="relative h-full flex items-center justify-center text-center px-4">
						<div className="max-w-5xl">
							<motion.h1
								initial={{ y: 40, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
								className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-heading tracking-tight leading-tight"
							>
								{currentSlide.title}
							</motion.h1>
							<motion.p
								initial={{ y: 40, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
								className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light tracking-wide"
							>
								{currentSlide.subtitle}
							</motion.p>
						</div>
					</div>
				</motion.div>
			</AnimatePresence>

			{/* 矢印ナビゲーション */}
			{showArrows && slides.length > 1 && (
				<>
					<button
						type="button"
						onClick={handlePrev}
						className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white p-4 transition-colors duration-300"
						aria-label="前のスライド"
					>
						<svg
							className="w-10 h-10"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							role="img"
							aria-label="左矢印"
						>
							<path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						type="button"
						onClick={handleNext}
						className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-white/50 hover:text-white p-4 transition-colors duration-300"
						aria-label="次のスライド"
					>
						<svg
							className="w-10 h-10"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							role="img"
							aria-label="右矢印"
						>
							<path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1} d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</>
			)}

			{/* インジケーター */}
			{showIndicators && slides.length > 1 && (
				<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex gap-4">
					{slides.map((slide, index) => (
						<button
							type="button"
							key={slide.image}
							onClick={() => handleIndicatorClick(index)}
							className={cn(
								"h-1 transition-all duration-500",
								index === currentIndex ? "bg-white w-12" : "bg-white/30 w-8 hover:bg-white/50"
							)}
							aria-label={`スライド ${index + 1}`}
						/>
					))}
				</div>
			)}
		</div>
	);
}

HeroSlider.displayName = "HeroSlider";

export { HeroSlider };
