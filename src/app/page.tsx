"use client";

import { useTheme } from "next-themes";

export default function Home() {
	const { theme, setTheme } = useTheme();
	return (
		<div className="">
			<main className="">
				<h1 className="">Clerk Take-Home</h1>
				<span className="text-blue dark:text-red">
					Current theme: <strong>{theme}</strong>
				</span>
				<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
					{theme === "light" ? "dark" : "light"} Mode
				</button>
			</main>
		</div>
	);
}
