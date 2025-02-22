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
import { Button } from "./button";
import { ArrowRightIcon } from "lucide-react";

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
			<Card className="h-full flex flex-col border border-dashed bg-black rounded-none group transition-all hover:bg-fd-muted-foreground/5 duration-300">
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
