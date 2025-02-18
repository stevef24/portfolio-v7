import Link from "next/link";
import { blog } from "@/lib/source";
import MidCards from "@/components/UI/MidCards";
import FeatureCard from "@/components/UI/FeatureCard";
import LongCard from "@/components/UI/LongCards";
import LongCards from "@/components/UI/LongCards";

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
					<MidCards
						title={"AI Agents"}
						description={
							"AI agents are a new way to build apps. They are a type of agent that can be used to build apps."
						}
						author={{
							name: "Stav Fernandes",
							image: "/images/profile.jpeg",
						}}
					/>
					<MidCards
						title={"AI Agents"}
						description={
							"AI agents are a new way to build apps. They are a type of agent that can be used to build apps."
						}
						author={{
							name: "Stav Fernandes",
							image: "/images/profile.jpeg",
						}}
					/>
				</div>
			</div>
			<div>
				<ul>
					<LongCards
						title={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						description={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						author={{
							name: "Stav Fernandes",
							image: "/images/profile.jpeg",
						}}
						date={"2024-01-01"}
						link={"/blog/ai-agents"}
					/>
					<LongCards
						title={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						description={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						author={{
							name: "Stav Fernandes",
							image: "/images/profile.jpeg",
						}}
						date={"2024-01-01"}
						link={"/blog/ai-agents"}
					/>
					<LongCards
						title={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						description={"Build any LLM app in TypeScript with Vercel's AI SDK"}
						author={{
							name: "Stav Fernandes",
							image: "/images/profile.jpeg",
						}}
						date={"2024-01-01"}
						link={"/blog/ai-agents"}
					/>
					<LongCards
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
