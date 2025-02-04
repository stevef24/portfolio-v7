import React from "react";
import { H1, H4 } from "../typography";
import UnicornScene from "@/app/helpers/Unicorn-studio";

const Hero = () => {
	return (
		<div className=" h-full max-w-5xl mx-auto">
			<div className="bg-background relative max-w-5xl max-sm:border-none border-l border-r border-dashed border-[bg-muted-foreground] mx-auto h-[calc(100vh-65px)]">
				<UnicornScene
					projectId="d6NmYRniU96egHKFVFip"
					height={"100%"}
					width={"100%"}
					className="absolute inset-0 z-20 object-cover "
				/>
				<H1 className="absolute z-10 w-full text-center -translate-x-1/2 translate-y-20 top-1/2 left-1/2 text-balance text-foreground">
					STAV FERNANDES
				</H1>
				<H4 className="absolute z-10 w-full text-center -translate-x-1/2 translate-y-40 top-1/2 left-1/2 text-balance text-foreground">
					AI Engineer
				</H4>
			</div>
		</div>
	);
};

export default Hero;
