import { H2 } from "../typography";
import TextReveal from "../ui/Text-reveal";

const About = () => {
	return (
		<section className="max-w-5xl mx-auto ">
			<div className="text-center border border-[bg-muted-foreground] border-dashed grid grid-cols-12">
				<div className="col-span-1 border-r border-[bg-muted-foreground] border-dashed" />
				<H2 className="col-span-10 p-10">About</H2>
				<div className="col-span-1 border-l border-[bg-muted-foreground] border-dashed" />
			</div>
			<div className="z-10 flex items-center justify-center border border-[bg-mu-f] border-dashed border-t-0 min-h-64 ">
				<TextReveal
					text="Hey, I’m Stav, a software engineer who loves building AI-driven experiences. I’m all about learning, experimenting, and creating things that make an impact. Whether it’s pushing boundaries in frontend or bridging AI with great design, I enjoy turning bold ideas into reality. If you’re into building and exploring what’s next, let’s connect!"
					highlightWords={["learning,", "experimenting,", "creating"]}
				/>
			</div>
		</section>
	);
};

export default About;
