import React from "react";
import { H1, H4 } from "../typography";

const Hero = () => {
	return (
		<div className="h-full max-w-5xl mx-auto">
			<div className="bg-background relative max-w-5xl max-sm:border-none border-l border-r border-dashed border-[bg-muted-foreground] mx-auto h-[calc(100vh-65px)]">
				{/* <iframe
					src="https://unicorn.studio/embed/Sl0YBjErcxtoqxqQb20g"
					loading="lazy"
					className="w-full h-[80%]"
				/> */}

				<H1 className=" z-10 w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-20 text-balance text-foreground">
					STAV FERNANDES
				</H1>
				<H4 className="z-10 w-full text-center absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-40 text-balance text-foreground">
					AI Engineer
				</H4>
			</div>
		</div>
	);
};

export default Hero;
