import React from "react";
import PageHeader from "./PageHeader";

const Blog = () => {
	return (
		<div className="max-w-5xl mx-auto">
			<PageHeader title="Latest posts" />
			<div className="z-10 flex items-center justify-center border border-[bg-muted-foreground] border-dashed border-t-0 min-h-64"></div>
		</div>
	);
};

export default Blog;
