import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../foundation/Button";
import { Dropdown } from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
	title: "Components/Dropdown",
	component: Dropdown,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		position: {
			control: "select",
			options: ["left", "right"],
			description: "ドロップダウンの位置",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const basicItems = [
	{ label: "プロフィール", value: "profile", onClick: () => alert("プロフィール") },
	{ label: "設定", value: "settings", onClick: () => alert("設定") },
	{ label: "ログアウト", value: "logout", onClick: () => alert("ログアウト") },
];

export const Default: Story = {
	args: {
		trigger: <Button variant="secondary">メニュー</Button>,
		items: basicItems,
	},
};

export const WithSeparator: Story = {
	args: {
		trigger: <Button variant="secondary">アクション</Button>,
		items: [
			{ label: "編集", value: "edit", onClick: () => alert("編集") },
			{ label: "複製", value: "duplicate", onClick: () => alert("複製") },
			{ label: "共有", value: "share", onClick: () => alert("共有") },
			{ label: "", value: "sep1", separator: true },
			{ label: "削除", value: "delete", onClick: () => alert("削除") },
		],
	},
};

export const WithDisabledItems: Story = {
	args: {
		trigger: <Button variant="secondary">オプション</Button>,
		items: [
			{ label: "有効なアイテム1", value: "item1", onClick: () => alert("アイテム1") },
			{ label: "無効なアイテム", value: "item2", disabled: true },
			{ label: "有効なアイテム2", value: "item3", onClick: () => alert("アイテム3") },
		],
	},
};

export const RightAligned: Story = {
	args: {
		trigger: <Button variant="secondary">右揃え</Button>,
		items: basicItems,
		position: "right",
	},
};

export const WithIcon: Story = {
	render: () => (
		<Dropdown
			trigger={
				<button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:opacity-75">
					⋮
				</button>
			}
			items={[
				{ label: "編集", value: "edit", onClick: () => alert("編集") },
				{ label: "削除", value: "delete", onClick: () => alert("削除") },
			]}
		/>
	),
};

export const UserMenu: Story = {
	render: () => (
		<Dropdown
			trigger={
				<div className="flex items-center gap-2 cursor-pointer hover:opacity-75">
					<div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">U</div>
					<span className="font-medium">ユーザー名</span>
				</div>
			}
			items={[
				{ label: "マイページ", value: "mypage", onClick: () => alert("マイページ") },
				{ label: "アカウント設定", value: "account", onClick: () => alert("アカウント設定") },
				{ label: "お気に入り", value: "favorites", onClick: () => alert("お気に入り") },
				{ label: "", value: "sep", separator: true },
				{ label: "ヘルプ", value: "help", onClick: () => alert("ヘルプ") },
				{ label: "ログアウト", value: "logout", onClick: () => alert("ログアウト") },
			]}
			position="right"
		/>
	),
};
