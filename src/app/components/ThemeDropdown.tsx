"use client";

import { useTheme } from "next-themes";
import { DropdownMenu } from "radix-ui";
import { useState } from "react";

export const ThemeDropdown = () => {
	const [open, setOpen] = useState(false);
	const { theme, setTheme } = useTheme();

	const themes = {
		system: {
			icon: "i-tabler-device-desktop",
			name: "light",
			selectFunction: () => setTheme("system"),
		},
		dark: {
			icon: "i-tabler-moon-filled",
			name: "light",
			selectFunction: () => setTheme("dark"),
		},
		light: {
			icon: "i-tabler-sun-high-filled",
			name: "light",
			selectFunction: () => setTheme("light"),
		},
	};

	return (
		<DropdownMenu.Root
			open={open}
			onOpenChange={setOpen}
		>
			<DropdownMenu.Trigger className="ui-dropdown-trigger">
				<div className={`${themes[theme].icon} size-6`} />
			</DropdownMenu.Trigger>
			<DropdownMenu.Portal>
				<DropdownMenu.Content
					sideOffset={5}
					align="end"
					className="ui-dropdown-content"
				>
					<DropdownMenu.Item
						className="ui-dropdown-item"
						onSelect={themes.system.selectFunction}
					>
						System
					</DropdownMenu.Item>
					<DropdownMenu.Item
						className="ui-dropdown-item"
						onSelect={themes.light.selectFunction}
					>
						Light
					</DropdownMenu.Item>
					<DropdownMenu.Item
						className="ui-dropdown-item"
						onSelect={themes.dark.selectFunction}
					>
						Dark
					</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Portal>
		</DropdownMenu.Root>
	);
};
