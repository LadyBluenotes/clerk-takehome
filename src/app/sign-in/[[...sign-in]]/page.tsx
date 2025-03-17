import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function Page() {
	return (
		<div>
			<h1>Sign In</h1>
			<SignIn
				appearance={{
					baseTheme: neobrutalism,
					variables: {},
				}}
				forceRedirectUrl={"/dashboard"}
				path="/sign-in"
			/>
		</div>
	);
}
