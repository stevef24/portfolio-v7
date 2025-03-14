import type { ReactNode } from "react";
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/app/layout.config";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<HomeLayout style={{ borderRadius: 0 }} {...baseOptions}>
			{children}
		</HomeLayout>
	);
}
