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
		<div className="flex flex-col pt-14 gap-4">
			<h1 className="ui-header">Dashboard</h1>
			<OrganizationSwitcher />
			<ul className="text-lg">
				<li>
					<span>
						<strong>Name:</strong> {user?.fullName}
					</span>
				</li>
				<li>
					<span>
						<strong>Username:</strong> {user?.username}
					</span>
				</li>
				<li>
					{user?.emailAddresses.length > 1 ? (
						<ul>
							<span className="font-bold">Emails:</span>
							{user?.emailAddresses.map((email) => {
								return (
									<li>
										<span>{email.emailAddress}</span>
									</li>
								);
							})}
						</ul>
					) : (
						<span>
							<strong>Email:</strong> {user?.emailAddresses[0].emailAddress}
						</span>
					)}
				</li>
				<li>
					<span>
						<strong>Session ID:</strong> {sessionID}
					</span>
				</li>
			</ul>
		</div>
	);
}
