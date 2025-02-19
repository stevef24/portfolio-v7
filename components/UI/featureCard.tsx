import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { H3, P } from "../typography";
import AuthorDisplay from "./AuthorDisplay";
import WaveCards from "./WaveCards";

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
				"group flex flex-col justify-between min-h-[400px] gap-y-6 p-5 hover:bg-fd-muted/50 to  transition-all duration-300",
				"border-dashed border-[bg-muted-foreground] ",
				className
			)}
		>
			{tag && (
				<span className="text-orange-500 text-sm font-medium uppercase tracking-wider">
					{tag}
				</span>
			)}

			<div className="space-y-4">
				<H3>{title}</H3>
				<p className="text-fd-muted-foreground">{description}</p>
				<AuthorDisplay author={author} className="pt-4" />
			</div>
		</Link>
	);
};

export default FeatureCard;
