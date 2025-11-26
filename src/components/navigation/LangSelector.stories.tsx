import type { Meta, StoryObj } from "@storybook/react";
import { LangSelector } from "./LangSelector";

const meta: Meta<typeof LangSelector> = {
	title: "Components/LangSelector",
	component: LangSelector,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["dropdown", "inline"],
			description: "表示スタイル",
		},
		position: {
			control: "select",
			options: ["left", "right"],
			description: "ドロップダウンの位置",
		},
	},
};

export default meta;
type Story = StoryObj<typeof LangSelector>;

const sampleLanguages = [
	{ code: "ja", label: "日本語", flag: "🇯🇵" },
	{ code: "en", label: "English", flag: "🇺🇸" },
	{ code: "zh", label: "中文", flag: "🇨🇳" },
	{ code: "ko", label: "한국어", flag: "🇰🇷" },
];

const twoLanguages = [
	{ code: "ja", label: "日本語", flag: "🇯🇵" },
	{ code: "en", label: "English", flag: "🇺🇸" },
];

export const Default: Story = {
	args: {
		languages: sampleLanguages,
		currentLang: "ja",
		onLanguageChange: (lang) => console.log("Language changed to:", lang),
	},
};

export const TwoLanguages: Story = {
	args: {
		languages: twoLanguages,
		currentLang: "ja",
		onLanguageChange: (lang) => console.log("Language changed to:", lang),
	},
};

export const InlineVariant: Story = {
	args: {
		languages: twoLanguages,
		currentLang: "en",
		variant: "inline",
		onLanguageChange: (lang) => console.log("Language changed to:", lang),
	},
};

export const InlineMultiple: Story = {
	args: {
		languages: sampleLanguages,
		currentLang: "ja",
		variant: "inline",
		onLanguageChange: (lang) => console.log("Language changed to:", lang),
	},
};

export const LeftAligned: Story = {
	args: {
		languages: sampleLanguages,
		currentLang: "en",
		position: "left",
		onLanguageChange: (lang) => console.log("Language changed to:", lang),
	},
};

export const WithoutFlags: Story = {
	args: {
		languages: [
			{ code: "ja", label: "日本語" },
			{ code: "en", label: "English" },
			{ code: "fr", label: "Français" },
			{ code: "de", label: "Deutsch" },
		],
		currentLang: "ja",
		onLanguageChange: (lang) => console.log("Language changed to:", lang),
	},
};

export const InHeader: Story = {
	render: () => (
		<div className="bg-white shadow p-4">
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				<div className="text-xl font-bold">Logo</div>
				<div className="flex items-center gap-4">
					<nav className="flex gap-4">
						<a href="#" className="hover:text-primary">
							Home
						</a>
						<a href="#" className="hover:text-primary">
							About
						</a>
						<a href="#" className="hover:text-primary">
							Contact
						</a>
					</nav>
					<LangSelector
						languages={twoLanguages}
						currentLang="ja"
						onLanguageChange={(lang) => console.log("Language:", lang)}
					/>
				</div>
			</div>
		</div>
	),
};

export const InFooter: Story = {
	render: () => (
		<div className="bg-primary text-white p-8">
			<div className="max-w-6xl mx-auto">
				<div className="flex justify-between items-center">
					<div>
						<p className="text-sm">© 2025 Company Name</p>
					</div>
					<div className="flex items-center gap-4">
						<span className="text-sm">言語:</span>
						<LangSelector
							languages={sampleLanguages}
							currentLang="ja"
							variant="inline"
							onLanguageChange={(lang) => console.log("Language:", lang)}
						/>
					</div>
				</div>
			</div>
		</div>
	),
};

export const Responsive: Story = {
	render: () => (
		<div className="space-y-8">
			<div className="bg-gray-100 p-4 rounded">
				<p className="text-sm text-gray-600 mb-2">Desktop (Dropdown)</p>
				<div className="hidden md:block">
					<LangSelector
						languages={sampleLanguages}
						currentLang="ja"
						onLanguageChange={(lang) => console.log("Language:", lang)}
					/>
				</div>
			</div>
			<div className="bg-gray-100 p-4 rounded">
				<p className="text-sm text-gray-600 mb-2">Mobile (Inline)</p>
				<div className="md:hidden">
					<LangSelector
						languages={twoLanguages}
						currentLang="ja"
						variant="inline"
						onLanguageChange={(lang) => console.log("Language:", lang)}
					/>
				</div>
			</div>
		</div>
	),
};
