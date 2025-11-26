import type { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Box } from "@/components/content";
import { Heading } from "@/components/foundation/Heading";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "privacy" });

	return generatePageMetadata({
		title: String(t("title")),
		description: String(t("subtitle")),
		path: "/privacy/",
		locale: locale as "ja" | "en",
	});
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "privacy" });

	const sections = [
		{
			title: String(t("sections.collection.title")),
			content: String(t("sections.collection.content")),
		},
		{
			title: String(t("sections.usage.title")),
			content: String(t("sections.usage.content")),
		},
		{
			title: String(t("sections.thirdParty.title")),
			content: String(t("sections.thirdParty.content")),
		},
		{
			title: String(t("sections.security.title")),
			content: String(t("sections.security.content")),
		},
		{
			title: String(t("sections.disclosure.title")),
			content: String(t("sections.disclosure.content")),
		},
		{
			title: String(t("sections.contact.title")),
			content: String(t("sections.contact.content")),
		},
	];

	return (
		<>
			<PageHeader title={String(t("title"))} subtitle={String(t("subtitle"))} />

			<section className="py-16 md:py-24">
				<Container className="max-w-4xl">
					{/* 最終更新日 */}
					<div className="text-right text-sm text-gray-600 mb-8">{String(t("lastUpdated"))}: 2025年10月22日</div>

					{/* イントロダクション */}
					<Box padding="lg" className="mb-12">
						<p className="text-base leading-relaxed">{String(t("intro"))}</p>
					</Box>

					{/* 各セクション */}
					<div className="space-y-8">
						{sections.map((section) => (
							<div key={section.title} className="border-b border-gray-200 pb-8 last:border-b-0">
								<Heading as="h2" size="sm" className="mb-4">
									{section.title}
								</Heading>
								<div className="prose prose-gray max-w-none">
									{section.content.split("\n").map((line, i) => (
										<p key={`${section.title}-${i}`} className="text-base leading-relaxed mb-2">
											{line}
										</p>
									))}
								</div>
							</div>
						))}
					</div>

					{/* お問い合わせCTA */}
					<Box variant="secondary" padding="lg" className="mt-12">
						<Heading as="h3" size="sm" className="mb-4">
							お問い合わせ
						</Heading>
						<p className="text-base leading-relaxed mb-6">
							プライバシーポリシーに関するご質問やご不明な点がございましたら、お気軽にお問い合わせください。
						</p>
						<Link
							href="/contact/"
							className="inline-block px-6 py-2 bg-primary text-white rounded-full font-medium hover:opacity-90 transition-opacity"
						>
							お問い合わせフォームへ
						</Link>
					</Box>
				</Container>
			</section>
		</>
	);
}
