"use client";

import { OrganizationSwitcher, useUser } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
import { useEffect, useState } from "react";

export default function Dashboard() {
	const { user, isLoaded } = useUser();
	const [organizations, setOrganizations] = useState<
		{ name: string; id: string }[]
	>([]);
	const [sessions, setSessions] = useState<string[]>([]);

	useEffect(() => {
		if (user) {
			user.getOrganizationMemberships().then((orgs) => {
				const orgInfo = orgs.data.map((org) => {
					return {
						name: org.organization.name,
						id: org.id,
					};
				});
				setOrganizations(orgInfo);
			});

			user.getSessions().then((sessions) => {
				const sessionIds = sessions.map((session) => {
					return session.id;
				});
				setSessions(sessionIds);
			});
		}
	}, [user]);

	if (!isLoaded && !user) {
		return <div>Loading...</div>;
	}

	return (
		<div className="flex flex-col gap-4">
			<div className="flex justify-end py-4">
				<OrganizationSwitcher
					afterLeaveOrganizationUrl="/dashboard"
					afterCreateOrganizationUrl="/dashboard"
					appearance={{
						baseTheme: neobrutalism,
						variables: {
							colorPrimary: "#c8ff1d",
							fontSize: "16px",
						},
						elements: {
							rootBox: "ui-button",
							organizationSwitcherTrigger: "text-black @hover:text-black!",
							organizationSwitcherPopoverCard:
								"shadow-shadow border-2 border-solid border-border ",
							organizationSwitcherPopoverMain:
								"rounded-b-none bg-bg border-none",
							organizationSwitcherPopoverFooter:
								"p-0 m-0 border-t-2 border-solid border-border",
							organizationSwitcherPopoverActionButton:
								"border-t-2 border-solid border-border text-text",
						},
					}}
				/>
			</div>
			<div className="flex flex-col gap-4">
				<h1 className="ui-header">Dashboard</h1>

				<ul className="text-lg">
					<li key="name">
						<span>
							<strong>Name:</strong> {user?.fullName}
						</span>
					</li>
					<li key="username">
						<span>
							<strong>Username:</strong> {user?.username}
						</span>
					</li>
					<li key="email">
						{user?.emailAddresses && user?.emailAddresses.length > 0 ? (
							<>
								<span className="font-bold">Email(s):</span>
								<ul className="pl-8">
									{user?.emailAddresses.map((email, i) => {
										return (
											<li key={"email-" + i}>
												<span>{email.emailAddress}</span>
											</li>
										);
									})}
								</ul>
							</>
						) : (
							<span>No email associated.</span>
						)}
					</li>
					<li key="sessions">
						{sessions.length > 0 ? (
							<>
								<span>
									<strong>Session ID(s):</strong>
								</span>
								<ul className="pl-8">
									{sessions.map((session, i) => {
										return (
											<li key={"session-" + i}>
												<span>{session}</span>
											</li>
										);
									})}
								</ul>
							</>
						) : (
							<span>No active sessions.</span>
						)}
					</li>
					<li key="orgs">
						{organizations.length > 0 ? (
							<div>
								<span>
									<strong>Organization(s):</strong>
								</span>
								<ul className="pl-8">
									{organizations.map(({ name, id }, i) => {
										return (
											<li key={"org-" + i}>
												<span>
													{name} - ID: {id}
												</span>
											</li>
										);
									})}
								</ul>
							</div>
						) : (
							<span>You are not part of any organizations.</span>
						)}
					</li>
				</ul>
			</div>
		</div>
	);
}
