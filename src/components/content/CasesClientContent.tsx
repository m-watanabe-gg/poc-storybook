"use client";

import { useMemo, useState } from "react";
import { CaseCard } from "@/components/data";
import { type FilterCategory, FilterPanel } from "@/components/form";
import { Section } from "@/components/layout/Section";
import { Pagination } from "@/components/navigation";
import type { CaseStudy } from "./types";

interface CasesClientContentProps {
	initialCases: CaseStudy[];
	industryFilters: FilterCategory;
	productFilters: FilterCategory;
	challengeFilters: FilterCategory;
}

export function CasesClientContent({
	initialCases,
	industryFilters,
	productFilters,
	challengeFilters,
}: CasesClientContentProps) {
	// フィルター状態
	const [filters, setFilters] = useState<{
		industries: string[];
		products: string[];
		challenges: string[];
		search: string;
	}>({
		industries: [],
		products: [],
		challenges: [],
		search: "",
	});

	// フィルター適用
	const filteredCases = useMemo(() => {
		return initialCases.filter((caseItem) => {
			// 業種フィルター
			if (filters.industries.length > 0) {
				if (!caseItem.industries.some((industry) => filters.industries.includes(industry))) {
					return false;
				}
			}

			// 製品フィルター
			if (filters.products.length > 0) {
				if (!caseItem.products.some((product) => filters.products.includes(product))) {
					return false;
				}
			}

			// 課題フィルター
			if (filters.challenges.length > 0) {
				if (!caseItem.challenges.some((challenge) => filters.challenges.includes(challenge))) {
					return false;
				}
			}

			// 検索フィルター（企業名と概要を検索）
			if (filters.search) {
				const searchLower = filters.search.toLowerCase();
				const companyMatch = caseItem.company.toLowerCase().includes(searchLower);
				const summaryMatch = caseItem.summary.toLowerCase().includes(searchLower);

				if (!companyMatch && !summaryMatch) {
					return false;
				}
			}

			return true;
		});
	}, [initialCases, filters]);

	// フィルター変更ハンドラー
	const handleFilterChange = (newFilters: Record<string, string[]>) => {
		setFilters({
			industries: newFilters.industries || [],
			products: newFilters.products || [],
			challenges: newFilters.challenges || [],
			search: (newFilters.search?.[0] as string) || "",
		});
	};

	// IDをラベルに変換するヘルパー関数
	const getLabelById = (id: string, category: FilterCategory): string => {
		const option = category.options.find((opt) => opt.value === id);
		return option?.label || id;
	};

	return (
		<>
			{/* フィルターパネル */}
			<Section variant="gray" spacing="sm">
				<FilterPanel
					categories={[industryFilters, productFilters, challengeFilters]}
					onFilterChange={handleFilterChange}
					showSearch
					searchPlaceholder="企業名や事例内容で検索"
				/>
			</Section>

			{/* 事例一覧 */}
			<Section variant="default" spacing="lg">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredCases.length > 0 ? (
						filteredCases.map((caseItem) => (
							<CaseCard
								key={caseItem.id}
								company={caseItem.company}
								industries={caseItem.industries.map((id) => getLabelById(id, industryFilters))}
								products={caseItem.products.map((id) => getLabelById(id, productFilters))}
								challenges={caseItem.challenges.map((id) => getLabelById(id, challengeFilters))}
								summary={caseItem.summary}
								image={caseItem.image}
								href={`/cases/${caseItem.slug}/`}
							/>
						))
					) : (
						<div className="col-span-full text-center py-12">
							<p className="text-gray-600 text-lg">該当する事例が見つかりませんでした。</p>
							<p className="text-gray-500 text-sm mt-2">フィルター条件を変更してお試しください。</p>
						</div>
					)}
				</div>

				{/* ページネーション（今後実装） */}
				{filteredCases.length > 9 && (
					<div className="mt-12">
						<Pagination currentPage={1} totalPages={Math.ceil(filteredCases.length / 9)} />
					</div>
				)}
			</Section>
		</>
	);
}
