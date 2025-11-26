import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
	title: "Foundation/Textarea",
	component: Textarea,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
	args: {
		placeholder: "メッセージを入力してください",
	},
};

export const WithLabel: Story = {
	args: {
		label: "お問い合わせ内容",
		placeholder: "詳細をご記入ください",
	},
};

export const Required: Story = {
	args: {
		label: "詳細説明",
		placeholder: "必須項目です",
		required: true,
	},
};

export const WithError: Story = {
	args: {
		label: "コメント",
		error: "100文字以上入力してください",
		required: true,
	},
};

export const WithRows: Story = {
	args: {
		label: "長文入力",
		rows: 10,
		placeholder: "長いテキストを入力できます",
	},
};

export const Disabled: Story = {
	args: {
		label: "無効なテキストエリア",
		value: "編集できません",
		disabled: true,
	},
};

export const InForm: Story = {
	render: () => (
		<form className="space-y-4 max-w-md">
			<Textarea label="お問い合わせ内容" placeholder="ご質問やご要望をお聞かせください" required rows={6} />
			<button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:opacity-75">
				送信
			</button>
		</form>
	),
};
