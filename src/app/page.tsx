import React from "react";
import { H1 } from "./components/typography";

const Home = () => {
	return (
		<>
			<div className="grid grid-cols-12 border-[var(--color-gray-50)]">
				<div className="col-span-1" />
				<div className="col-span-10 text-center p-2 py-6 ">
					<H1>Home</H1>
				</div>
				<div className="col-span-1" />
			</div>
		</>
	);
};

export default Home;
