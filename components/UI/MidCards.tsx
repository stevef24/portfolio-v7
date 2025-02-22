import Link from "next/link";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AuthorDisplay } from "@/components/AuthorsDisplay";

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
			<Card className="border border-dashed rounded-none  transition-all hover:bg-fd-muted-foreground/5 duration-300">
				<CardHeader>
					<CardTitle>{title}</CardTitle>
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
