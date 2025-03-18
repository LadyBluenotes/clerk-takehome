import { SignIn } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";

export default function Page() {
	return (
		<div className="flex flex-col justify-center items-center py-20">
			<SignIn
				appearance={{
					baseTheme: neobrutalism,
					variables: {
						colorPrimary: "#c8ff1d",
						colorTextOnPrimaryBackground: "#000",
						fontSize: "16px",
					},
					elements: {
						rootBox: "w-500px h-full mb-5 self-center",

						cardBox:
							"rounded-base shadow-shadow border-2 border-border bg-main text-mtext w-500px",
						card: "py-6 px-10 bg-bg gap-2",

						header: "flex flex-col items-center",
						headerTitle: "leading-none font-heading text-2xl pb-6",
						headerSubtitle: "text-text text-sm",
						identityPreviewEditButton: "text-text",

						form: "gap-0 space-y-4",
						formFieldLabelRow: "text-sm text-mtext font-base pb-1",
						formFieldInput: "ui-input",
						formFieldAction:
							"text-text hover:text-secondaryBlack rounded-md focus-visible:(ring-2 ring-offset-6 ring-offset-ringOffset ring-solid ring-ring outline-none border-none)",
						formFieldErrorText: "pt-2",
						formButtonPrimary: "ui-button w-full text-lg -ml-0.5",
						buttonArrowIcon: "opacity-100 w-4",

						alternativeMethodsBlockButton: "ui-button! w-full",
						backLink: "text-text hover:underline",
						formResendCodeLink: "text-text hover:underline",

						footer:
							"flex items-center p-0 mt-0 text-white dark:bg-secondaryBlack",
						footerActionLink:
							"hover:no-underline text-sm text-text hover:text-secondaryBlack hover:dark:text-main",
					},
				}}
				forceRedirectUrl={"/dashboard"}
				path="/sign-in"
			/>
		</div>
	);
}
