"use client";

import { PageTransition } from "@/components/animation";

export function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
	return (
		<PageTransition variant="fade" duration={0.3}>
			{children}
		</PageTransition>
	);
}
