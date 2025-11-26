import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
	title: "Foundation/Select",
	component: Select,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Select>;

const prefectureOptions = [
	{ value: "tokyo", label: "東京都" },
	{ value: "osaka", label: "大阪府" },
	{ value: "kyoto", label: "京都府" },
	{ value: "hokkaido", label: "北海道" },
	{ value: "fukuoka", label: "福岡県" },
];

export const Default: Story = {
	args: {
		options: prefectureOptions,
		placeholder: "都道府県を選択",
	},
};

export const WithLabel: Story = {
	args: {
		label: "都道府県",
		options: prefectureOptions,
		placeholder: "選択してください",
	},
};

export const Required: Story = {
	args: {
		label: "都道府県",
		options: prefectureOptions,
		placeholder: "選択してください",
		required: true,
	},
};

export const WithError: Story = {
	args: {
		label: "都道府県",
		options: prefectureOptions,
		error: "都道府県を選択してください",
		required: true,
	},
};

export const Disabled: Story = {
	args: {
		label: "都道府県",
		options: prefectureOptions,
		disabled: true,
		value: "tokyo",
	},
};

export const WithDefaultValue: Story = {
	args: {
		label: "都道府県",
		options: prefectureOptions,
		defaultValue: "osaka",
	},
};

export const Categories: Story = {
	args: {
		label: "カテゴリ",
		options: [
			{ value: "all", label: "すべて" },
			{ value: "news", label: "ニュース" },
			{ value: "blog", label: "ブログ" },
			{ value: "event", label: "イベント" },
			{ value: "press", label: "プレスリリース" },
		],
		placeholder: "カテゴリを選択",
	},
};

export const InForm: Story = {
	render: () => (
		<form className="space-y-4 max-w-md">
			<Select label="お住まいの地域" options={prefectureOptions} placeholder="選択してください" required />
			<Select
				label="年齢"
				options={[
					{ value: "under20", label: "20歳未満" },
					{ value: "20-29", label: "20-29歳" },
					{ value: "30-39", label: "30-39歳" },
					{ value: "40-49", label: "40-49歳" },
					{ value: "50-59", label: "50-59歳" },
					{ value: "60over", label: "60歳以上" },
				]}
				placeholder="選択してください"
				required
			/>
			<button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:opacity-75">
				送信
			</button>
		</form>
	),
};
