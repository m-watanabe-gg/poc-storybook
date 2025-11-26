"use client";

import type React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Accordion } from "../interactive/Accordion";
import { Button } from "../foundation/Button";
import { Checkbox } from "../foundation/Checkbox";
import { Input } from "../foundation/Input";

export interface FilterCategory {
	/**
	 * カテゴリーID
	 */
	id: string;
	/**
	 * カテゴリー表示名
	 */
	label: string;
	/**
	 * フィルター選択肢
	 */
	options: Array<{
		value: string;
		label: string;
	}>;
}

export interface FilterPanelProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * フィルターカテゴリー
	 */
	categories: FilterCategory[];
	/**
	 * 検索機能を表示するか
	 * @default false
	 */
	showSearch?: boolean;
	/**
	 * 検索プレースホルダー
	 * @default "キーワードで検索"
	 */
	searchPlaceholder?: string;
	/**
	 * フィルター変更時のコールバック
	 */
	onFilterChange?: (filters: Record<string, string[]>) => void;
	/**
	 * 検索変更時のコールバック
	 */
	onSearchChange?: (searchTerm: string) => void;
	/**
	 * リセット時のコールバック
	 */
	onReset?: () => void;
	/**
	 * 初期フィルター状態
	 */
	initialFilters?: Record<string, string[]>;
	/**
	 * 初期検索キーワード
	 */
	initialSearchTerm?: string;
	/**
	 * ref
	 */
	ref?: React.Ref<HTMLDivElement>;
}

function FilterPanel({
	className,
	categories,
	showSearch = false,
	searchPlaceholder = "キーワードで検索",
	onFilterChange,
	onSearchChange,
	onReset,
	initialFilters = {},
	initialSearchTerm = "",
	ref,
	...props
}: FilterPanelProps) {
	const [filters, setFilters] = useState<Record<string, string[]>>(initialFilters);
	const [searchTerm, setSearchTerm] = useState(initialSearchTerm);

	const handleCheckboxChange = (categoryName: string, value: string, checked: boolean) => {
		const categoryFilters = filters[categoryName] || [];
		const newFilters = {
			...filters,
			[categoryName]: checked ? [...categoryFilters, value] : categoryFilters.filter((v) => v !== value),
		};

		setFilters(newFilters);

		if (onFilterChange) {
			onFilterChange(newFilters);
		}
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearchTerm(value);

		// 検索キーワードをフィルターに含める
		const newFilters = {
			...filters,
			search: value ? [value] : [],
		};

		if (onSearchChange) {
			onSearchChange(value);
		}
		if (onFilterChange) {
			onFilterChange(newFilters);
		}
	};

	const handleReset = () => {
		setFilters({});
		setSearchTerm("");

		if (onReset) {
			onReset();
		}
		if (onFilterChange) {
			onFilterChange({ search: [] });
		}
		if (onSearchChange) {
			onSearchChange("");
		}
	};

	const hasActiveFilters = Object.values(filters).some((values) => values.length > 0) || searchTerm.length > 0;

	// アコーディオンアイテムを作成
	const accordionItems = categories.map((category) => ({
		title: category.label,
		content: (
			<div className="flex flex-wrap gap-x-3 gap-y-3">
				{category.options.map((option) => {
					const isChecked = (filters[category.id] || []).includes(option.value);
					return (
						<div key={option.value} className="py-2">
							<Checkbox
								label={option.label}
								checked={isChecked}
								onChange={(e) => handleCheckboxChange(category.id, option.value, e.target.checked)}
							/>
						</div>
					);
				})}
			</div>
		),
		defaultOpen: false,
	}));

	return (
		<div ref={ref} className={cn("bg-white rounded-lg shadow-md p-6", className)} {...props}>
			{/* 検索ボックス */}
			{showSearch && (
				<div className="mb-4">
					<Input
						type="text"
						placeholder={searchPlaceholder}
						value={searchTerm}
						onChange={handleSearchChange}
						className="w-full"
					/>
				</div>
			)}

			{/* フィルターカテゴリー（アコーディオン） */}
			<Accordion items={accordionItems} type="multiple" />

			{/* リセットボタン */}
			{hasActiveFilters && (
				<div className="mt-4 pt-4 border-t">
					<Button variant="outline" size="sm" onClick={handleReset} className="w-full">
						フィルターをリセット
					</Button>
				</div>
			)}
		</div>
	);
}

export { FilterPanel };
