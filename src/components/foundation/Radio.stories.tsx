import type { Meta, StoryObj } from "@storybook/react";
import { Radio, RadioGroup } from "./Radio";

const meta: Meta<typeof Radio> = {
	title: "Foundation/Radio",
	component: Radio,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
	args: {
		label: "オプション",
		name: "option",
	},
};

export const WithDescription: Story = {
	args: {
		label: "オプション1",
		description: "これはオプション1の説明文です。",
		name: "option",
	},
};

export const Checked: Story = {
	args: {
		label: "選択済み",
		name: "option",
		defaultChecked: true,
	},
};

export const Disabled: Story = {
	args: {
		label: "無効化されたラジオボタン",
		name: "option",
		disabled: true,
	},
};

export const SimpleGroup: Story = {
	render: () => (
		<RadioGroup label="お支払い方法" required>
			<Radio label="クレジットカード" name="payment" value="credit" defaultChecked />
			<Radio label="銀行振込" name="payment" value="bank" />
			<Radio label="コンビニ決済" name="payment" value="convenience" />
			<Radio label="代引き" name="payment" value="cod" />
		</RadioGroup>
	),
};

export const WithDescriptions: Story = {
	render: () => (
		<RadioGroup label="プランを選択" required>
			<Radio
				label="無料プラン"
				description="基本機能が利用できます。個人利用に最適です。"
				name="plan"
				value="free"
				defaultChecked
			/>
			<Radio
				label="スタンダードプラン"
				description="¥1,000/月 - すべての機能が利用できます。"
				name="plan"
				value="standard"
			/>
			<Radio
				label="プレミアムプラン"
				description="¥3,000/月 - 優先サポート付き。ビジネス利用に最適です。"
				name="plan"
				value="premium"
			/>
		</RadioGroup>
	),
};

export const WithError: Story = {
	render: () => (
		<RadioGroup label="配送方法を選択してください" error="配送方法を選択してください" required>
			<Radio label="通常配送（3-5営業日）" name="shipping" value="standard" />
			<Radio label="お急ぎ便（1-2営業日）" name="shipping" value="express" />
		</RadioGroup>
	),
};

export const InForm: Story = {
	render: () => (
		<form className="space-y-6 max-w-md">
			<RadioGroup label="性別" required>
				<Radio label="男性" name="gender" value="male" />
				<Radio label="女性" name="gender" value="female" />
				<Radio label="その他" name="gender" value="other" />
				<Radio label="回答しない" name="gender" value="na" />
			</RadioGroup>

			<RadioGroup label="年齢層">
				<Radio label="20歳未満" name="age" value="under20" />
				<Radio label="20-29歳" name="age" value="20-29" />
				<Radio label="30-39歳" name="age" value="30-39" />
				<Radio label="40-49歳" name="age" value="40-49" />
				<Radio label="50歳以上" name="age" value="50over" />
			</RadioGroup>

			<button type="submit" className="px-4 py-2 bg-primary text-white rounded hover:opacity-75">
				送信
			</button>
		</form>
	),
};
