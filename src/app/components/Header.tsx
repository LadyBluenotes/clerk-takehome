"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
	SignInButton as ClerkSignIn,
	SignUpButton as ClerkSignUp,
} from "@clerk/nextjs";
import { ThemeDropdown } from "./ThemeDropdown";
import { DashboardButton } from "./DashboardButton";

export const Header = () => {
	return (
		<header className="flex h-16! w-full">
			<div className="flex items-center align-center justify-between w-full">
				<span className="flex items-center gap-2">
					<SignedIn>
						<div className="i-tabler-lock-open-2 size-6" /> You're signed in.
					</SignedIn>
					<SignedOut>
						<div className="i-tabler-lock size-6" />
						You're signed out.{" "}
					</SignedOut>
				</span>
				<div className="flex gap-4">
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
									userButtonPopoverCard:
										"border-2 border-solid border-border shadow-shadow",
									userButtonPopoverFooter:
										"border-t-2 border-solid border-border",
									userButtonPopoverMain: "rounded-b-none bg-bg",
									userButtonPopoverActions:
										"border-y-2 border-solid border-border!",
								},
							}}
						/>
					</SignedIn>
					<ThemeDropdown />
				</div>
			</div>
		</header>
	);
};
