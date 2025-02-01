import { H2 } from "../typography";
import { TextReveal } from "../UI/Text-reveal";

const About = () => {
	return (
		<section className="max-w-5xl mx-auto">
			<div className="text-center border border-[var(--color-border)] border-dashed grid grid-cols-12">
				<div className="col-span-1 border-r border-[var(--color-border)] border-dashed" />
				<H2 className="col-span-10 p-10">About</H2>
				<div className="col-span-1 border-l border-[var(--color-border)] border-dashed" />
			</div>
			<div className="z-10 flex items-center justify-center border border-[var(--color-border)] border-dashed border-t-0 min-h-64">
				<TextReveal
					text="Hey, I’m Stav, a software engineer passionate about creating beautiful AI-powered experiences. I thrive on learning, growing, and collaborating with ambitious teams who push boundaries and chase bold ideas. I love bringing ideas to life through code and building things that make an impact. If you love building, experimenting, and thinking big (and different), get in touch!"
					highlightWords={["learning,", "growing,", "collaborating"]}
				/>
			</div>
		</section>
	);
};

export default About;
