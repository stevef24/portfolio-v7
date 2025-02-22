import React from "react";
import Hero from "@/components/landing/Hero";
import Blog from "@/components/landing/Blog";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";

const Home = () => {
	return (
		<>
			<main className="bg-black">
				<Hero />
				<About />
				<Blog />
				<Contact />
			</main>
			<footer className="bg-black border-t border-dashed border-muted py-10">
				<p className="text-center text-sm text-fd-muted-foreground flex items-center justify-center gap-2">
					&copy; {new Date().getFullYear()} Stav Fernandes. All rights reserved.
				</p>
			</footer>
		</>
	);
};

export default Home;
