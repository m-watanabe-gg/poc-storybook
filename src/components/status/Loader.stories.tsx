import type { Meta, StoryObj } from "@storybook/react";
import { Loader } from "./Loader";

const meta: Meta<typeof Loader> = {
	title: "Status/Loader",
	component: Loader,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["spinner", "dots", "pulse"],
			description: "ローダーのバリエーション",
		},
		size: {
			control: "select",
			options: ["sm", "md", "lg"],
			description: "ローダーのサイズ",
		},
	},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Spinner: Story = {
	args: {
		variant: "spinner",
	},
};

export const Dots: Story = {
	args: {
		variant: "dots",
	},
};

export const Pulse: Story = {
	args: {
		variant: "pulse",
	},
};

export const SmallSpinner: Story = {
	args: {
		variant: "spinner",
		size: "sm",
	},
};

export const LargeSpinner: Story = {
	args: {
		variant: "spinner",
		size: "lg",
	},
};

export const WithLabel: Story = {
	args: {
		variant: "spinner",
		label: "読み込み中...",
	},
};

export const AllVariants: Story = {
	render: () => (
		<div className="space-y-8">
			<div className="flex items-center gap-8">
				<Loader variant="spinner" size="sm" label="Small" />
				<Loader variant="spinner" size="md" label="Medium" />
				<Loader variant="spinner" size="lg" label="Large" />
			</div>
			<div className="flex items-center gap-8">
				<Loader variant="dots" size="sm" />
				<Loader variant="dots" size="md" />
				<Loader variant="dots" size="lg" />
			</div>
			<div className="flex items-center gap-8">
				<Loader variant="pulse" size="sm" />
				<Loader variant="pulse" size="md" />
				<Loader variant="pulse" size="lg" />
			</div>
		</div>
	),
};

export const InButton: Story = {
	render: () => (
		<button className="px-4 py-2 bg-primary text-white rounded flex items-center gap-2">
			<Loader variant="spinner" size="sm" />
			<span>読み込み中...</span>
		</button>
	),
};
