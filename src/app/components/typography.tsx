import { cn } from "@/lib/utils";

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
	children: React.ReactNode;
	className?: string;
}

export function H1({ children, className, ...props }: TypographyProps) {
	return (
		<h1
			className={cn(
				"font-poppins text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl",
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
				"font-poppins text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl",
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
				"font-poppins text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl",
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
				"font-poppins text-xl font-semibold tracking-tight sm:text-2xl md:text-3xl",
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
				"font-poppins text-lg font-medium tracking-tight sm:text-xl md:text-2xl",
				className
			)}
			{...props}
		>
			{children}
		</h5>
	);
}

export function P({ children, className, ...props }: TypographyProps) {
	return (
		<p
			className={cn(
				"font-poppins text-base leading-7 [&:not(:first-child)]:mt-6",
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
		<p className={cn("font-poppins text-sm text-muted", className)} {...props}>
			{children}
		</p>
	);
}

export function SmallPrint({ children, className, ...props }: TypographyProps) {
	return (
		<p className={cn("font-poppins text-xs text-muted", className)} {...props}>
			{children}
		</p>
	);
}
