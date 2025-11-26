import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
	title: "Status/Alert",
	component: Alert,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["info", "success", "warning", "danger"],
			description: "アラートのバリエーション",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
	args: {
		variant: "info",
		title: "情報",
		children: "これは情報を伝えるアラートです。",
	},
};

export const Success: Story = {
	args: {
		variant: "success",
		title: "成功",
		children: "操作が正常に完了しました。",
	},
};

export const Warning: Story = {
	args: {
		variant: "warning",
		title: "警告",
		children: "この操作には注意が必要です。",
	},
};

export const Danger: Story = {
	args: {
		variant: "danger",
		title: "エラー",
		children: "エラーが発生しました。もう一度お試しください。",
	},
};

export const NoTitle: Story = {
	args: {
		variant: "info",
		children: "タイトルなしのアラートメッセージです。",
	},
};

const DismissibleExample = () => {
	const [isVisible, setIsVisible] = useState(true);

	if (!isVisible) {
		return (
			<button onClick={() => setIsVisible(true)} className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300">
				アラートを再表示
			</button>
		);
	}

	return (
		<Alert variant="info" title="閉じることができます" dismissible onClose={() => setIsVisible(false)}>
			このアラートは×ボタンで閉じることができます。
		</Alert>
	);
};

export const Dismissible: Story = {
	render: () => <DismissibleExample />,
};

export const LongContent: Story = {
	args: {
		variant: "warning",
		title: "重要なお知らせ",
		children: (
			<div>
				<p className="mb-2">これは長いコンテンツを含むアラートの例です。複数の段落やリストを含めることができます。</p>
				<ul className="list-disc list-inside">
					<li>注意事項1</li>
					<li>注意事項2</li>
					<li>注意事項3</li>
				</ul>
			</div>
		),
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="space-y-4">
			<Alert variant="info" title="情報">
				これは情報メッセージです。
			</Alert>
			<Alert variant="success" title="成功">
				処理が成功しました。
			</Alert>
			<Alert variant="warning" title="警告">
				注意が必要です。
			</Alert>
			<Alert variant="danger" title="エラー">
				エラーが発生しました。
			</Alert>
		</div>
	),
};
