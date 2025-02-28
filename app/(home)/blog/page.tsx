"use client";

import { blog } from "@/lib/source";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { MidCard } from "@/components/ui/MidCards";
import { LongCard } from "@/components/ui/LongCards";

export default function Home() {
	const posts = blog.getPages();
	const [featured, ...otherPosts] = posts;
	const [secondPost, thirdPost, ...remainingPosts] = otherPosts;

	return (
		<main className="grow container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
			<div className="grid md:grid-cols-2">
				{featured && (
					<FeatureCard
						title={featured.data.title || ""}
						description={featured.data.description || ""}
						author={{
							name: featured.data.author || "",
							image: "/images/profile.jpeg",
						}}
					/>
				)}
				<div>
					{secondPost && (
						<MidCard
							title={secondPost.data.title || ""}
							description={secondPost.data.description || ""}
							author={{
								name: secondPost.data.author || "",
								image: "/images/profile.jpeg",
							}}
							className="md:border-l-0"
						/>
					)}
					{thirdPost && (
						<MidCard
							title={thirdPost.data.title || ""}
							description={thirdPost.data.description || ""}
							author={{
								name: thirdPost.data.author || "",
								image: "/images/profile.jpeg",
							}}
							className="md:border-l-0"
						/>
					)}
				</div>
			</div>
			<div>
				<ul>
					{remainingPosts.map((post) => (
						<LongCard
							key={post.url}
							title={post.data.title || ""}
							description={post.data.description || ""}
							author={{
								name: post.data.author || "",
								image: "/images/profile.jpeg",
							}}
							date={
								post.data.date instanceof Date
									? post.data.date.toISOString().split("T")[0]
									: post.data.date
							}
							link={post.url}
						/>
					))}
				</ul>
			</div>
		</main>
	);
}
