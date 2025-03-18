"use client";

import { useTheme } from "next-themes";

export default function Home() {
	const { theme } = useTheme();

	const listItems = [
		{
			name: "Next.js",
			link: "https://nextjs.org/",
		},
		{
			name: "Clerk",
			link: "https://clerk.dev/",
		},
		{
			name: "Unocss",
			link: "https://unocss.vercel.app/",
		},
		{
			name: "Radix UI",
			link: "https://radix-ui.com/",
		},
		{
			name: "Prettier",
			link: "https://prettier.io/",
		},
		{
			name: "ESLint",
			link: "https://eslint.org/",
		},
	];

	return (
		<div className="flex flex-col pt-20 gap-8">
			<h1 className="ui-header">Clerk Take-Home</h1>
			<span className="text-xl">Current theme: {theme}</span>
			<div className="flex flex-col gap-4">
				<p>What I used to build this:</p>
				<ul className="list-disc list-inside pl-4">
					{listItems.map((item) => (
						<li key={item.name}>
							<a
								href={item.link}
								target="_blank"
								rel="noopener noreferrer"
								className="ui-link"
							>
								{item.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
