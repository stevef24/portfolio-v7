"use client";

import UnicornScene from "@/app/helpers/Unicorn-studio";
import { motion } from "motion/react";

import Image from "next/image";

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
	author,
	projectId,
}: BlogCardProps) {
	return (
		<motion.div
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
			className="w-full"
		>
			<article className="relative w-full h-full min-h-[400px] overflow-hidden border-b border-[bg-muted-foreground] border-b-dashed text-muted-foreground">
				<UnicornScene
					height="400px"
					width="100%"
					projectId={projectId}
					className="absolute inset-0 z-10 w-full h-full object-cover"
				/>
				<div className="absolute inset-10 z-20">
					<div className="flex items-center justify-between">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							className="text-2xl font-bold leading-tight tracking-tight"
						>
							{title}
						</motion.h2>
					</div>
				</div>

				<div className="absolute bottom-10 left-10 z-20">
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="text-muted-foreground"
					>
						{description}
					</motion.p>
				</div>
			</article>
		</motion.div>
	);
}
