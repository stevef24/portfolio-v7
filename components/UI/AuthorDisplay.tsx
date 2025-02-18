import Image from "next/image";
import { P } from "../typography";

interface AuthorDisplayProps {
	author: {
		name: string;
		image: string;
	};
	className?: string;
	imageSize?: number;
}

export default function AuthorDisplay({
	author,
	className,
	imageSize = 48,
}: AuthorDisplayProps) {
	return (
		<div className={`flex items-center gap-3 ${className}`}>
			<Image
				src={author.image}
				alt={author.name}
				className="rounded-full"
				width={imageSize}
				height={imageSize}
			/>
			<p className="text-fd-muted-foreground">{author.name}</p>
		</div>
	);
}
