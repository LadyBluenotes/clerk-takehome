"use client";

import { useTheme } from "next-themes";
import { DropdownMenu } from "radix-ui";
import { useState } from "react";

type Theme = {
	[key: string]: ThemeObject;
};

type ThemeObject = {
	icon: string;
	name: string;
	selectFunction: () => void;
};

export const ThemeDropdown = () => {
	const [open, setOpen] = useState(false);
	const { theme, setTheme } = useTheme();

	const themes: Theme = {
		system: {
			icon: "i-tabler-device-desktop",
			name: "System",
			selectFunction: () => setTheme("system"),
		},
		dark: {
			icon: "i-tabler-moon-filled",
			name: "Dark",
			selectFunction: () => setTheme("dark"),
		},
		light: {
			icon: "i-tabler-sun-high-filled",
			name: "Light",
			selectFunction: () => setTheme("light"),
		},
	};

	return (
		<DropdownMenu.Root
			open={open}
			onOpenChange={setOpen}
		>
			<DropdownMenu.Trigger className="ui-dropdown-trigger">
				<div className={`${themes[theme || "system"].icon} size-6`} />
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					sideOffset={5}
					align="end"
					className="ui-dropdown-content"
				>
					{Object.values(themes).map((t, i) => (
						<>
							<DropdownMenu.Item
								key={t.name}
								className={`ui-dropdown-item ${i + 1 === Object.keys(themes).length ? "mb-1" : ""}`}
								onSelect={t.selectFunction}
							>
								<span>{t.name}</span>
							</DropdownMenu.Item>
							{i + 1 === Object.keys(themes).length ? null : (
								<hr
									key={i}
									className="block border-border"
								/>
							)}
						</>
					))}
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};
