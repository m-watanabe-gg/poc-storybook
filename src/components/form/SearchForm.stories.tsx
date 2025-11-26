import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { SearchForm } from "./SearchForm";

const meta: Meta<typeof SearchForm> = {
	title: "Components/SearchForm",
	component: SearchForm,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "検索フォームのサイズ",
		},
	},
};

export default meta;
type Story = StoryObj<typeof SearchForm>;

export const Default: Story = {
	args: {
		onSearch: (query) => alert(`検索: ${query}`),
	},
};

export const WithPlaceholder: Story = {
	args: {
		placeholder: "キーワードを入力してください",
		onSearch: (query) => console.log("Search:", query),
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		placeholder: "検索...",
		onSearch: (query) => console.log("Search:", query),
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		placeholder: "サイト内を検索",
		onSearch: (query) => console.log("Search:", query),
	},
};

export const WithoutIcon: Story = {
	args: {
		showIcon: false,
		placeholder: "検索キーワード",
		onSearch: (query) => console.log("Search:", query),
	},
};

export const WithDefaultValue: Story = {
	args: {
		defaultValue: "Next.js",
		onSearch: (query) => console.log("Search:", query),
	},
};

export const InHeader: Story = {
	render: () => (
		<div className="bg-gray-100 p-4">
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				<div className="text-xl font-bold">サイトロゴ</div>
				<SearchForm
					size="sm"
					placeholder="サイト内検索"
					onSearch={(query) => console.log("Search:", query)}
					className="max-w-xs"
				/>
				<nav className="flex gap-4">
					<a href="#" className="hover:text-primary">
						メニュー1
					</a>
					<a href="#" className="hover:text-primary">
						メニュー2
					</a>
				</nav>
			</div>
		</div>
	),
};

function WithResultsExample() {
	const [results, setResults] = React.useState<string[]>([]);

	const handleSearch = (query: string) => {
		// 実際のアプリケーションではAPIを呼び出す
		const mockResults = [`「${query}」の検索結果1`, `「${query}」の検索結果2`, `「${query}」の検索結果3`];
		setResults(mockResults);
	};

	return (
		<div className="max-w-2xl">
			<SearchForm onSearch={handleSearch} placeholder="記事を検索" />
			{results.length > 0 && (
				<div className="mt-4 space-y-2">
					<p className="text-sm text-gray-600">{results.length}件の結果</p>
					{results.map((result, i) => (
						<div key={i} className="p-4 border rounded hover:bg-gray-50">
							{result}
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export const WithResults: Story = {
	render: () => <WithResultsExample />,
};
