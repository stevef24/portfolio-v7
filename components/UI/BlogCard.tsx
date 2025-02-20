"use client";

import UnicornScene from "@/app/helpers/Unicorn-studio";
import { ArrowRightIcon } from "lucide-react";
import { motion } from "motion/react";

import Image from "next/image";
import { H2, H4, P } from "../typography";

interface BlogCardProps {
	title: string;
	description: string;
	author: {
		name: string;
		avatar: string;
	};
	date: string;
	projectId: string;
}

export default function BlogCard({
	title,
	description,
	projectId,
}: BlogCardProps) {
	return (
		<motion.div
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			className="w-full cursor-pointer group"
		>
			<article className="relative w-full h-full min-h-[400px] overflow-hidden border-b border-[bg-muted-foreground] border-b-dashed text-muted-foreground">
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
						<div className="z-20  items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
							<div className="flex items-center gap-2">
								<P className=" text-center text-sm text-fd-muted-foreground">
									Read more
								</P>
								<ArrowRightIcon className="w-4 h-4" />
							</div>
						</div>
					</div>
				</div>

				<div className="absolute bottom-10 left-10 z-20">
					<P className="text-fd-muted-foreground">{description}</P>
				</div>
			</article>
		</motion.div>
	);
}
