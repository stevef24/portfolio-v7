/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"color-1": "hsl(var(--color-1))",
				"color-2": "hsl(var(--color-2))",
				"color-3": "hsl(var(--color-3))",
				"color-4": "hsl(var(--color-4))",
				"color-5": "hsl(var(--color-5))",
			},
			animation: {
				"aurora-border": "aurora-border 6s ease-in-out infinite",
				"aurora-1": "aurora-1 12s ease-in-out infinite alternate",
				"aurora-2": "aurora-2 12s ease-in-out infinite alternate",
				"aurora-3": "aurora-3 12s ease-in-out infinite alternate",
				"aurora-4": "aurora-4 12s ease-in-out infinite alternate",
			},
			keyframes: {
				"aurora-border": {
					"0%, 100%": { borderRadius: "37% 29% 27% 27% / 28% 25% 41% 37%" },
					"25%": { borderRadius: "47% 29% 39% 49% / 61% 19% 66% 26%" },
					"50%": { borderRadius: "57% 23% 47% 72% / 63% 17% 66% 33%" },
					"75%": { borderRadius: "28% 49% 29% 100% / 93% 20% 64% 25%" },
				},
				"aurora-1": {
					"0%, 100%": { transform: "translate(0%, 0%)" },
					"50%": { transform: "translate(25%, 50%)" },
					"75%": { transform: "translate(50%, 25%)" },
				},
				"aurora-2": {
					"0%, 100%": { transform: "translate(0%, 0%)" },
					"60%": { transform: "translate(25%, 75%)" },
					"85%": { transform: "translate(50%, 50%)" },
				},
				"aurora-3": {
					"0%, 100%": { transform: "translate(0%, 0%)" },
					"40%": { transform: "translate(25%, -50%)" },
					"65%": { transform: "translate(50%, -25%)" },
				},
				"aurora-4": {
					"0%, 100%": { transform: "translate(0%, 0%)" },
					"50%": { transform: "translate(-40%, -25%)" },
					"90%": { transform: "translate(-25%, -50%)" },
				},
			},
		},
	},
	plugins: [],
};
