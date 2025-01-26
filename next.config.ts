import { remarkCodeHike, recmaCodeHike } from "codehike/mdx";

/** @type {import('codehike/mdx').CodeHikeConfig} */
const chConfig = {
	components: { code: "Code" },
};

const mdxOptions = {
	remarkPlugins: [[remarkCodeHike, chConfig]],
	recmaPlugins: [[recmaCodeHike, chConfig]],
	jsx: true,
};
