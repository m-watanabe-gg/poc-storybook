import Link from "next/link";
import type React from "react";
import { cn } from "@/lib/utils";

export interface DocumentCardProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * ドキュメントタイトル
	 */
	title: string;
	/**
	 * ファイルタイプ
	 */
	fileType: "pdf" | "excel" | "word" | "pptx" | "zip" | "other";
	/**
	 * ファイルサイズ
	 */
	fileSize?: string;
	/**
	 * ダウンロードURL
	 */
	href: string;
	/**
	 * 説明文
	 */
	description?: string;
	/**
	 * 公開日
	 */
	date?: string;
	/**
	 * アイコン表示
	 */
	showIcon?: boolean;
}

const fileTypeConfig = {
	pdf: {
		label: "PDF",
		icon: "📄",
		color: "bg-[#FF0000] text-white",
		borderColor: "border-[#FF0000]",
	},
	excel: {
		label: "Excel",
		icon: "📊",
		color: "bg-[#217346] text-white",
		borderColor: "border-[#217346]",
	},
	word: {
		label: "Word",
		icon: "📝",
		color: "bg-[#2B579A] text-white",
		borderColor: "border-[#2B579A]",
	},
	pptx: {
		label: "PowerPoint",
		icon: "📽️",
		color: "bg-[#D24726] text-white",
		borderColor: "border-[#D24726]",
	},
	zip: {
		label: "ZIP",
		icon: "🗜️",
		color: "bg-gray-600 text-white",
		borderColor: "border-gray-600",
	},
	other: {
		label: "File",
		icon: "📎",
		color: "bg-gray-500 text-white",
		borderColor: "border-gray-500",
	},
};

function DocumentCard({
	className,
	title,
	fileType,
	fileSize,
	href,
	description,
	date,
	showIcon = true,
	ref,
	...props
}: DocumentCardProps & { ref?: React.Ref<HTMLDivElement> }) {
	const config = fileTypeConfig[fileType];

	return (
		<div
			ref={ref}
			className={cn(
				"c-document-card group relative bg-white border border-(--color-border) rounded-(--border-radius) overflow-hidden transition-all hover:shadow-md",
				config.borderColor,
				"hover:border-2",
				className
			)}
			{...props}
		>
			<Link href={href} className="block p-4 md:p-6">
				<div className="flex items-start gap-4">
					{/* ファイルアイコン */}
					{showIcon && (
						<div
							className={cn(
								"flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded flex items-center justify-center text-2xl",
								config.color
							)}
						>
							{config.icon}
						</div>
					)}

					{/* コンテンツ */}
					<div className="flex-1 min-w-0">
						<h3 className="font-bold text-base md:text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
							{title}
						</h3>

						{description && <p className="text-sm text-gray-600 mb-2 line-clamp-2">{description}</p>}

						<div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-gray-500">
							<span className={cn("font-medium px-2 py-0.5 rounded", config.color)}>{config.label}</span>
							{fileSize && <span>サイズ: {fileSize}</span>}
							{date && <span>{date}</span>}
						</div>
					</div>

					{/* ダウンロードアイコン */}
					<div className="flex-shrink-0">
						<svg
							className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors"
							fill="none"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							viewBox="0 0 24 24"
							stroke="currentColor"
							role="img"
							aria-label="ダウンロード"
						>
							<path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
						</svg>
					</div>
				</div>
			</Link>
		</div>
	);
}

export { DocumentCard };
