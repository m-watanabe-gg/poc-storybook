import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Pagination } from "./Pagination";

const meta: Meta<typeof Pagination> = {
	title: "Components/Pagination",
	component: Pagination,
	parameters: {
		layout: "padded",
	},
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
	args: {
		currentPage: 1,
		totalPages: 10,
	},
};

export const MiddlePage: Story = {
	args: {
		currentPage: 5,
		totalPages: 10,
	},
};

export const LastPage: Story = {
	args: {
		currentPage: 10,
		totalPages: 10,
	},
};

export const ManyPages: Story = {
	args: {
		currentPage: 15,
		totalPages: 50,
	},
};

export const FewPages: Story = {
	args: {
		currentPage: 2,
		totalPages: 3,
	},
};

const WithCallbackExample = () => {
	const [currentPage, setCurrentPage] = useState(1);
	return (
		<div>
			<p className="mb-4">現在のページ: {currentPage}</p>
			<Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
		</div>
	);
};

export const WithCallback: Story = {
	render: () => <WithCallbackExample />,
};

export const WithLinks: Story = {
	args: {
		currentPage: 3,
		totalPages: 10,
		getPageHref: (page) => `/news?page=${page}`,
	},
};

export const CustomSiblingCount: Story = {
	args: {
		currentPage: 10,
		totalPages: 20,
		siblingCount: 2,
	},
};
