import React from "react";
import Hero from "@/components/landing/Hero";
import Blog from "@/components/landing/Blog";
import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";

const Home = () => {
	return (
		<main className="bg-black">
			<Hero />
			<About />
			<Blog />
			<Contact />
		</main>
	);
};

export default Home;
