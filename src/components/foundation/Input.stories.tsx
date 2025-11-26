import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
	title: "Foundation/Input",
	component: Input,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		placeholder: "テキストを入力",
	},
};

export const WithLabel: Story = {
	args: {
		label: "お名前",
		placeholder: "山田太郎",
	},
};

export const Required: Story = {
	args: {
		label: "メールアドレス",
		placeholder: "example@example.com",
		type: "email",
		required: true,
	},
};

export const WithError: Story = {
	args: {
		label: "パスワード",
		type: "password",
		error: "パスワードは8文字以上で入力してください",
		required: true,
	},
};

export const Disabled: Story = {
	args: {
		label: "無効なフィールド",
		value: "編集できません",
		disabled: true,
	},
};

export const DifferentTypes: Story = {
	render: () => (
		<div className="space-y-4 max-w-md">
			<Input type="text" label="テキスト" placeholder="テキスト入力" />
			<Input type="email" label="メール" placeholder="example@example.com" />
			<Input type="password" label="パスワード" placeholder="••••••••" />
			<Input type="number" label="数値" placeholder="123" />
			<Input type="tel" label="電話番号" placeholder="090-1234-5678" />
			<Input type="url" label="URL" placeholder="https://example.com" />
			<Input type="date" label="日付" />
			<Input type="time" label="時刻" />
		</div>
	),
};

export const FullForm: Story = {
	render: () => (
		<form className="space-y-4 max-w-md">
			<Input label="お名前" placeholder="山田太郎" required />
			<Input label="メールアドレス" type="email" placeholder="example@example.com" required />
			<Input label="電話番号" type="tel" placeholder="090-1234-5678" />
			<Input label="会社名" placeholder="株式会社サンプル" />
		</form>
	),
};
