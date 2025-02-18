import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
	children: React.ReactNode;
	className?: string;
}

export function H1({ children, className, ...props }: TypographyProps) {
	return (
		<h1
			className={cn(
				"prose-h1 text-4xl font-bold tracking-tight sm:text-4xl md:text-6xl lg:text-7xl prose-headings:mx-auto prose-headings:max-w-3xl",
				className
			)}
			{...props}
		>
			{children}
		</h1>
	);
}

export function H2({ children, className, ...props }: TypographyProps) {
	return (
		<h2
			className={cn(
				"prose-h2  text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl prose-headings:mx-auto prose-headings:max-w-3xl",
				className
			)}
			{...props}
		>
			{children}
		</h2>
	);
}

export function H3({ children, className, ...props }: TypographyProps) {
	return (
		<h3
			className={cn(
				"prose-h3  text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl prose-headings:mx-auto prose-headings:max-w-3xl",
				className
			)}
			{...props}
		>
			{children}
		</h3>
	);
}

export function H4({ children, className, ...props }: TypographyProps) {
	return (
		<h4
			className={cn(
				"prose-h4  text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl prose-headings:mx-auto prose-headings:max-w-3xl",
				className
			)}
			{...props}
		>
			{children}
		</h4>
	);
}

export function H5({ children, className, ...props }: TypographyProps) {
	return (
		<h5
			className={cn(
				"prose-h5  text-lg font-medium tracking-tight sm:text-xl md:text-2xl prose-headings:mx-auto prose-headings:max-w-3xl",
				className
			)}
			{...props}
		>
			{children}
		</h5>
	);
}

export function H6({ children, className, ...props }: TypographyProps) {
	return (
		<h6
			className={cn(
				"prose-h6  text-base font-medium tracking-tight sm:text-lg md:text-xl prose-headings:mx-auto prose-headings:max-w-3xl",
				className
			)}
			{...props}
		>
			{children}
		</h6>
	);
}

export function P({ children, className, ...props }: TypographyProps) {
	return (
		<p
			className={cn(
				"prose-p  text-xl leading-7 [&:not(:first-child)]:mt-6 prose-p:mx-auto prose-p:max-w-3xl text-fd-muted-foreground",
				className
			)}
			{...props}
		>
			{children}
		</p>
	);
}

export function Caption({ children, className, ...props }: TypographyProps) {
	return (
		<p className={cn("prose-sm  text-sm text-muted", className)} {...props}>
			{children}
		</p>
	);
}

export function SmallPrint({ children, className, ...props }: TypographyProps) {
	return (
		<p className={cn("prose-xs  text-xs text-muted", className)} {...props}>
			{children}
		</p>
	);
}
