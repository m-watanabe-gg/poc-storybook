import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Button } from "../foundation/Button";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
	title: "Components/Modal",
	component: Modal,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Modal>;

const DefaultExample = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setIsOpen(true)}>モーダルを開く</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="モーダルタイトル">
				<p>これはモーダルのコンテンツです。</p>
				<p className="mt-4">Escキーまたはオーバーレイクリックで閉じることができます。</p>
			</Modal>
		</>
	);
};

export const Default: Story = {
	render: () => <DefaultExample />,
};

const SmallExample = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setIsOpen(true)}>小さいモーダル</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="小さいモーダル" size="sm">
				<p>これは小さいサイズのモーダルです。</p>
			</Modal>
		</>
	);
};

export const Small: Story = {
	render: () => <SmallExample />,
};

const LargeExample = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setIsOpen(true)}>大きいモーダル</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="大きいモーダル" size="lg">
				<div className="space-y-4">
					<p>これは大きいサイズのモーダルです。</p>
					<p>より多くのコンテンツを表示できます。</p>
					<ul className="list-disc list-inside">
						<li>リスト項目1</li>
						<li>リスト項目2</li>
						<li>リスト項目3</li>
					</ul>
				</div>
			</Modal>
		</>
	);
};

export const Large: Story = {
	render: () => <LargeExample />,
};

const WithFormExample = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setIsOpen(true)}>フォームモーダル</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="お問い合わせフォーム" size="md">
				<form className="space-y-4">
					<div>
						<label htmlFor="name" className="block text-sm font-medium mb-1">
							お名前
						</label>
						<input
							type="text"
							id="name"
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium mb-1">
							メールアドレス
						</label>
						<input
							type="email"
							id="email"
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>
					<div>
						<label htmlFor="message" className="block text-sm font-medium mb-1">
							メッセージ
						</label>
						<textarea
							id="message"
							rows={4}
							className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
						/>
					</div>
					<div className="flex gap-2 justify-end">
						<Button variant="outline" onClick={() => setIsOpen(false)}>
							キャンセル
						</Button>
						<Button type="submit">送信</Button>
					</div>
				</form>
			</Modal>
		</>
	);
};

export const WithForm: Story = {
	render: () => <WithFormExample />,
};

const NoOverlayCloseExample = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button onClick={() => setIsOpen(true)}>オーバーレイクリック無効</Button>
			<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="確認" closeOnOverlayClick={false}>
				<p className="mb-4">オーバーレイをクリックしても閉じません。</p>
				<Button onClick={() => setIsOpen(false)}>閉じる</Button>
			</Modal>
		</>
	);
};

export const NoOverlayClose: Story = {
	render: () => <NoOverlayCloseExample />,
};
