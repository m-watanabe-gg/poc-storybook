"use client";

import React, { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { cn } from "@/lib/utils";
import { Card, type CardProps } from "../data/Card";
import { Badge } from "../foundation/Badge";
import { Button } from "../foundation/Button";
import { Heading } from "../foundation/Heading";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export interface CaseSliderItemCard {
	/**
	 * カードのタイトル（企業名など）
	 */
	title?: string;
	/**
	 * カードの説明文
	 */
	description?: string;
	/**
	 * カードの画像URL
	 */
	image?: string;
	/**
	 * カードのリンク先
	 */
	href?: string;
	/**
	 * カードのバリアント
	 */
	variant?: CardProps["variant"];
	/**
	 * 業種バッジ（表示されるテキスト）
	 */
	badge?: string;
	/**
	 * 詳細ボタンのテキスト
	 * @default "詳細を見る"
	 */
	buttonText?: string;
	/**
	 * カード内の追加コンテンツ（children）
	 */
	children?: React.ReactNode;
	/**
	 * カードの追加クラス名
	 */
	className?: string;
}

export interface CaseSliderItem {
	/**
	 * 一意のID
	 */
	id: string;
	/**
	 * スライドに表示するコンテンツ（カスタムコンテンツを使用する場合）
	 * contentが指定されている場合、Cardのプロパティは無視されます
	 */
	content?: React.ReactNode;
	/**
	 * Cardのプロパティ（contentが指定されていない場合に使用）
	 */
	card?: CaseSliderItemCard;
}

export interface CaseSliderProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * スライドアイテムの配列
	 */
	items: CaseSliderItem[];
	/**
	 * 一度に表示するアイテム数
	 */
	slidesToShow?: number;
	/**
	 * スライド間のギャップ（px）
	 */
	spaceBetween?: number;
	/**
	 * 矢印ボタンのバリアント
	 */
	arrowVariant?: "default" | "primary" | "secondary";
	/**
	 * 自動再生
	 */
	autoPlay?: boolean;
	/**
	 * 自動再生の間隔（ミリ秒）
	 */
	autoPlayInterval?: number;
	/**
	 * 表示バリアント
	 */
	variant?: "default" | "fullwidth";
	/**
	 * ループ再生
	 */
	loop?: boolean;
	/**
	 * スピード（ミリ秒）
	 */
	speed?: number;
}

function CaseSlider({
	className,
	items,
	slidesToShow = 1,
	spaceBetween = 24,
	arrowVariant = "primary",
	autoPlay = false,
	autoPlayInterval = 5000,
	variant = "default",
	loop = true,
	speed = 600,
	ref,
	...props
}: CaseSliderProps & { ref?: React.Ref<HTMLDivElement> }) {
	const swiperRef = useRef<SwiperType | null>(null);
	const prevButtonId = `swiper-button-prev-${React.useId()}`;
	const nextButtonId = `swiper-button-next-${React.useId()}`;
	const paginationId = `swiper-pagination-${React.useId()}`;

	const arrowClasses = {
		default: "bg-white hover:bg-gray-100 text-gray-800 border border-gray-300",
		primary: "bg-primary hover:bg-primary/90 text-white",
		secondary: "bg-secondary hover:bg-secondary/90 text-gray-800",
	};

	return (
		<div
			ref={ref}
			className={cn("relative case-slider", variant === "fullwidth" ? "w-full" : "", className)}
			{...props}
		>
			<Swiper
				modules={[Navigation, Pagination, Autoplay, EffectFade]}
				spaceBetween={spaceBetween}
				slidesPerView={slidesToShow}
				loop={loop}
				speed={speed}
				navigation={{
					prevEl: `#${prevButtonId}`,
					nextEl: `#${nextButtonId}`,
				}}
				pagination={{
					el: `#${paginationId}`,
					clickable: true,
					bulletClass: "swiper-pagination-bullet",
					bulletActiveClass: "swiper-pagination-bullet-active",
				}}
				autoplay={
					autoPlay
						? {
								delay: autoPlayInterval,
								disableOnInteraction: false,
							}
						: false
				}
				breakpoints={{
					320: {
						slidesPerView: 1,
						spaceBetween: 16,
					},
					768: {
						slidesPerView: Math.min(2, slidesToShow),
						spaceBetween: 20,
					},
					1024: {
						slidesPerView: slidesToShow,
						spaceBetween: spaceBetween,
					},
				}}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				className="w-full"
			>
				{items.map((item) => {
					// contentが指定されている場合はそのまま使用
					if (item.content) {
						return (
							<SwiperSlide key={item.id} className={cn(variant === "fullwidth" ? "w-full" : "")}>
								{item.content}
							</SwiperSlide>
						);
					}

					// cardプロパティからCardを生成
					const card = item.card;
					if (!card) {
						return null;
					}

					return (
						<SwiperSlide key={item.id} className={cn(variant === "fullwidth" ? "w-full" : "")}>
							<Card
								variant={card.variant || "elevated"}
								className={cn("h-full", card.className)}
								image={card.image}
								href={card.href}
							>
								{card.badge && (
									<Badge className="mb-3" size="sm" variant="secondary">
										{card.badge}
									</Badge>
								)}
								{card.title && (
									<Heading as="h3" className="mb-3" size="sm">
										{card.title}
									</Heading>
								)}
								{card.description && <p className="text-gray-700 text-sm mb-4">{card.description}</p>}
								{card.children}
								{card.href && (
									<Button
										className="text-primary border-primary hover:bg-primary/10"
										href={card.href}
										size="sm"
										variant="outline"
									>
										{card.buttonText || "詳細を見る"}
									</Button>
								)}
							</Card>
						</SwiperSlide>
					);
				})}
			</Swiper>

			{/* ナビゲーションボタン（左右に配置） */}
			{items.length > 1 && (
				<>
					<button
						type="button"
						id={prevButtonId}
						className={cn(
							"absolute -left-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all shadow-lg hover:shadow-xl",
							arrowClasses[arrowVariant]
						)}
						aria-label="前のスライド"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							role="img"
							aria-label="左矢印"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
						</svg>
					</button>
					<button
						type="button"
						id={nextButtonId}
						className={cn(
							"absolute -right-6 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full transition-all shadow-lg hover:shadow-xl",
							arrowClasses[arrowVariant]
						)}
						aria-label="次のスライド"
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							role="img"
							aria-label="右矢印"
						>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
						</svg>
					</button>
				</>
			)}

			{/* ページインジケーター */}
			{items.length > 1 && (
				<div id={paginationId} className="swiper-pagination-custom flex justify-center gap-2 mt-4" />
			)}

			<style jsx global>{`
				.case-slider .swiper-wrapper {
					padding: 5px 0 20px;
				}

				.case-slider .swiper-pagination-bullet {
					width: 8px;
					height: 8px;
					background: #d1d5db;
					opacity: 1;
					transition: all 0.3s;
					border-radius: 9999px;
				}
				.case-slider .swiper-pagination-bullet:hover {
					background: #9ca3af;
				}
				.case-slider .swiper-pagination-bullet-active {
					background: var(--color-primary);
					width: 32px;
				}
				.case-slider .swiper-button-disabled {
					opacity: 0.5;
					cursor: not-allowed;
				}
			`}</style>
		</div>
	);
}

CaseSlider.displayName = "CaseSlider";

export { CaseSlider };
