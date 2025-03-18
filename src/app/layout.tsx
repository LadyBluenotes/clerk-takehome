import type { Metadata } from "next";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "../providers/theme-provider";
import ClerkProvider from "../providers/clerk-provider";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@unocss/reset/tailwind.css";

import { SignInButton, SignUpButton, ThemeDropdown } from "./components";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Clerk Take-Home",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background dark:bg-background`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					themes={["light", "dark", "system"]}
					enableSystem
				>
					<ClerkProvider>
						<header className="flex justify-end items-center p-4 gap-4 h-16">
							<SignedOut>
								<SignInButton />
								<SignUpButton />
							</SignedOut>
							<SignedIn>
								<UserButton />
							</SignedIn>
							<ThemeDropdown />
						</header>
						{children}
					</ClerkProvider>
				</ThemeProvider>
			</body>
		</html>
	);
}
