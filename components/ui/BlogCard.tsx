"use client";

import UnicornScene from "@/app/helpers/Unicorn-studio";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";

import { H4, P } from "../typography";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BlogCardProps {
	title: string;
	description: string | undefined;
	author:
		| {
				name: string;
				avatar: string;
		  }
		| undefined;
	date: string | undefined;
	projectId: string;
	className?: string;
	slug: string;
}

export default function BlogCard({
	title,
	description,
	projectId,
	className,
	slug,
}: BlogCardProps) {
	return (
		<motion.div
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			className={cn("w-full cursor-pointer group", className)}
		>
			<Link href={`/blog/${slug}`} prefetch={true} rel="noopener noreferrer">
				<article className="relative w-full h-full min-h-[400px] overflow-hidden border-b border-[bg-fd-muted-foreground] border-dashed text-fd-muted-foreground">
					<UnicornScene
						height="400px"
						width="100%"
						projectId={projectId}
						className="absolute inset-0 z-10 w-full h-full object-cover"
					/>
					<div className="absolute inset-0 z-20 bg-gradient-to-b from-black via-transparent to-black" />
					<div className="absolute inset-10 z-20">
						<div className="flex items-center justify-between">
							<H4>{title}</H4>
							<div className="z-20 items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-200">
								<div className="flex items-center gap-1 hover:cursor-pointer">
									<p className="hidden md:block text-center text-md text-fd-muted-foreground">
										Read more
									</p>
									<ArrowRightIcon className="text-fd-muted-foreground w-4 h-4" />
								</div>
							</div>
						</div>
					</div>

					<div className="absolute bottom-10 left-10 z-20 w-full max-w-[80%]">
						<P className="text-fd-muted-foreground">{description}</P>
					</div>
				</article>
			</Link>
		</motion.div>
	);
}
