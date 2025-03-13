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
import { cn } from "@/lib/utils";

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
		<Link href={href} className={cn("cursor-pointer relative", className)}>
			<Card className="h-full flex flex-col border border-dashed bg-black rounded-none group transition-all hover:bg-fd-muted-foreground/5 duration-300 relative overflow-hidden">
				<div
					className="absolute inset-0 z-0 opacity-40 group-hover:opacity-50 transition-opacity duration-300 bg-cover bg-center bg-no-repeat"
					style={{ backgroundImage: "url('/images/feature-design.png')" }}
				></div>
				<div className="relative z-10 h-full gap-6 flex flex-col">
					<CardHeader>
						{tag && (
							<Badge variant="outline" className="mb-4 py-2 px-4 rounded-full">
								<span className="primary-gradient">{tag}</span>
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
							<span className="flex items-center gap-2 hover:cursor-pointer">
								Read more
								<ArrowRightIcon className="w-4 h-4" />
							</span>
						</Button>
					</CardFooter>
				</div>
			</Card>
		</Link>
	);
}
