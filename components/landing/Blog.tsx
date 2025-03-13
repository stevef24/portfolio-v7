"use client";
import React from "react";
import PageHeader from "./PageHeader";
import BlogCard from "../ui/BlogCard";
import { blog } from "@/lib/source";

const Blog = () => {
	const posts = blog.getPages().slice(0, 3);
	const projectIds = [
		"O5x0kQ0Xk0UavLvJlv3A",
		"kb9IHnXSZRLNGZkqtIJN",
		"VzcZVpiOIfumxV4NDHWm",
	];

	return (
		<div className="max-w-5xl mx-auto">
			<PageHeader title="Latest posts" />
			<div className="flex flex-col items-center justify-center border border-[bg-muted-foreground] border-dashed border-t-0 min-h-64">
				<ul className="w-full">
					{posts.map((post, index) => (
						<BlogCard
							key={post.slugs[0]}
							projectId={projectIds[index]}
							title={post.data.title}
							description={post.data.description}
							author={{
								name: post.data.author,
								avatar: "",
							}}
							date={post.data.date.toString()}
							className={index === posts.length - 1 ? "border-b-none" : ""}
							slug={post.slugs[0]}
						/>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Blog;
