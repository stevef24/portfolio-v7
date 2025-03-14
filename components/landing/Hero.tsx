import React from "react";
import { H1, H4 } from "../typography";
import Orb from "../ui/Orb";

const Hero = () => {
	return (
		<div className="h-full max-w-5xl mx-auto">
			<div className="relative max-w-5xl max-sm:border-none border-l border-r border-dashed border-[bg-muted-foreground] mx-auto h-[calc(100vh-65px)]">
				<div className="relative w-full h-full">
					<Orb
						hoverIntensity={1}
						rotateOnHover={true}
						forceHoverState={false}
					/>
					<H1 className="absolute z-10 w-full text-center -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-balance text-foreground">
						STAV FERNANDES
					</H1>
					<H4 className="absolute z-10 w-full text-center -translate-x-1/2 sm:translate-y-12 translate-y-8 top-1/2 left-1/2 font-thin">
						<span className="primary-gradient">Software Engineer</span>
					</H4>
				</div>
			</div>
		</div>
	);
};

export default Hero;
