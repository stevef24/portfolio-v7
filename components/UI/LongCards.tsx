"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { H5 } from "../typography";
import AuthorDisplay from "./AuthorDisplay";

interface LongCardProps {
	title: string;
	description: string;
	author: {
		name: string;
		image: string;
	};
	date: string;
	link: string;
	className?: string;
}

export default function LongCard({
	title,
	description,
	author,
	link,
	className,
}: LongCardProps) {
	return (
		<li
			className={cn(
				"border border-dashed border-[bg-muted-foreground] py-4 ",
				className
			)}
		>
			<Link
				href={link}
				className="h-full to-secondary group flex flex-col items-baseline justify-between gap-2 from-transparent px-5 py-5 transition ease-in-out hover:bg-gradient-to-l sm:py-5 md:flex-row lg:px-6"
			>
				<div className="flex flex-col gap-2 md:w-4/6">
					<H5 className="pr-5 sm:truncate">{title}</H5>
					<p className="text-fd-muted-foreground">{description}</p>
					<AuthorDisplay
						author={author}
						className="mt-3 hidden md:flex"
						imageSize={40}
					/>
				</div>

				<div className="pt-4">
					<AuthorDisplay author={author} className="md:hidden" imageSize={40} />
				</div>
			</Link>
		</li>
	);
}
