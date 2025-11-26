"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface DropdownItem {
	label: string;
	value: string;
	onClick?: () => void;
	disabled?: boolean;
	separator?: boolean;
}

export interface DropdownProps {
	/**
	 * トリガー要素
	 */
	trigger: React.ReactNode;
	/**
	 * ドロップダウンアイテム
	 */
	items: DropdownItem[];
	/**
	 * ドロップダウンの位置
	 */
	position?: "left" | "right";
	/**
	 * 追加のクラス名
	 */
	className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, items, position = "left", className }) => {
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const handleItemClick = (item: DropdownItem) => {
		if (!item.disabled && item.onClick) {
			item.onClick();
			setIsOpen(false);
		}
	};

	const positionClasses = {
		left: "left-0",
		right: "right-0",
	};

	return (
		<div ref={dropdownRef} className={cn("c-dropdown relative inline-block", className)}>
			<div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
				{trigger}
			</div>
			{isOpen && (
				<div
					className={cn(
						"absolute z-50 mt-2 min-w-48 bg-white rounded-(--border-radius) shadow-lg border border-(--color-border)",
						positionClasses[position]
					)}
				>
					<ul className="py-1">
						{items.map((item, index) => (
							<React.Fragment key={`${item.value}-${index}`}>
								{item.separator && <li className="my-1 border-t border-(--color-border)" />}
								<li>
									<button
										onClick={() => handleItemClick(item)}
										disabled={item.disabled}
										className={cn(
											"w-full text-left px-4 py-2 text-sm transition-colors",
											item.disabled
												? "text-gray-400 cursor-not-allowed"
												: "text-gray-700 hover:bg-gray-100 cursor-pointer"
										)}
									>
										{item.label}
									</button>
								</li>
							</React.Fragment>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export { Dropdown };
