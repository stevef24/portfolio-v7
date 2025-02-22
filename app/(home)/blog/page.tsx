import { blog } from "@/lib/source";
import { MidCard } from "@/components/ui/MidCards";
import { LongCard } from "@/components/ui/LongCards";
import { FeatureCard } from "@/components/ui/featureCard";

export default function Home() {
	const posts = blog.getPages();

	return (
		<main className="grow container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8">Latest Blog Posts</h1>
			<div className="grid  md:grid-cols-2">
				<FeatureCard
					title={"AI Agents"}
					description={
						"AI agents are a new way to build apps. They are a type of agent that can be used to build apps."
					}
					author={{
						name: "Stav Fernandes",
						image: "/images/profile.jpeg",
					}}
				/>
				<div>
					<MidCard
						title={"AI Agents"}
						description={
							"AI agents are a new way to build apps. They are a type of agent that can be used to build apps."
						}
						author={{
							name: "Stav Fernandes",
							image: "/images/profile.jpeg",
						}}
						className="md:border-l-0 "
					/>
					<MidCard
						title={"AI Agents"}
						description={
							"AI agents are a new way to build apps. They are a type of agent that can be used to build apps."
						}
						author={{
							name: "Stav Fernandes",
							image: "/images/profile.jpeg",
						}}
						className="md:border-l-0"
					/>
				</div>
			</div>
			<div>
				<ul>
					<LongCard
						title={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						description={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						author={{
							name: "Stav Fernandes",
							image: "/images/profile.jpeg",
						}}
						date={"2024-01-01"}
						link={"/blog/ai-agents"}
					/>
					<LongCard
						title={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						description={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						author={{
							name: "Stav Fernandes",
							image: "/images/profile.jpeg",
						}}
						date={"2024-01-01"}
						link={"/blog/ai-agents"}
					/>
					<LongCard
						title={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						description={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						author={{
							name: "Stav Fernandes",
							image: "/images/profile.jpeg",
						}}
						date={"2024-01-01"}
						link={"/blog/ai-agents"}
					/>
					<LongCard
						title={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						description={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						author={{
							name: "Stav Fernandes",
							image: "/images/profile.jpeg",
						}}
						date={"2024-01-01"}
						link={"/blog/ai-agents"}
					/>
				</ul>
			</div>
		</main>
	);
}
