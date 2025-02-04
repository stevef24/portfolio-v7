import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

export const baseOptions: BaseLayoutProps = {
	githubUrl: "https://github.com/stavf24",
	disableThemeSwitch: true,
	nav: {
		title: "Stav Fernandes",
		transparentMode: "top",
	},
	links: [
		{
			text: "Blog",
			url: "/blog",
			active: "nested-url",
		},
	],
};
