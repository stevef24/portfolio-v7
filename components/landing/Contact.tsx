import PageHeader from "./PageHeader";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { H3, P } from "../typography";
import { Button } from "../ui/button";
import UnicornScene from "@/app/helpers/Unicorn-studio";

const Contact = () => {
	return (
		<div className="max-w-5xl mx-auto h-full ">
			<PageHeader title="Contact" />
			<div className="relative border-b-none p-5 z-10 flex flex-col items-center justify-center gap-8 min-h-[calc(100vh-20rem)] py-20 text-center border border-dashed ">
				<H3>Want to connect?</H3>

				<P className="text-balance text-fd-muted-foreground">
					I&apos;m always open to new opportunities and collaborations. Feel
					free to reach out through email or connect with me on LinkedIn.
				</P>

				<div className="flex flex-col gap-4 sm:flex-row">
					<Button
						variant="ghost"
						asChild
						className="hover:bg-muted-foreground/10"
					>
						<Link
							href="mailto:your-email@example.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Mail className="w-5 h-5" />
							Send Email
						</Link>
					</Button>

					<Button
						variant="ghost"
						asChild
						className="hover:bg-muted-foreground/10"
					>
						<Link
							href="https://linkedin.com/in/stavfernandes24"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin className="w-5 h-5" />
							LinkedIn
						</Link>
					</Button>
				</div>

				<div className="absolute inset-0 z-[-1] w-full h-full">
					<UnicornScene
						height="100%"
						width="100%"
						projectId="lWZ52g5lT6Q9X7tgKQcl"
						className="absolute inset-0 z-10 w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>
	);
};

export default Contact;
