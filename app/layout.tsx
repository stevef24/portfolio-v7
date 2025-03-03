import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import localFont from "next/font/local";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";

const DM_Sans = localFont({
	src: "../public/fonts/DMSerifDisplay-Regular.ttf",
});

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-poppins",
	display: "swap",
});

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
