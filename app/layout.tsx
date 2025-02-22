import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import localFont from "next/font/local";
import type { ReactNode } from "react";

const DM_Sans = localFont({
	src: "../public/fonts/DMSerifDisplay-Regular.ttf",
});

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={DM_Sans.className} suppressHydrationWarning>
			<body className="min-h-screen bg-black">
				<RootProvider search={{ enabled: false }}>{children}</RootProvider>
			</body>
		</html>
	);
}
