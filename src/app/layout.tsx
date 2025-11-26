import type { Metadata } from "next";
import { generateSiteMetadata } from "@/lib/metadata";
import "./globals.css";

export const metadata: Metadata = generateSiteMetadata("ja");

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return children;
}
