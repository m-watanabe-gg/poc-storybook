import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./Table";

const meta: Meta<typeof Table> = {
	title: "Components/Table",
	component: Table,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "bordered", "striped", "compact"],
			description: "テーブルのスタイルバリエーション",
		},
		responsive: {
			control: "boolean",
			description: "レスポンシブ対応（横スクロール）",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
	render: () => (
		<Table>
			<TableHead>
				<TableRow>
					<TableHeader>名前</TableHeader>
					<TableHeader>メール</TableHeader>
					<TableHeader>役割</TableHeader>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell>田中太郎</TableCell>
					<TableCell>tanaka@example.com</TableCell>
					<TableCell>管理者</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>鈴木花子</TableCell>
					<TableCell>suzuki@example.com</TableCell>
					<TableCell>編集者</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>佐藤次郎</TableCell>
					<TableCell>sato@example.com</TableCell>
					<TableCell>閲覧者</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
};

export const Bordered: Story = {
	render: () => (
		<Table variant="bordered">
			<TableHead>
				<TableRow>
					<TableHeader>項目</TableHeader>
					<TableHeader>値</TableHeader>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableHeader>製品名</TableHeader>
					<TableCell>サンプル製品</TableCell>
				</TableRow>
				<TableRow>
					<TableHeader>価格</TableHeader>
					<TableCell>¥10,000</TableCell>
				</TableRow>
				<TableRow>
					<TableHeader>在庫</TableHeader>
					<TableCell>在庫あり</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
};

export const Striped: Story = {
	render: () => (
		<Table variant="striped">
			<TableHead>
				<TableRow>
					<TableHeader>ID</TableHeader>
					<TableHeader>タイトル</TableHeader>
					<TableHeader>カテゴリ</TableHeader>
					<TableHeader>日付</TableHeader>
				</TableRow>
			</TableHead>
			<TableBody>
				{[1, 2, 3, 4, 5].map((i) => (
					<TableRow key={i}>
						<TableCell>{i}</TableCell>
						<TableCell>記事タイトル {i}</TableCell>
						<TableCell>お知らせ</TableCell>
						<TableCell>2025-10-{i.toString().padStart(2, "0")}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	),
};

export const Compact: Story = {
	render: () => (
		<Table variant="compact">
			<TableHead>
				<TableRow>
					<TableHeader>月</TableHeader>
					<TableHeader>火</TableHeader>
					<TableHeader>水</TableHeader>
					<TableHeader>木</TableHeader>
					<TableHeader>金</TableHeader>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell>○</TableCell>
					<TableCell>○</TableCell>
					<TableCell>×</TableCell>
					<TableCell>○</TableCell>
					<TableCell>○</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
};

export const Responsive: Story = {
	render: () => (
		<Table responsive variant="bordered">
			<TableHead>
				<TableRow>
					<TableHeader>ID</TableHeader>
					<TableHeader>名前</TableHeader>
					<TableHeader>メール</TableHeader>
					<TableHeader>電話番号</TableHeader>
					<TableHeader>住所</TableHeader>
					<TableHeader>登録日</TableHeader>
					<TableHeader>ステータス</TableHeader>
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow>
					<TableCell>1</TableCell>
					<TableCell>田中太郎</TableCell>
					<TableCell>tanaka@example.com</TableCell>
					<TableCell>090-1234-5678</TableCell>
					<TableCell>東京都渋谷区</TableCell>
					<TableCell>2025-01-01</TableCell>
					<TableCell>アクティブ</TableCell>
				</TableRow>
				<TableRow>
					<TableCell>2</TableCell>
					<TableCell>鈴木花子</TableCell>
					<TableCell>suzuki@example.com</TableCell>
					<TableCell>080-9876-5432</TableCell>
					<TableCell>大阪府大阪市</TableCell>
					<TableCell>2025-01-02</TableCell>
					<TableCell>アクティブ</TableCell>
				</TableRow>
			</TableBody>
		</Table>
	),
};
