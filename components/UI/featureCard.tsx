import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AuthorDisplay } from "@/components/AuthorsDisplay";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

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

export function FeatureCard({
	tag = "Featured Post",
	title,
	description,
	author,
	className,
	href = "#",
}: FeatureCardProps) {
	return (
		<Link href={href} className={className}>
			<Card className="h-full flex flex-col border border-dashed rounded-none">
				<CardHeader>
					{tag && (
						<Badge variant="secondary" className="mb-4">
							{tag}
						</Badge>
					)}
					<CardTitle>{title}</CardTitle>
				</CardHeader>
				<CardContent className="flex-grow">
					<p className="text-muted-foreground">{description}</p>
				</CardContent>
				<CardFooter>
					<AuthorDisplay author={author} />
				</CardFooter>
			</Card>
		</Link>
	);
}
