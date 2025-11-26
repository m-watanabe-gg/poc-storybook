import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Box } from "@/components/content";
import { Card, Table, TableBody, TableCell, TableHeader, TableRow } from "@/components/data";
import { Button } from "@/components/foundation/Button";
import { Heading } from "@/components/foundation/Heading";
import { Container } from "@/components/layout/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Section } from "@/components/layout/Section";
import { generatePageMetadata } from "@/lib/metadata";

// Galleryを動的インポート
const Gallery = dynamic(() => import("@/components/gallery/Gallery").then((mod) => mod.Gallery), {
	loading: () => <div className="w-full h-96 bg-gray-100 animate-pulse rounded-lg" />,
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "about" });

	return generatePageMetadata({
		title: String(t("title")),
		description: String(t("description")),
		path: "/about/",
		locale: locale as "ja" | "en",
	});
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "about" });

	// 会社概要データ
	const companyInfo = [
		{ label: t("overview.companyName"), value: t("overview.companyNameValue") },
		{ label: t("overview.established"), value: t("overview.establishedValue") },
		{ label: t("overview.capital"), value: t("overview.capitalValue") },
		{ label: t("overview.ceo"), value: t("overview.ceoValue") },
		{ label: t("overview.employees"), value: t("overview.employeesValue") },
		{ label: t("overview.address"), value: t("overview.addressValue") },
		{ label: t("overview.business"), value: t("overview.businessValue") },
	];

	// 沿革データ
	const historyItems = [
		{ year: "2010", event: t("history.items.2010") },
		{ year: "2012", event: t("history.items.2012") },
		{ year: "2015", event: t("history.items.2015") },
		{ year: "2018", event: t("history.items.2018") },
		{ year: "2020", event: t("history.items.2020") },
		{ year: "2022", event: t("history.items.2022") },
		{ year: "2025", event: t("history.items.2025") },
	];

	// チームメンバーデータ
	const teamMembers = [
		{
			name: t("team.members.member1.name"),
			position: t("team.members.member1.position"),
			description: t("team.members.member1.description"),
			image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
		},
		{
			name: t("team.members.member2.name"),
			position: t("team.members.member2.position"),
			description: t("team.members.member2.description"),
			image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
		},
		{
			name: t("team.members.member3.name"),
			position: t("team.members.member3.position"),
			description: t("team.members.member3.description"),
			image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
		},
		{
			name: t("team.members.member4.name"),
			position: t("team.members.member4.position"),
			description: t("team.members.member4.description"),
			image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
		},
	];

	// オフィス写真
	const officeImages = [
		{
			src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
			alt: "オフィスエントランス",
		},
		{
			src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&q=80",
			alt: "ワークスペース",
		},
		{
			src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
			alt: "ミーティングルーム",
		},
		{
			src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80",
			alt: "ラウンジエリア",
		},
	];

	return (
		<>
			<PageHeader title={String(t("title"))} subtitle={String(t("subtitle"))} />

			{/* 会社概要 */}
			<Section variant="default" spacing="lg">
				<Container>
					<Heading as="h2" size="lg" className="text-center mb-12">
						{t("overview.title")}
					</Heading>
					<div className="max-w-3xl mx-auto">
						<Table variant="bordered">
							<TableBody>
								{companyInfo.map((item) => (
									<TableRow key={item.label}>
										<TableHeader className="w-1/3 bg-gray-50">{item.label}</TableHeader>
										<TableCell>{item.value}</TableCell>
									</TableRow>
								))}
							</TableBody>
						</Table>
					</div>
				</Container>
			</Section>

			{/* 会社の沿革 */}
			<Section variant="gray" spacing="lg">
				<Container>
					<div className="text-center mb-12">
						<p className="text-sm text-primary font-semibold mb-2">{t("history.subtitle")}</p>
						<Heading as="h2" size="lg">
							{t("history.title")}
						</Heading>
					</div>
					<div className="max-w-3xl mx-auto">
						<div className="relative border-l-2 border-primary pl-8 space-y-8">
							{historyItems.map((item) => (
								<div key={item.year} className="relative">
									<div className="absolute -left-[41px] w-8 h-8 bg-primary rounded-full flex items-center justify-center">
										<div className="w-3 h-3 bg-white rounded-full" />
									</div>
									<div className="bg-white rounded-lg shadow-sm p-6">
										<div className="text-sm text-primary font-bold mb-2">{item.year}</div>
										<p className="text-gray-700">{item.event}</p>
									</div>
								</div>
							))}
						</div>
					</div>
				</Container>
			</Section>

			{/* ミッションとビジョン */}
			<Section variant="default" spacing="lg">
				<Container>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<Box variant="primary" padding="lg">
							<Heading as="h2" size="md" className="mb-4 text-white">
								{String(t("mission.title"))}
							</Heading>
							<p className="text-base leading-relaxed text-white">{String(t("mission.content"))}</p>
						</Box>

						<Box variant="accent" padding="lg">
							<Heading as="h2" size="md" className="mb-4 text-white">
								{String(t("vision.title"))}
							</Heading>
							<p className="text-base leading-relaxed text-white">{String(t("vision.content"))}</p>
						</Box>
					</div>
				</Container>
			</Section>

			{/* バリュー */}
			<Section variant="gray" spacing="lg">
				<Container>
					<Heading as="h2" size="lg" className="text-center mb-12">
						{String(t("values.title"))}
					</Heading>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<Card
							variant="elevated"
							title={String(t("values.innovation.title"))}
							description={String(t("values.innovation.description"))}
						/>
						<Card
							variant="elevated"
							title={String(t("values.quality.title"))}
							description={String(t("values.quality.description"))}
						/>
						<Card
							variant="elevated"
							title={String(t("values.partnership.title"))}
							description={String(t("values.partnership.description"))}
						/>
					</div>
				</Container>
			</Section>

			{/* チーム紹介 */}
			<Section variant="default" spacing="lg">
				<Container>
					<div className="text-center mb-12">
						<p className="text-sm text-primary font-semibold mb-2">{t("team.subtitle")}</p>
						<Heading as="h2" size="lg" className="mb-4">
							{String(t("team.title"))}
						</Heading>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">{String(t("team.description"))}</p>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{teamMembers.map((member) => (
							<div
								key={member.name}
								className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
							>
								<div className="aspect-square relative">
									<Image src={member.image} alt={member.name} fill className="object-cover" />
								</div>
								<div className="p-6">
									<Heading as="h3" size="sm" className="mb-2">
										{member.name}
									</Heading>
									<p className="text-sm text-primary font-medium mb-3">{member.position}</p>
									<p className="text-sm text-gray-600 leading-relaxed">{member.description}</p>
								</div>
							</div>
						))}
					</div>
				</Container>
			</Section>

			{/* オフィス */}
			<Section variant="gray" spacing="lg">
				<Container>
					<div className="text-center mb-12">
						<p className="text-sm text-primary font-semibold mb-2">{t("office.subtitle")}</p>
						<Heading as="h2" size="lg" className="mb-4">
							{t("office.title")}
						</Heading>
						<p className="text-lg text-gray-600 max-w-2xl mx-auto">{t("office.description")}</p>
					</div>

					<div className="mb-8">
						<Gallery items={officeImages} columns={2} gap="md" enableLightbox />
					</div>

					<div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
						<Heading as="h3" size="sm" className="mb-4">
							{t("office.access")}
						</Heading>
						<p className="text-gray-700 whitespace-pre-line">{t("office.accessDescription")}</p>
					</div>
				</Container>
			</Section>

			{/* CTAセクション */}
			<Section variant="secondary" spacing="lg">
				<Container>
					<div className="text-center max-w-2xl mx-auto">
						<Heading as="h2" size="lg" className="mb-6">
							{t("cta.title")}
						</Heading>
						<p className="text-lg mb-8 text-gray-700">{t("cta.description")}</p>
						<div className="flex flex-wrap gap-4 justify-center">
							<Button href={locale === "en" ? "/en/contact/" : "/contact/"} size="lg">
								{t("cta.contact")}
							</Button>
							<Button href={locale === "en" ? "/en/services/" : "/services/"} size="lg" variant="outline">
								{t("cta.services")}
							</Button>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
