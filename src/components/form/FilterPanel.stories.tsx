import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FilterPanel } from "./FilterPanel";

const meta: Meta<typeof FilterPanel> = {
	title: "Components/FilterPanel",
	component: FilterPanel,
	parameters: {
		docs: {
			description: {
				component:
					"チェックボックスフィルターと検索ボックスを統合したパネルコンポーネント。複数カテゴリーのフィルタリングに対応します。",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		categories: {
			control: { type: "object" },
		},
		searchPlaceholder: {
			control: { type: "text" },
		},
	},
};

export default meta;
type Story = StoryObj<typeof FilterPanel>;

// サンプルカテゴリーデータ
const sampleCategories = [
	{
		id: "industry",
		label: "業種",
		options: [
			{ value: "broadcasting", label: "放送・映像" },
			{ value: "manufacturing", label: "製造業" },
			{ value: "service", label: "サービス業" },
			{ value: "retail", label: "小売" },
			{ value: "it", label: "IT" },
		],
	},
	{
		id: "product",
		label: "導入製品",
		options: [
			{ value: "system-a", label: "システムA" },
			{ value: "system-b", label: "システムB" },
			{ value: "system-c", label: "システムC" },
		],
	},
	{
		id: "challenge",
		label: "課題",
		options: [
			{ value: "cost-reduction", label: "コスト削減" },
			{ value: "efficiency", label: "業務効率化" },
			{ value: "quality", label: "品質向上" },
		],
	},
];

/**
 * デフォルトのフィルターパネル
 */
export const Default: Story = {
	args: {
		categories: sampleCategories,
		searchPlaceholder: "キーワードで検索",
	},
};

/**
 * 初期フィルター設定あり
 */
export const WithInitialFilters: Story = {
	args: {
		categories: sampleCategories,
		initialFilters: {
			industry: ["broadcasting", "manufacturing"],
			challenge: ["cost-reduction"],
		},
		initialSearchTerm: "効率化",
	},
};

/**
 * 2カテゴリーのシンプル版
 */
export const SimpleFilters: Story = {
	args: {
		categories: [
			{
				id: "category",
				label: "カテゴリー",
				options: [
					{ value: "cat1", label: "カテゴリー1" },
					{ value: "cat2", label: "カテゴリー2" },
					{ value: "cat3", label: "カテゴリー3" },
				],
			},
			{
				id: "tag",
				label: "タグ",
				options: [
					{ value: "tag1", label: "タグ1" },
					{ value: "tag2", label: "タグ2" },
				],
			},
		],
	},
};

/**
 * インタラクティブな例（状態管理付き）
 */
export const Interactive: Story = {
	render: function InteractiveRender() {
		const [filters, setFilters] = useState<Record<string, string[]>>({});
		const [searchTerm, setSearchTerm] = useState("");
		const [resultCount, setResultCount] = useState(10);

		const handleFilterChange = (newFilters: Record<string, string[]>) => {
			setFilters(newFilters);
			// フィルター数に応じて結果数を調整（デモ用）
			const totalFilters = Object.values(newFilters).flat().length;
			setResultCount(Math.max(10 - totalFilters * 2, 0));
		};

		const handleSearchChange = (term: string) => {
			setSearchTerm(term);
			// 検索キーワードで結果数を調整（デモ用）
			if (term.length > 0) {
				setResultCount(5);
			}
		};

		const handleReset = () => {
			setFilters({});
			setSearchTerm("");
			setResultCount(10);
		};

		return (
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
				{/* フィルターパネル */}
				<div className="lg:col-span-1">
					<FilterPanel
						categories={sampleCategories}
						onFilterChange={handleFilterChange}
						onSearchChange={handleSearchChange}
						onReset={handleReset}
					/>
				</div>

				{/* 結果表示エリア */}
				<div className="lg:col-span-2">
					<div className="bg-gray-50 rounded-lg p-6">
						<h3 className="text-lg font-bold mb-4">検索結果: {resultCount}件</h3>

						{/* アクティブフィルター表示 */}
						{Object.entries(filters).map(([category, values]) =>
							values.length > 0 ? (
								<div key={category} className="mb-2">
									<span className="text-sm text-gray-600 mr-2">{category}:</span>
									{values.map((value) => (
										<span key={value} className="inline-block bg-primary text-white text-xs px-2 py-1 rounded mr-1">
											{value}
										</span>
									))}
								</div>
							) : null
						)}

						{/* 検索キーワード表示 */}
						{searchTerm && (
							<div className="mb-4">
								<span className="text-sm text-gray-600 mr-2">検索:</span>
								<span className="inline-block bg-accent text-white text-xs px-2 py-1 rounded">{searchTerm}</span>
							</div>
						)}

						{/* ダミー結果 */}
						<div className="space-y-4 mt-6">
							{Array.from({ length: resultCount }, (_, i) => (
								<div key={i} className="bg-white p-4 rounded shadow-sm">
									<div className="font-medium mb-1">結果アイテム {i + 1}</div>
									<div className="text-sm text-gray-600">サンプルの説明テキスト</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		);
	},
};

/**
 * 多数の選択肢がある場合
 */
export const ManyOptions: Story = {
	args: {
		categories: [
			{
				id: "region",
				label: "地域",
				options: Array.from({ length: 10 }, (_, i) => ({
					value: `region-${i}`,
					label: `地域${i + 1}`,
				})),
			},
			{
				id: "industry",
				label: "業種",
				options: Array.from({ length: 15 }, (_, i) => ({
					value: `industry-${i}`,
					label: `業種${i + 1}`,
				})),
			},
		],
	},
};
