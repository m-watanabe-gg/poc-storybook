"use client";

import Image from "next/image";
import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export interface GalleryItem {
	src: string;
	alt: string;
	title?: string;
	description?: string;
}

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * ギャラリー画像の配列
	 */
	items: GalleryItem[];
	/**
	 * カラム数
	 */
	columns?: 2 | 3 | 4;
	/**
	 * ギャップサイズ
	 */
	gap?: "sm" | "md" | "lg";
	/**
	 * ライトボックス機能を有効にするか
	 */
	enableLightbox?: boolean;
}

function Gallery({
	className,
	items,
	columns = 3,
	gap = "md",
	enableLightbox = true,
	ref,
	...props
}: GalleryProps & { ref?: React.Ref<HTMLDivElement> }) {
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

	const gapClasses = {
		sm: "gap-2",
		md: "gap-4",
		lg: "gap-6",
	};

	const columnClasses = {
		2: "grid-cols-1 md:grid-cols-2",
		3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
		4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
	};

	const handleImageClick = (index: number) => {
		if (enableLightbox) {
			setLightboxIndex(index);
		}
	};

	const handleNext = () => {
		if (lightboxIndex !== null) {
			setLightboxIndex((lightboxIndex + 1) % items.length);
		}
	};

	const handlePrev = () => {
		if (lightboxIndex !== null) {
			setLightboxIndex((lightboxIndex - 1 + items.length) % items.length);
		}
	};

	const handleClose = () => {
		setLightboxIndex(null);
	};

	return (
		<>
			<div ref={ref} className={cn("c-gallery grid", columnClasses[columns], gapClasses[gap], className)} {...props}>
				{items.map((item, index) => (
					<div
						key={index}
						className={cn(
							"c-gallery__item group relative aspect-square overflow-hidden rounded-(--border-radius) bg-gray-200",
							enableLightbox && "cursor-pointer"
						)}
						onClick={() => handleImageClick(index)}
					>
						<Image
							src={item.src}
							alt={item.alt}
							fill
							className="object-cover"
							sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
						/>
						{(item.title || item.description) && (
							<div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
								{item.title && <h3 className="text-white font-bold mb-1">{item.title}</h3>}
								{item.description && <p className="text-white text-sm">{item.description}</p>}
							</div>
						)}
					</div>
				))}
			</div>

			{/* ライトボックス */}
			{enableLightbox && lightboxIndex !== null && (
				<div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={handleClose}>
					<button
						onClick={handleClose}
						className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"
						aria-label="閉じる"
					>
						<svg
							className="w-8 h-8"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M6 18L18 6M6 6l12 12" />
						</svg>
					</button>

					<button
						onClick={(e) => {
							e.stopPropagation();
							handlePrev();
						}}
						className="absolute left-4 text-white hover:text-gray-300 transition-colors"
						aria-label="前へ"
					>
						<svg
							className="w-8 h-8"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M15 19l-7-7 7-7" />
						</svg>
					</button>

					<div className="w-full h-full flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
						<div className="relative w-full h-full max-w-[98vw] max-h-[92vh]">
							<Image
								src={items[lightboxIndex].src}
								alt={items[lightboxIndex].alt}
								fill
								className="object-contain"
								sizes="98vw"
								priority
							/>
						</div>
						{(items[lightboxIndex].title || items[lightboxIndex].description) && (
							<div className="absolute bottom-0 left-0 right-0 bg-black/80 text-white p-4">
								{items[lightboxIndex].title && <h3 className="font-bold mb-1">{items[lightboxIndex].title}</h3>}
								{items[lightboxIndex].description && <p className="text-sm">{items[lightboxIndex].description}</p>}
							</div>
						)}
					</div>

					<button
						onClick={(e) => {
							e.stopPropagation();
							handleNext();
						}}
						className="absolute right-4 text-white hover:text-gray-300 transition-colors"
						aria-label="次へ"
					>
						<svg
							className="w-8 h-8"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path d="M9 5l7 7-7 7" />
						</svg>
					</button>

					<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
						{lightboxIndex + 1} / {items.length}
					</div>
				</div>
			)}
		</>
	);
}

export { Gallery };
