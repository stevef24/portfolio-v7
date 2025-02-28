import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface AuthorDisplayProps {
	author: {
		name: string;
		image: string;
	};
	className?: string;
	imageSize?: number;
}

export function AuthorDisplay({
	author,
	className,
	imageSize = 40,
}: AuthorDisplayProps) {
	return (
		<div className={cn("flex items-center space-x-2", className)}>
			<Avatar className={cn(`h-${imageSize} w-${imageSize}`)}>
				<AvatarImage src={author.image} alt={author.name} />
				<AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
			</Avatar>
			<span className="text-sm font-medium">{author.name}</span>
		</div>
	);
}
