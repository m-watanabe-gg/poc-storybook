"use client";

import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "../foundation/Badge";
import { Button } from "../foundation/Button";
import { Heading } from "../foundation/Heading";

export interface CaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * 企業名
	 */
	company: string;
	/**
	 * 業種（複数可）
	 */
	industries: string[];
	/**
	 * 導入製品（複数可）
	 */
	products: string[];
	/**
	 * 課題（複数可）
	 */
	challenges: string[];
	/**
	 * 事例の概要
	 */
	summary: string;
	/**
	 * 企業ロゴ/写真
	 */
	image: string;
	/**
	 * 詳細ページへのリンク
	 */
	href: string;
	/**
	 * バリエーション
	 * @default "default"
	 */
	variant?: "default" | "compact";
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLDivElement>;
}

function CaseCard({
	className,
	company,
	industries,
	products,
	challenges,
	summary,
	image,
	href,
	variant = "default",
	ref,
	...props
}: CaseCardProps) {
	return (
		<div
			ref={ref}
			className={cn(
				"bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden",
				"group",
				className
			)}
			{...props}
		>
			{/* 画像 */}
			<Link href={href} className="block">
				<div className="aspect-video relative overflow-hidden bg-gray-200">
					<Image src={image} alt={company} fill className="object-cover" />
				</div>
			</Link>

			{/* コンテンツ */}
			<div className={cn("p-6", variant === "compact" && "p-4")}>
				{/* 業種バッジ */}
				{industries.length > 0 && (
					<div className="flex flex-wrap gap-2 mb-4">
						{industries.map((industry) => (
							<Badge key={industry} variant="secondary" size="sm">
								{industry}
							</Badge>
						))}
					</div>
				)}

				{/* 企業名 */}
				<Link href={href}>
					<Heading
						as="h3"
						size={variant === "compact" ? "xs" : "sm"}
						className="mb-3 group-hover:text-primary transition-colors"
					>
						{company}
					</Heading>
				</Link>

				{/* 概要 */}
				<p className="text-gray-600 mb-5 line-clamp-2 text-sm leading-relaxed">{summary}</p>

				{/* 製品・課題タグ */}
				{variant === "default" && (
					<div className="space-y-3 mb-5">
						{products.length > 0 && (
							<div>
								<p className="text-xs text-gray-500 mb-2 font-medium">導入製品</p>
								<div className="flex flex-wrap gap-2">
									{products.map((product) => (
										<Badge key={product} variant="default" size="sm">
											{product}
										</Badge>
									))}
								</div>
							</div>
						)}
						{challenges.length > 0 && (
							<div>
								<p className="text-xs text-gray-500 mb-2 font-medium">解決した課題</p>
								<div className="flex flex-wrap gap-2">
									{challenges.map((challenge) => (
										<Badge key={challenge} variant="success" size="sm">
											{challenge}
										</Badge>
									))}
								</div>
							</div>
						)}
					</div>
				)}

				{/* 詳細リンク */}
				<Button href={href} variant="outline" size="sm" className="text-primary hover:bg-primary/10 w-full">
					詳細を見る
				</Button>
			</div>
		</div>
	);
}

export { CaseCard };
