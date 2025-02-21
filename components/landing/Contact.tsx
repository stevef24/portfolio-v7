import PageHeader from "./PageHeader";
import Link from "next/link";
import { Mail, Linkedin } from "lucide-react";
import { H3, P } from "../typography";
import Aurora from "../ui/Aurora";

const Contact = () => {
	return (
		<div className="max-w-5xl mx-auto h-full">
			<PageHeader title="Contact" />
			<div className="relative p-5 z-10 flex flex-col items-center justify-center gap-8 min-h-[calc(100vh-20rem)] py-20 text-center border border-dashed ">
				<H3>Want to connect?</H3>

				<P className="text-balance text-fd-muted-foreground">
					I&apos;m always open to new opportunities and collaborations. Feel
					free to reach out through email or connect with me on LinkedIn.
				</P>

				<div className="flex flex-col gap-4 sm:flex-row">
					<Link
						href="mailto:your-email@example.com"
						className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors rounded-lg bg-secondary hover:bg-secondary/80"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Mail className="w-5 h-5" />
						Send Email
					</Link>

					<Link
						href="https://linkedin.com/in/your-profile"
						className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium transition-colors rounded-lg bg-secondary hover:bg-secondary/80"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin className="w-5 h-5" />
						LinkedIn
					</Link>
				</div>

				<div className="absolute inset-0 z-[-1] w-full h-full">
					<Aurora amplitude={0.8} />
				</div>
			</div>
		</div>
	);
};

export default Contact;
