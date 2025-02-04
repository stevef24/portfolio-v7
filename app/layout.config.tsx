import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
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
