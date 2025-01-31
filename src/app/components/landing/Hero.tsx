import React from "react";
import { H1, H4 } from "../typography";

const Hero = () => {
	return (
		<div className="h-full">
			<div className="relative max-w-5xl max-sm:border-none border-l border-r border-dashed border-[var(--color-border)] mx-auto h-[calc(100vh-65px)]">
				<iframe
					src="https://unicorn.studio/embed/Sl0YBjErcxtoqxqQb20g"
					loading="lazy"
					className="w-full h-[80%] "
				/>

				<H1 className=" z-10 w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text text-transparent dark:from-[var(--text-color)] dark:to-[var(--text-color)]/40">
					STAV FERNANDES
				</H1>
				<H4 className="z-10 w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-40 text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text text-transparent dark:from-[var(--text-color)] dark:to-[var(--text-color)]/40">
					AI Engineer
				</H4>
			</div>
		</div>
	);
};

export default Hero;
