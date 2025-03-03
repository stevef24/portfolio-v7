import Link from "next/link";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AuthorDisplay } from "@/components/AuthorsDisplay";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MidCardProps {
	title: string;
	description: string;
	author: {
		name: string;
		image: string;
	};
	href?: string;
	className?: string;
}

export function MidCard({
	title,
	description,
	author,
	href = "#",
	className,
}: MidCardProps) {
	return (
		<Link href={href} className={className}>
			<Card className="border border-dashed rounded-none group transition-all bg-black hover:bg-fd-muted-foreground/5 duration-300">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
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
						<span className="flex items-center gap-2 hover:cursor-pointer">
							Read more
							<ArrowRightIcon className="w-4 h-4" />
						</span>
					</Button>
				</CardFooter>
			</Card>
		</Link>
	);
}
