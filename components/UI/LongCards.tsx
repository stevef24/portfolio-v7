import Link from "next/link";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AuthorDisplay } from "@/components/AuthorsDisplay";
import { Button } from "./button";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
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

export function LongCard({
	title,
	description,
	author,
	link,
	className,
}: LongCardProps) {
	return (
		<Link href={link} className={cn("relative group", className)}>
			<Image
				src="/public/images/image-test.webp"
				alt="Blog"
				width={1000}
				height={1000}
				className="hidden group-hover:absolute inset-0 object-cover"
			/>
			<Card className="h-full border border-dashed rounded-none group transition-all bg-black hover:bg-fd-muted-foreground/5 duration-300">
				<CardHeader>
					<CardTitle className="line-clamp-1">{title}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">{description}</p>
				</CardContent>
				<CardFooter className="flex items-center justify-between">
					<AuthorDisplay author={author} />
					<Button
						variant="link"
						className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300"
					>
						<span className="flex items-center gap-2">
							Read more
							<ArrowRightIcon className="w-4 h-4" />
						</span>
					</Button>
				</CardFooter>
			</Card>
		</Link>
	);
}
