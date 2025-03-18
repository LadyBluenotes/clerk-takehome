import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function Page() {
	return (
		<div className="flex flex-col justify-center items-center">
			<SignIn
				appearance={{
					baseTheme: neobrutalism,
					variables: {
						colorPrimary: "#c8ff1d",
						colorTextOnPrimaryBackground: "#000",
					},
				}}
				forceRedirectUrl={"/dashboard"}
				path="/sign-in"
			/>
		</div>
	);
}
