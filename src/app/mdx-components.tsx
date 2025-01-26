import { Scrollycoding } from "./components/annotations/scrollycoding";
import { Code } from "./components/code";
import { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
	return {
		...components,
		Code,
		Scrollycoding,
	};
}
