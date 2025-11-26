import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactForm } from "@/components/form/ContactForm";
import { Heading } from "@/components/foundation/Heading";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { generatePageMetadata } from "@/lib/metadata";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "contact" });

	return generatePageMetadata({
		title: String(t("title")),
		description: String(t("description")),
		path: "/contact/",
		locale: locale as "ja" | "en",
	});
}

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "contact" });

	return (
		<>
			{/* ページヘッダー */}
			<Section variant="gray" spacing="lg">
				<Container>
					<Heading as="h1" size="xlg">
						{t("title")}
					</Heading>
					<p className="mt-4 text-lg text-gray-600">{t("description")}</p>
				</Container>
			</Section>

			{/* フォームセクション */}
			<section className="py-16">
				<Container>
					<ContactForm
						labels={{
							name: String(t("form.name")),
							email: String(t("form.email")),
							subject: String(t("form.subject")),
							message: String(t("form.message")),
							submit: String(t("form.submit")),
							success: String(t("form.success")),
							error: String(t("form.error")),
						}}
					/>
				</Container>
			</section>

			{/* 連絡先情報 */}
			<Section variant="gray" spacing="lg">
				<Container>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						<div className="text-center">
							<div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
								<svg
									className="w-6 h-6 text-primary"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									role="img"
									aria-label="電話"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
							</div>
							<Heading as="h3" size="sm" className="mb-2">
								{t("info.phone.title")}
							</Heading>
							<p className="text-gray-600">{t("info.phone.value")}</p>
						</div>

						<div className="text-center">
							<div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
								<svg
									className="w-6 h-6 text-primary"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									role="img"
									aria-label="メール"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
							</div>
							<Heading as="h3" size="sm" className="mb-2">
								{t("info.email.title")}
							</Heading>
							<p className="text-gray-600">{t("info.email.value")}</p>
						</div>

						<div className="text-center">
							<div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
								<svg
									className="w-6 h-6 text-primary"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									role="img"
									aria-label="住所"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
							</div>
							<Heading as="h3" size="sm" className="mb-2">
								{t("info.address.title")}
							</Heading>
							<p className="text-gray-600 whitespace-pre-line">{t("info.address.value")}</p>
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
