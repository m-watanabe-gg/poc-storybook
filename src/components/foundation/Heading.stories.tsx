import type { Meta, StoryObj } from "@storybook/react";
import { Heading } from "./Heading";

const meta: Meta<typeof Heading> = {
	title: "Foundation/Heading",
	component: Heading,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
	argTypes: {
		size: {
			control: "select",
			options: ["xlg", "lg", "md", "sm", "xs", "xxs"],
			description: "見出しのサイズ",
		},
		colorVariant: {
			control: "select",
			options: ["default", "primary", "accent"],
			description: "見出しの色",
		},
		as: {
			control: "select",
			options: ["h1", "h2", "h3", "h4", "h5", "h6"],
			description: "見出しの要素タグ",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const ExtraLarge: Story = {
	args: {
		size: "xlg",
		as: "h1",
		subtitle: "TEXTLEVEL1",
		children: "見出しレベル1",
	},
};

export const Large: Story = {
	args: {
		size: "lg",
		as: "h2",
		children: "見出しレベル2",
	},
};

export const Medium: Story = {
	args: {
		size: "md",
		as: "h3",
		children: "見出しレベル3見出しレベル3見出しレベル3",
	},
};

export const Small: Story = {
	args: {
		size: "sm",
		as: "h4",
		children: "見出しレベル4見出しレベル4見出しレベル4見出しレベ",
	},
};

export const ExtraSmall: Story = {
	args: {
		size: "xs",
		as: "h5",
		children: "見出しレベル5見出しレベル5見出しレベル5見出しレベ",
	},
};

export const DoubleExtraSmall: Story = {
	args: {
		size: "xxs",
		as: "h6",
		children: "見出しレベル6見出しレベル6見出しレベル6見出しレベ",
	},
};

export const WithSubtitle: Story = {
	args: {
		size: "xlg",
		as: "h1",
		subtitle: "SUBTITLE TEXT",
		children: "メイン見出し",
	},
};

export const PrimaryColor: Story = {
	args: {
		size: "lg",
		colorVariant: "primary",
		children: "プライマリーカラーの見出し",
	},
};

export const AccentColor: Story = {
	args: {
		size: "lg",
		colorVariant: "accent",
		children: "アクセントカラーの見出し",
	},
};

export const AllSizes: Story = {
	render: () => (
		<div className="space-y-6">
			<Heading size="xlg" as="h1">
				見出しレベル1（Extra Large）
			</Heading>
			<Heading size="lg" as="h2">
				見出しレベル2（Large）
			</Heading>
			<Heading size="md" as="h3">
				見出しレベル3（Medium）
			</Heading>
			<Heading size="sm" as="h4">
				見出しレベル4（Small）
			</Heading>
			<Heading size="xs" as="h5">
				見出しレベル5（Extra Small）
			</Heading>
			<Heading size="xxs" as="h6">
				見出しレベル6（Double Extra Small）
			</Heading>
		</div>
	),
};
