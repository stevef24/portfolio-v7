import Link from "next/link";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AuthorDisplay } from "@/components/AuthorsDisplay";

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
		<Link href={link} className={className}>
			<Card className="h-full border border-dashed rounded-none">
				<CardHeader>
					<CardTitle className="line-clamp-1">{title}</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-muted-foreground">{description}</p>
				</CardContent>
				<CardFooter>
					<AuthorDisplay author={author} />
				</CardFooter>
			</Card>
		</Link>
	);
}
