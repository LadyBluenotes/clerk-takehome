"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
	SignInButton as ClerkSignIn,
	SignUpButton as ClerkSignUp,
} from "@clerk/nextjs";
import { ThemeDropdown } from "./ThemeDropdown";
import { DashboardButton } from "./DashboardButton";
import { useTheme } from "next-themes";

export const Header = () => {
	const { theme, systemTheme } = useTheme();

	return (
		<header className="flex items-center align-center gap-4 h-16! self-end">
			<SignedOut>
				<ClerkSignIn>
					<button className="ui-button">Sign in</button>
				</ClerkSignIn>
				<ClerkSignUp>
					<button className="ui-button">Sign up</button>
				</ClerkSignUp>
			</SignedOut>
			<SignedIn>
				<DashboardButton />
				<UserButton
					appearance={{
						variables: {
							colorTextOnPrimaryBackground: "#000",
							fontSize: "16px",
						},
						elements: {
							button: "text-text!",
							userButtonPopoverCard:
								"border-2 border-solid border-border shadow-shadow",
							userButtonPopoverFooter: "border-t-2 border-solid border-border",
							userButtonPopoverMain: "rounded-b-none bg-bg",
							userPreviewMainIdentifier: "font-bold",
							userButtonPopoverActions:
								"border-y-2 border-solid border-border!",
						},
					}}
				/>
			</SignedIn>
			<ThemeDropdown />
		</header>
	);
};
