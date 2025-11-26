import type { Meta, StoryObj } from "@storybook/react";
import { MdArrowBack, MdArrowForward, MdDownload, MdSearch, MdSend, MdShoppingCart } from "react-icons/md";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
	title: "Foundation/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["default", "secondary", "accent", "outline"],
			description: "ボタンのカラーバリエーション",
		},
		size: {
			control: "select",
			options: ["xs", "sm", "default", "lg", "xlg"],
			description: "ボタンのサイズ",
		},
		disabled: {
			control: "boolean",
			description: "無効状態",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: "ボタンテキスト",
	},
};

export const Secondary: Story = {
	args: {
		variant: "secondary",
		children: "ボタンテキスト",
	},
};

export const Accent: Story = {
	args: {
		variant: "accent",
		children: "ボタンテキスト",
	},
};

export const Outline: Story = {
	args: {
		variant: "outline",
		children: "ボタンテキスト",
	},
};

export const ExtraSmall: Story = {
	args: {
		size: "xs",
		children: "ボタンテキスト",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		children: "ボタンテキスト",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		children: "ボタンテキスト",
	},
};

export const ExtraLarge: Story = {
	args: {
		size: "xlg",
		children: "ボタンテキスト",
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
		children: "ボタンテキスト",
	},
};

export const AsLink: Story = {
	args: {
		href: "#",
		children: "リンクボタン",
	},
};

export const WithRightIcon: Story = {
	args: {
		variant: "outline",
		animated: false,
		rightIcon: <span>→</span>,
		children: "一覧を見る",
	},
};

export const WithMaterialIconForward: Story = {
	args: {
		variant: "default",
		animated: false,
		rightIcon: <MdArrowForward />,
		children: "次へ進む",
	},
};

export const WithMaterialIconBack: Story = {
	args: {
		variant: "outline",
		animated: false,
		rightIcon: <MdArrowBack />,
		children: "戻る",
	},
};

export const WithMaterialIconDownload: Story = {
	args: {
		variant: "secondary",
		animated: false,
		rightIcon: <MdDownload />,
		children: "ダウンロード",
	},
};

export const WithMaterialIconSend: Story = {
	args: {
		variant: "accent",
		animated: false,
		rightIcon: <MdSend />,
		children: "送信",
	},
};

export const WithMaterialIconSearch: Story = {
	args: {
		variant: "outline",
		animated: false,
		rightIcon: <MdSearch />,
		children: "検索",
	},
};

export const WithMaterialIconCart: Story = {
	args: {
		variant: "default",
		animated: false,
		rightIcon: <MdShoppingCart />,
		children: "カートに追加",
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="flex flex-col gap-4">
			<div className="flex gap-2 items-center">
				<Button variant="default">Default</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="accent">Accent</Button>
				<Button variant="outline">Outline</Button>
			</div>
			<div className="flex gap-2 items-center">
				<Button size="xs">Extra Small</Button>
				<Button size="sm">Small</Button>
				<Button size="default">Default</Button>
				<Button size="lg">Large</Button>
				<Button size="xlg">Extra Large</Button>
			</div>
			<div className="flex gap-2 items-center">
				<Button variant="default" animated={false} rightIcon={<MdArrowForward />}>
					次へ
				</Button>
				<Button variant="outline" animated={false} rightIcon={<MdDownload />}>
					ダウンロード
				</Button>
				<Button variant="accent" animated={false} rightIcon={<MdSend />}>
					送信
				</Button>
			</div>
		</div>
	),
};
