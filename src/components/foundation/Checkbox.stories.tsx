import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
	title: "Foundation/Checkbox",
	component: Checkbox,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
	args: {
		label: "同意する",
	},
};

export const WithDescription: Story = {
	args: {
		label: "利用規約に同意する",
		description: "サービスを利用するには利用規約への同意が必要です。",
	},
};

export const Checked: Story = {
	args: {
		label: "チェック済み",
		defaultChecked: true,
	},
};

export const Disabled: Story = {
	args: {
		label: "無効化されたチェックボックス",
		disabled: true,
	},
};

export const DisabledChecked: Story = {
	args: {
		label: "無効化されたチェック済み",
		disabled: true,
		defaultChecked: true,
	},
};

export const WithError: Story = {
	args: {
		label: "利用規約に同意する",
		error: "利用規約への同意が必要です",
		required: true,
	},
};

export const Multiple: Story = {
	render: () => (
		<div className="space-y-4">
			<div className="font-medium mb-2">興味のある分野を選択してください</div>
			<Checkbox label="Web開発" />
			<Checkbox label="モバイルアプリ開発" />
			<Checkbox label="UI/UXデザイン" />
			<Checkbox label="データサイエンス" />
			<Checkbox label="機械学習/AI" />
		</div>
	),
};

export const InForm: Story = {
	render: () => (
		<form className="space-y-4 max-w-md">
			<Checkbox label="メールマガジンを購読する" description="最新情報やお得なキャンペーン情報をお届けします。" />
			<Checkbox label="利用規約に同意する" description="サービスを利用するには利用規約への同意が必要です。" required />
			<Checkbox
				label="プライバシーポリシーに同意する"
				description="個人情報の取り扱いについて確認してください。"
				required
			/>
			<button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:opacity-75">
				送信
			</button>
		</form>
	),
};
