import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { H4, P } from "../typography";
import AuthorDisplay from "./AuthorDisplay";

interface MidCardsProps {
	title: string;
	description: string;
	author: {
		name: string;
		image: string;
	};
	href?: string;
	className?: string;
}

export default function MidCards({
	title,
	description,
	author,
	href = "#",
	className,
}: MidCardsProps) {
	return (
		<Link
			href={href}
			className={cn(
				"block min-h-[200px]  p-5  flex-col justify-end",
				"border border-dashed border-[bg-muted-foreground] transition-colors hover:bg-fd-muted/50",
				className
			)}
		>
			<div className="max-w-3xl space-y-6">
				<H4>{title}</H4>

				<p className="text-fd-muted-foreground">{description}</p>

				<AuthorDisplay author={author} className="pt-4" />
			</div>
		</Link>
	);
}
