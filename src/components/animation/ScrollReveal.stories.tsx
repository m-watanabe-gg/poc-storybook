import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components/data";
import { Heading } from "@/components/foundation/Heading";
import { ScrollReveal } from "./ScrollReveal";

const meta: Meta<typeof ScrollReveal> = {
	title: "Components/ScrollReveal",
	component: ScrollReveal,
	parameters: {
		layout: "padded",
		docs: {
			description: {
				component:
					"スクロール時に要素をアニメーション表示するコンポーネント。ページを下にスクロールして効果を確認してください。",
			},
		},
	},
	tags: ["autodocs"],
	argTypes: {
		variant: {
			control: "select",
			options: ["fadeIn", "slideUp", "slideDown", "slideLeft", "slideRight", "scale", "none"],
		},
		delay: {
			control: { type: "number", min: 0, max: 2, step: 0.1 },
		},
		duration: {
			control: { type: "number", min: 0.1, max: 2, step: 0.1 },
		},
		once: {
			control: "boolean",
		},
		threshold: {
			control: { type: "number", min: 0, max: 1, step: 0.1 },
		},
	},
	decorators: [
		(Story) => (
			<div style={{ height: "200vh", paddingTop: "50vh" }}>
				<Story />
			</div>
		),
	],
};

export default meta;
type Story = StoryObj<typeof ScrollReveal>;

/**
 * フェードイン
 */
export const FadeIn: Story = {
	args: {
		variant: "fadeIn",
		duration: 0.6,
		delay: 0,
		once: true,
		threshold: 0.1,
		children: (
			<Card variant="elevated">
				<Heading as="h3" size="md" className="mb-4">
					フェードインアニメーション
				</Heading>
				<p>スクロールすると、この要素がフェードインで表示されます。</p>
			</Card>
		),
	},
};

/**
 * 下からスライドイン
 */
export const SlideUp: Story = {
	args: {
		variant: "slideUp",
		duration: 0.6,
		delay: 0,
		once: true,
		threshold: 0.1,
		children: (
			<Card variant="elevated">
				<Heading as="h3" size="md" className="mb-4">
					下からスライドインアニメーション
				</Heading>
				<p>スクロールすると、この要素が下からスライドインで表示されます。</p>
			</Card>
		),
	},
};

/**
 * 上からスライドイン
 */
export const SlideDown: Story = {
	args: {
		variant: "slideDown",
		duration: 0.6,
		delay: 0,
		once: true,
		threshold: 0.1,
		children: (
			<Card variant="elevated">
				<Heading as="h3" size="md" className="mb-4">
					上からスライドインアニメーション
				</Heading>
				<p>スクロールすると、この要素が上からスライドインで表示されます。</p>
			</Card>
		),
	},
};

/**
 * 左からスライドイン
 */
export const SlideLeft: Story = {
	args: {
		variant: "slideLeft",
		duration: 0.6,
		delay: 0,
		once: true,
		threshold: 0.1,
		children: (
			<Card variant="elevated">
				<Heading as="h3" size="md" className="mb-4">
					左からスライドインアニメーション
				</Heading>
				<p>スクロールすると、この要素が左からスライドインで表示されます。</p>
			</Card>
		),
	},
};

/**
 * 右からスライドイン
 */
export const SlideRight: Story = {
	args: {
		variant: "slideRight",
		duration: 0.6,
		delay: 0,
		once: true,
		threshold: 0.1,
		children: (
			<Card variant="elevated">
				<Heading as="h3" size="md" className="mb-4">
					右からスライドインアニメーション
				</Heading>
				<p>スクロールすると、この要素が右からスライドインで表示されます。</p>
			</Card>
		),
	},
};

/**
 * スケールアニメーション
 */
export const Scale: Story = {
	args: {
		variant: "scale",
		duration: 0.6,
		delay: 0,
		once: true,
		threshold: 0.1,
		children: (
			<Card variant="elevated">
				<Heading as="h3" size="md" className="mb-4">
					スケールアニメーション
				</Heading>
				<p>スクロールすると、この要素が拡大しながら表示されます。</p>
			</Card>
		),
	},
};

/**
 * 遅延付き
 */
export const WithDelay: Story = {
	args: {
		variant: "slideUp",
		duration: 0.6,
		delay: 0.5,
		once: true,
		threshold: 0.1,
		children: (
			<Card variant="elevated">
				<Heading as="h3" size="md" className="mb-4">
					遅延アニメーション
				</Heading>
				<p>0.5秒の遅延後にアニメーションが開始されます。</p>
			</Card>
		),
	},
};

/**
 * 繰り返し
 */
export const Repeat: Story = {
	args: {
		variant: "fadeIn",
		duration: 0.6,
		delay: 0,
		once: false,
		threshold: 0.1,
		children: (
			<Card variant="elevated">
				<Heading as="h3" size="md" className="mb-4">
					繰り返しアニメーション
				</Heading>
				<p>画面に入るたびにアニメーションが実行されます。上下にスクロールして確認してください。</p>
			</Card>
		),
	},
};

/**
 * 複数要素の連続アニメーション
 */
export const Multiple: Story = {
	render: () => (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8" style={{ marginTop: "50vh" }}>
			<ScrollReveal variant="slideUp" delay={0}>
				<Card variant="elevated">
					<Heading as="h3" size="md" className="mb-4">
						要素1
					</Heading>
					<p>最初に表示されます</p>
				</Card>
			</ScrollReveal>
			<ScrollReveal variant="slideUp" delay={0.2}>
				<Card variant="elevated">
					<Heading as="h3" size="md" className="mb-4">
						要素2
					</Heading>
					<p>0.2秒後に表示されます</p>
				</Card>
			</ScrollReveal>
			<ScrollReveal variant="slideUp" delay={0.4}>
				<Card variant="elevated">
					<Heading as="h3" size="md" className="mb-4">
						要素3
					</Heading>
					<p>0.4秒後に表示されます</p>
				</Card>
			</ScrollReveal>
			<ScrollReveal variant="slideUp" delay={0.6}>
				<Card variant="elevated">
					<Heading as="h3" size="md" className="mb-4">
						要素4
					</Heading>
					<p>0.6秒後に表示されます</p>
				</Card>
			</ScrollReveal>
		</div>
	),
};
