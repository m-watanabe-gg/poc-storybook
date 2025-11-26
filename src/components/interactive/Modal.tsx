"use client";

import type React from "react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";

export interface ModalProps {
	/**
	 * モーダルの表示状態
	 */
	isOpen: boolean;
	/**
	 * モーダルを閉じる関数
	 */
	onClose: () => void;
	/**
	 * モーダルのタイトル
	 */
	title?: string;
	/**
	 * モーダルのコンテンツ
	 */
	children: React.ReactNode;
	/**
	 * モーダルのサイズ
	 */
	size?: "sm" | "md" | "lg" | "xl" | "full";
	/**
	 * オーバーレイクリックで閉じるか
	 */
	closeOnOverlayClick?: boolean;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, size = "md", closeOnOverlayClick = true }) => {
	useEffect(() => {
		if (isOpen) {
			// モーダルが開いている間はボディのスクロールを無効化
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}

		// クリーンアップ
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	useEffect(() => {
		const handleEscape = (e: KeyboardEvent) => {
			if (e.key === "Escape" && isOpen) {
				onClose();
			}
		};

		window.addEventListener("keydown", handleEscape);
		return () => window.removeEventListener("keydown", handleEscape);
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (closeOnOverlayClick && e.target === e.currentTarget) {
			onClose();
		}
	};

	const sizeClasses = {
		sm: "max-w-sm",
		md: "max-w-md",
		lg: "max-w-lg",
		xl: "max-w-xl",
		full: "max-w-full mx-4",
	};

	return createPortal(
		<div
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
			onClick={handleOverlayClick}
			role="dialog"
			aria-modal="true"
			aria-labelledby={title ? "modal-title" : undefined}
		>
			<div className={cn("bg-white rounded-lg shadow-xl w-full animate-fade-in", sizeClasses[size])}>
				{/* ヘッダー */}
				{title && (
					<div className="flex items-center justify-between px-6 py-4 border-b">
						<h2 id="modal-title" className="text-xl font-bold">
							{title}
						</h2>
						<button
							onClick={onClose}
							className="text-gray-400 hover:text-gray-600 transition-colors"
							aria-label="閉じる"
						>
							<svg
								className="w-6 h-6"
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
					</div>
				)}

				{/* ボディ */}
				<div className="px-6 py-4">{children}</div>
			</div>
		</div>,
		document.body
	);
};

export { Modal };
