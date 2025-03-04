import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { Metadata } from "next";

const DM_Sans = localFont({
	src: "../public/fonts/DMSerifDisplay-Regular.ttf",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
	display: "swap",
});

export const metadata: Metadata = {
	viewport: "width=device-width, initial-scale=1, maximum-scale=1",
	appleWebApp: {
		capable: true,
		statusBarStyle: "black-translucent",
	},
	other: {
		"apple-mobile-web-app-capable": "yes",
	},
};

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<html
			lang="en"
			className={`${DM_Sans.className} ${poppins.variable}`}
			suppressHydrationWarning
		>
			<body className="min-h-screen bg-black font-sans">
				<RootProvider search={{ enabled: false }}>{children}</RootProvider>
			</body>
		</html>
	);
}
