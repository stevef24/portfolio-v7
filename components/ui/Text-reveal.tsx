"use client";

import {
	motion,
	type MotionValue,
	useScroll,
	useTransform,
} from "motion/react";
import {
	type ComponentPropsWithoutRef,
	type FC,
	type ReactNode,
	useRef,
} from "react";

import { cn } from "@/lib/utils";

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
	text: string;
	highlightWords: string[];
}

export const TextReveal: FC<TextRevealProps> = ({
	text,
	highlightWords,
	className,
}) => {
	const targetRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
	});
	const words = text.split(" ");

	return (
		<div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
			<div
				className={
					"sticky  top-0 mx-auto flex h-[50%]  text-center max-w-3xl items-center bg-transparent px-[1rem] py-[5rem] "
				}
			>
				<p
					ref={targetRef}
					className={
						"flex about flex-wrap p-5 text-2xl font-bold text-black/20 dark:text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"
					}
				>
					{words.map((word, i) => {
						const start = i / words.length;
						const end = start + 1 / words.length;
						return (
							<Word
								key={i}
								progress={scrollYProgress}
								range={[start, end]}
								isHighlighted={highlightWords.includes(word)}
							>
								{word}
							</Word>
						);
					})}
				</p>
			</div>
		</div>
	);
};

interface WordProps {
	children: ReactNode;
	progress: MotionValue<number>;
	range: [number, number];
	isHighlighted: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, isHighlighted }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className="xl:lg-3 relative mx-1 lg:mx-2.5">
			<span className={"absolute opacity-30"}>{children}</span>
			<motion.span
				style={{ opacity: opacity }}
				className={cn("dark:text-white", isHighlighted && "primary-gradient")}
			>
				{children}
			</motion.span>
		</span>
	);
};

export default TextReveal;
