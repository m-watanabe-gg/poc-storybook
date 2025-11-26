import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Box } from "@/components/content";
import { List } from "@/components/data";
import { Heading } from "@/components/foundation/Heading";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;

	return generatePageMetadata({
		title: locale === "ja" ? "採用情報" : "Recruitment",
		description: locale === "ja" ? "私たちと一緒に働きませんか？" : "Join our team",
		path: "/recruit/",
		locale: locale as "ja" | "en",
	});
}

export default async function RecruitPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "services" });

	return (
		<>
			<PageHeader title={String(t("title"))} subtitle={String(t("subtitle"))} />

			<Section spacing="lg" title="採用情報" subtitle="Recruit">
				<Container>
					<Heading as="h3" size="md" subtitle="" className="text-center mb-4">
						見出しレベル1
					</Heading>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
					<List variant="disc">
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
						<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
					</List>
					<Box variant="primary" className="mt-12">
						<List variant="decimal">
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
							<li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</li>
						</List>
					</Box>
				</Container>
			</Section>

			<Section spacing="lg" title="採用情報" subtitle="Recruit">
				<Container></Container>
			</Section>

			<Section as="div" spacing="lg" title="採用情報" subtitle="Recruit">
				<Container></Container>
			</Section>

			<Section spacing="lg" title="採用情報" subtitle="Recruit">
				<Container></Container>
			</Section>
		</>
	);
}
