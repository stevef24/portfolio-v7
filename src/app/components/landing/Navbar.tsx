import Link from "next/link";
import { H6, P } from "../typography";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
	return (
		<nav className="fixed z-10 w-full bg-black/80 backdrop-blur-sm h-16 flex justify-between items-center border-b border-dashed border-[var(--color-border)] max-sm:px-4 px-10">
			<div className="flex items-center gap-4">
				<Link href="/">
					<H6>Stav Fernandes</H6>
				</Link>
				<Link href="/blog">
					<P>Blog</P>
				</Link>
			</div>
			<div className="flex items-center gap-4">
				<Link href="/">
					<span className="sr-only">LinkedIn</span>
					<FaLinkedin className="text-2xl" />
				</Link>
				<Link href="/">
					<span className="sr-only">Github</span>
					<FaGithub className="text-2xl" />
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
