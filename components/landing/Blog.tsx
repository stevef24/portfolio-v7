import React from "react";
import PageHeader from "./PageHeader";
import BlogCard from "../ui/BlogCard";

const Blog = () => {
	return (
		<div className="max-w-5xl mx-auto">
			<PageHeader title="Latest posts" />
			<div className=" flex  flex-col  items-center justify-center border border-[bg-muted-foreground] border-dashed border-t-0 min-h-64">
				<BlogCard
					projectId="O5x0kQ0Xk0UavLvJlv3A"
					title="Blog Post 1"
					description="This is the description of the first blog post."
					author={{
						name: "John Doe",
						avatar: "",
					}}
					date="2023-01-01"
				/>
				<BlogCard
					title="Blog Post 1"
					description="This is the description of the first blog post."
					author={{
						name: "John Doe",
						avatar: "",
					}}
					date="2023-01-01"
					projectId="kb9IHnXSZRLNGZkqtIJN"
				/>
				<BlogCard
					title="Blog Post 1"
					description="This is the description of the first blog post."
					author={{
						name: "John Doe",
						avatar: "",
					}}
					date="2023-01-01"
					projectId="VzcZVpiOIfumxV4NDHWm"
				/>
			</div>
		</div>
	);
};

export default Blog;
