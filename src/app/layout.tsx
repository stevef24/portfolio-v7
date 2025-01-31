import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/landing/Navbar";

export const metadata: Metadata = {
	title: "Stav Fernandes",
	description: "Stav Fernandes - Software Engineer blog",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`font-[var(--font-outfit)] bg-black text-[var(--text-color)]  `}
			>
				<Navbar />
				{children}
			</body>
		</html>
	);
}
