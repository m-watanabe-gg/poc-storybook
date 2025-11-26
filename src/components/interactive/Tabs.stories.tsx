import type { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./Tabs";

const meta: Meta<typeof Tabs> = {
	title: "Components/Tabs",
	component: Tabs,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "pills", "underline"],
			description: "タブのスタイルバリエーション",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
	args: {
		items: [
			{
				label: "タブ1",
				content: <div className="p-4">タブ1のコンテンツです。</div>,
			},
			{
				label: "タブ2",
				content: <div className="p-4">タブ2のコンテンツです。</div>,
			},
			{
				label: "タブ3",
				content: <div className="p-4">タブ3のコンテンツです。</div>,
			},
		],
	},
};

export const Pills: Story = {
	args: {
		variant: "pills",
		items: [
			{
				label: "概要",
				content: (
					<div className="p-4">
						<h3 className="text-xl font-bold mb-4">概要</h3>
						<p>ピルススタイルのタブです。ボタンのような見た目になります。</p>
					</div>
				),
			},
			{
				label: "詳細",
				content: (
					<div className="p-4">
						<h3 className="text-xl font-bold mb-4">詳細</h3>
						<p>詳細情報をここに表示します。</p>
					</div>
				),
			},
			{
				label: "設定",
				content: (
					<div className="p-4">
						<h3 className="text-xl font-bold mb-4">設定</h3>
						<p>各種設定項目を表示します。</p>
					</div>
				),
			},
		],
	},
};

export const Underline: Story = {
	args: {
		variant: "underline",
		items: [
			{
				label: "ホーム",
				content: <div className="p-4">ホームタブのコンテンツ</div>,
			},
			{
				label: "プロフィール",
				content: <div className="p-4">プロフィールタブのコンテンツ</div>,
			},
			{
				label: "メッセージ",
				content: <div className="p-4">メッセージタブのコンテンツ</div>,
			},
			{
				label: "設定",
				content: <div className="p-4">設定タブのコンテンツ</div>,
				disabled: true,
			},
		],
	},
};

export const WithRichContent: Story = {
	args: {
		items: [
			{
				label: "紹介",
				content: (
					<div className="p-4 space-y-4">
						<h3 className="text-2xl font-bold">製品紹介</h3>
						<p>これは製品の紹介です。タブ内に複雑なコンテンツを配置することができます。</p>
						<ul className="list-disc list-inside">
							<li>機能1</li>
							<li>機能2</li>
							<li>機能3</li>
						</ul>
					</div>
				),
			},
			{
				label: "仕様",
				content: (
					<div className="p-4">
						<h3 className="text-2xl font-bold mb-4">技術仕様</h3>
						<table className="w-full border">
							<tbody>
								<tr>
									<th className="border p-2 bg-gray-100">項目</th>
									<td className="border p-2">値</td>
								</tr>
								<tr>
									<th className="border p-2 bg-gray-100">サイズ</th>
									<td className="border p-2">100x100x50mm</td>
								</tr>
								<tr>
									<th className="border p-2 bg-gray-100">重量</th>
									<td className="border p-2">500g</td>
								</tr>
							</tbody>
						</table>
					</div>
				),
			},
			{
				label: "レビュー",
				content: (
					<div className="p-4 space-y-4">
						<h3 className="text-2xl font-bold">カスタマーレビュー</h3>
						<div className="border-l-4 border-primary pl-4">
							<p className="mb-2">
								<strong>田中太郎</strong> - ⭐⭐⭐⭐⭐
							</p>
							<p>とても良い製品です！</p>
						</div>
					</div>
				),
			},
		],
	},
};
