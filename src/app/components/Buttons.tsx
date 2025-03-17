import {
	SignInButton as ClerkSignIn,
	SignUpButton as ClerkSignUp,
} from "@clerk/nextjs";

const SignUpButton = () => {
	return (
		<ClerkSignUp>
			<button className="ui-button">Sign up</button>
		</ClerkSignUp>
	);
};

const SignInButton = () => {
	return (
		<ClerkSignIn>
			<button className="ui-button">Sign in</button>
		</ClerkSignIn>
	);
};

export { SignInButton, SignUpButton };
