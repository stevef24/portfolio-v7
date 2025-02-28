// @ts-nocheck
import defaultMdxComponents from "fumadocs-ui/mdx";
import { Accordion, Accordions } from "fumadocs-ui/components/accordion";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Callout } from "fumadocs-ui/components/callout";
import { Banner } from "fumadocs-ui/components/banner";
import { File, Folder, Files } from "fumadocs-ui/components/files";
import { ImageZoom } from "fumadocs-ui/components/image-zoom";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { Step, Steps } from "fumadocs-ui/components/steps";
import { Tab, Tabs } from "fumadocs-ui/components/tabs";
import { TypeTable } from "fumadocs-ui/components/type-table";
import { Pre, CodeBlock } from "fumadocs-ui/components/codeblock";
import { Heading } from "fumadocs-ui/components/heading";
import CompilerComparison from "@/components/ui/blog/react-complier/compiler-comparison";
import FlowDiagram from "@/components/ui/blog/react-server-component/FlowDiagram";
const customComponents = {
	...defaultMdxComponents,
	Accordion,
	Accordions,
	DynamicCodeBlock,
	Callout,
	Banner,
	File,
	Folder,
	Files,
	ImageZoom,
	InlineTOC,
	Step,
	Steps,
	Tab,
	Tabs,
	TypeTable,
	Pre,
	CodeBlock,
	h1: (props: any) => <Heading as="h1" {...props} />,
	h2: (props: any) => <Heading as="h2" {...props} />,
	h3: (props: any) => <Heading as="h3" {...props} />,
	h4: (props: any) => <Heading as="h4" {...props} />,
	h5: (props: any) => <Heading as="h5" {...props} />,
	h6: (props: any) => <Heading as="h6" {...props} />,
	CompilerComparison,
	FlowDiagram,
};

export default customComponents;
