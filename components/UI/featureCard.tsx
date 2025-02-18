import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { H3, P } from "../typography";
import AuthorDisplay from "./AuthorDisplay";

interface FeatureCardProps {
	tag?: string;
	title: string;
	description: string;
	author: {
		name: string;
		image: string;
	};
	className?: string;
	href?: string;
}

const FeatureCard = ({
	tag = "Featured Post",
	title,
	description,
	author,
	className,
	href = "#",
}: FeatureCardProps) => {
	return (
		<Link
			href={href}
			className={cn(
				"group flex flex-col justify-between min-h-[400px] bg-black p-5",
				"border border-[bg-muted-foreground] ",
				className
			)}
		>
			{tag && (
				<span className="text-orange-500 text-sm font-medium uppercase tracking-wider">
					{tag}
				</span>
			)}

			<div className="space-y-4">
				<H3 className="text-white group-hover:text-zinc-300 transition-colors">
					{title}
				</H3>
				<P className="text-muted-foreground">{description}</P>

				<AuthorDisplay author={author} className="pt-4" />
			</div>
		</Link>
	);
};

export default FeatureCard;
