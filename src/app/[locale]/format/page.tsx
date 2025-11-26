import type { Metadata } from "next";
import { Card } from "@/components/data";
import { Button } from "@/components/foundation/Button";
import { Heading } from "@/components/foundation/Heading";
import { Accordion } from "@/components/interactive";
import { Container } from "@/components/layout/Container";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;

	return generatePageMetadata({
		title: locale === "ja" ? "フォーマットページ" : "Format Page",
		description: locale === "ja" ? "コンポーネントのフォーマットとスタイルガイド" : "Component format and style guide",
		path: "/format/",
		locale: locale as "ja" | "en",
	});
}

export default function FormatPage() {
	const accordionItems = [
		{
			title: "ボタンコンポーネント",
			content: "様々なサイズとバリエーションのボタンを提供しています。",
		},
		{
			title: "見出しコンポーネント",
			content: "h1からh6まで、セマンティックな見出しコンポーネントです。",
		},
		{
			title: "カードコンポーネント",
			content: "コンテンツを美しく表示するカードコンポーネントです。",
		},
	];

	return (
		<>
			{/* ページヘッダー */}
			<section className="bg-gray-100 py-12 md:py-20">
				<Container>
					<Heading as="h1" size="xlg" subtitle="FORMAT">
						コンポーネントフォーマット
					</Heading>
					<p className="mt-4 text-lg text-gray-600">このページでは、利用可能な全てのコンポーネントを確認できます。</p>
				</Container>
			</section>

			{/* ボタンセクション */}
			<section className="py-16">
				<Container>
					<Heading as="h2" size="lg" className="mb-8">
						ボタン
					</Heading>

					<div className="space-y-6">
						<div>
							<h3 className="text-lg font-medium mb-4">カラーバリエーション</h3>
							<div className="flex flex-wrap gap-4">
								<Button>デフォルト</Button>
								<Button variant="secondary">セカンダリー</Button>
								<Button variant="accent">アクセント</Button>
								<Button variant="outline">アウトライン</Button>
							</div>
						</div>

						<div>
							<h3 className="text-lg font-medium mb-4">サイズバリエーション</h3>
							<div className="flex flex-wrap items-center gap-4">
								<Button size="xs">Extra Small</Button>
								<Button size="sm">Small</Button>
								<Button size="default">Default</Button>
								<Button size="lg">Large</Button>
								<Button size="xlg">Extra Large</Button>
							</div>
						</div>
					</div>
				</Container>
			</section>

			{/* 見出しセクション */}
			<section className="py-16 bg-gray-50">
				<Container>
					<Heading as="h2" size="lg" className="mb-8">
						見出し
					</Heading>

					<div className="space-y-6">
						<Heading as="h1" size="xlg" subtitle="SUBTITLE">
							見出しレベル1（Extra Large）
						</Heading>
						<Heading as="h2" size="lg">
							見出しレベル2（Large）
						</Heading>
						<Heading as="h3" size="md">
							見出しレベル3（Medium）
						</Heading>
						<Heading as="h4" size="sm">
							見出しレベル4（Small）
						</Heading>
						<Heading as="h5" size="xs">
							見出しレベル5（Extra Small）
						</Heading>
						<Heading as="h6" size="xxs">
							見出しレベル6（Double Extra Small）
						</Heading>
					</div>
				</Container>
			</section>

			{/* カードセクション */}
			<section className="py-16">
				<Container>
					<Heading as="h2" size="lg" className="mb-8">
						カード
					</Heading>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<Card
							variant="elevated"
							title="カード1"
							description="これはカードコンポーネントの説明です。"
							image="https://via.placeholder.com/400x300"
						/>
						<Card
							variant="elevated"
							title="カード2"
							description="画像とテキストを組み合わせて表示できます。"
							image="https://via.placeholder.com/400x300"
						/>
						<Card
							variant="elevated"
							title="カード3"
							description="レスポンシブデザインに対応しています。"
							image="https://via.placeholder.com/400x300"
						/>
					</div>
				</Container>
			</section>

			{/* アコーディオンセクション */}
			<section className="py-16 bg-gray-50">
				<Container>
					<Heading as="h2" size="lg" className="mb-8">
						アコーディオン
					</Heading>

					<div className="max-w-3xl">
						<Accordion items={accordionItems} type="single" />
					</div>
				</Container>
			</section>

			{/* テキストと段落 */}
			<section className="py-16">
				<Container>
					<Heading as="h2" size="lg" className="mb-8">
						テキストと段落
					</Heading>

					<div className="prose max-w-none">
						<p className="text-lg mb-4">
							これは通常の段落テキストです。本文のフォントサイズは15px、行間は1.75、文字間隔は0.05emに設定されています。
						</p>
						<p className="mb-4">
							<strong>太字のテキスト</strong>や<em>斜体のテキスト</em>も使用できます。 また、
							<a href="/" className="text-[var(--color-primary)] hover:opacity-75">
								リンク
							</a>
							も適切にスタイリングされています。
						</p>
						<ul className="list-disc list-inside mb-4">
							<li>リスト項目1</li>
							<li>リスト項目2</li>
							<li>リスト項目3</li>
						</ul>
						<ol className="list-decimal list-inside mb-4">
							<li>番号付きリスト1</li>
							<li>番号付きリスト2</li>
							<li>番号付きリスト3</li>
						</ol>
					</div>
				</Container>
			</section>
		</>
	);
}
