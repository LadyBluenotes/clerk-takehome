"use client";

import { OrganizationSwitcher, UserButton, useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

export default function SignIn() {
	const { user } = useUser();
	const [sessionID, setSessionID] = useState("");

	useEffect(() => {
		user?.getSessions().then((sessions) => {
			setSessionID(sessions[0].id);
		});
	});

	return (
		<div>
			<h1>Dashboard</h1>
			<UserButton />
			<OrganizationSwitcher />
			<span>Name: {user?.fullName}</span>
			<span>Username: {user?.username}</span>
			<span>
				Email:{" "}
				{user?.emailAddresses.map((email) => {
					return email.emailAddress;
				})}
			</span>
			<span>Session ID: {sessionID}</span>
		</div>
	);
}
