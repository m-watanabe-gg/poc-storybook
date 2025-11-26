import type { Meta, StoryObj } from "@storybook/react";
import { List } from "./List";

const meta: Meta<typeof List> = {
	title: "Components/List",
	component: List,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		as: {
			control: "select",
			options: ["ul", "ol"],
			description: "リスト要素の種類",
		},
		variant: {
			control: "select",
			options: ["default", "disc", "circle", "square", "decimal", "icon", "check"],
			description: "リストのスタイルバリエーション",
		},
	},
};

export default meta;
type Story = StoryObj<typeof List>;

export const Default: Story = {
	args: {
		items: ["リスト項目1", "リスト項目2", "リスト項目3"],
	},
};

export const Disc: Story = {
	args: {
		variant: "disc",
		items: ["ディスクスタイルのリスト項目1", "ディスクスタイルのリスト項目2", "ディスクスタイルのリスト項目3"],
	},
};

export const Circle: Story = {
	args: {
		variant: "circle",
		items: ["サークルスタイルのリスト項目1", "サークルスタイルのリスト項目2", "サークルスタイルのリスト項目3"],
	},
};

export const Square: Story = {
	args: {
		variant: "square",
		items: ["スクエアスタイルのリスト項目1", "スクエアスタイルのリスト項目2", "スクエアスタイルのリスト項目3"],
	},
};

export const Decimal: Story = {
	args: {
		as: "ol",
		variant: "decimal",
		items: ["番号付きリスト項目1", "番号付きリスト項目2", "番号付きリスト項目3"],
	},
};

export const Icon: Story = {
	args: {
		variant: "icon",
		items: ["アイコン付きリスト項目1", "アイコン付きリスト項目2", "アイコン付きリスト項目3", "アイコン付きリスト項目4"],
	},
};

export const Check: Story = {
	args: {
		variant: "check",
		items: ["チェックマーク付きリスト項目1", "チェックマーク付きリスト項目2", "チェックマーク付きリスト項目3"],
	},
};

export const Nested: Story = {
	render: () => (
		<List variant="disc">
			<li>
				親リスト項目1
				<List variant="circle" className="mt-2 ml-6">
					<li>子リスト項目1</li>
					<li>子リスト項目2</li>
				</List>
			</li>
			<li>親リスト項目2</li>
			<li>親リスト項目3</li>
		</List>
	),
};

export const WithLongText: Story = {
	args: {
		variant: "icon",
		items: [
			"これは長いテキストを含むリスト項目です。テキストが複数行にわたる場合でも、適切に表示されることを確認します。",
			"もう一つの長いテキスト項目です。リスト項目が長くなっても、アイコンは先頭に配置され、テキストは適切にラップされます。",
			"短い項目",
		],
	},
};
