import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../foundation/Button";
import { Tooltip } from "./Tooltip";

const meta: Meta<typeof Tooltip> = {
	title: "Components/Tooltip",
	component: Tooltip,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		position: {
			control: "select",
			options: ["top", "bottom", "left", "right"],
			description: "ツールチップの位置",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
	args: {
		content: "これはツールチップです",
		children: <Button>ホバーしてください</Button>,
	},
};

export const Top: Story = {
	args: {
		content: "上に表示されます",
		position: "top",
		children: <Button>上に表示</Button>,
	},
};

export const Bottom: Story = {
	args: {
		content: "下に表示されます",
		position: "bottom",
		children: <Button>下に表示</Button>,
	},
};

export const Left: Story = {
	args: {
		content: "左に表示されます",
		position: "left",
		children: <Button>左に表示</Button>,
	},
};

export const Right: Story = {
	args: {
		content: "右に表示されます",
		position: "right",
		children: <Button>右に表示</Button>,
	},
};

export const LongText: Story = {
	args: {
		content: "これは長いツールチップのテキストです。改行されずに表示されます。",
		children: <Button>長いテキスト</Button>,
	},
};

export const OnText: Story = {
	render: () => (
		<p className="text-center">
			このテキストには
			<Tooltip content="追加情報がここに表示されます">
				<span className="underline cursor-help text-primary">ツールチップ付きの部分</span>
			</Tooltip>
			があります。
		</p>
	),
};

export const Multiple: Story = {
	render: () => (
		<div className="flex gap-4 items-center justify-center p-16">
			<Tooltip content="情報アイコン" position="top">
				<button className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">i</button>
			</Tooltip>
			<Tooltip content="ヘルプアイコン" position="right">
				<button className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center">?</button>
			</Tooltip>
			<Tooltip content="警告アイコン" position="bottom">
				<button className="w-10 h-10 rounded-full bg-yellow-500 text-white flex items-center justify-center">!</button>
			</Tooltip>
			<Tooltip content="エラーアイコン" position="left">
				<button className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center">×</button>
			</Tooltip>
		</div>
	),
};
