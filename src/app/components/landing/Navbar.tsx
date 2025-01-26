import Link from "next/link";
import { H5, P } from "../typography";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Navbar = () => {
	return (
		<nav className="sticky z-10 max-w-5xl mx-auto bg-black h-16 flex justify-between items-center border-b border-[#f5f5f5] max-sm:px-4">
			<div className="flex gap-4 items-center">
				<Link href="/">
					<H5>Stav Fernandes</H5>
				</Link>
				<Link href="/blog">
					<P>Blog</P>
				</Link>
			</div>
			<div className="flex gap-4 items-center">
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
