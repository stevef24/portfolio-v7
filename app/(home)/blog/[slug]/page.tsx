import { notFound } from "next/navigation";
import Link from "next/link";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { blog } from "@/lib/source";
import customComponents from "@/lib/custom-components";
import { Button } from "@/components/ui/button";

export default async function Page(props: {
	params: Promise<{ slug: string }>;
}) {
	const params = await props.params;
	const page = blog.getPage([params.slug]);

	if (!page) notFound();
	const Mdx = page.data.body;

	return (
		<>
			<header>
				<div className="container py-12  rounded-xl md:px-8">
					<h1 className="mb-2 text-3xl font-bold">{page.data.title}</h1>
					<p className="mb-4 text-fd-muted-foreground">
						{page.data.description}
					</p>
					<Button variant="outline" asChild>
						<Link href="/blog">Back</Link>
					</Button>
				</div>
			</header>
			<article className="max-w-3xl mx-auto container flex flex-col px-4 py-8">
				<div className="min-w-0 prose">
					<InlineTOC items={page.data.toc} />
					<Mdx components={customComponents} />
				</div>
			</article>
			<footer className="mx-auto container">
				<div className="flex items-center justify-between gap-4 text-sm border-t border-dashed border-muted-foreground mt-10 py-10">
					<div className="flex items-center gap-2 justify-center">
						<p className="text-fd-muted-foreground">Written by</p>
						<p className="font-medium">{page.data.author}</p>
					</div>
					<div className="flex items-center gap-2">
						<p className="text-sm text-fd-muted-foreground">At</p>
						<p className="font-medium">
							{new Date(page.data.date).toDateString()}
						</p>
					</div>
				</div>
			</footer>
		</>
	);
}

export function generateStaticParams(): { slug: string }[] {
	return blog.getPages().map((page) => ({
		slug: page.slugs[0],
	}));
}
