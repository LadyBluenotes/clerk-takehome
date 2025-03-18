import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetMini,
	presetWind3,
} from "unocss";

export default defineConfig({
	presets: [
		presetWind3({
			dark: "class",
		}),
		presetAttributify(),
		presetMini(),
		presetIcons(),
	],
	theme: {
		colors: {
			background: "var(--background)",

			main: "var(--main)",
			overlay: "var(--overlay)",
			bg: "var(--bg)",
			bw: "var(--bw)",
			blank: "var(--blank)",
			text: "var(--text)",
			mtext: "var(--mtext)",
			border: "var(--border)",
			ring: "var(--ring)",
			ringOffset: "var(--ring-offset)",

			secondaryBlack: "#212121",
		},
		borderRadius: {
			base: "6px",
		},
		boxShadow: {
			shadow: "var(--shadow)",
		},
		translate: {
			boxShadowX: "5px",
			boxShadowY: "4px",
			reverseBoxShadowX: "-5px",
			reverseBoxShadowY: "-4px",
		},
		fontWeight: {
			base: "500",
			heading: "800",
		},
	},
	shortcuts: {
		"ui-button":
			"inline-flex items-center justify-center whitespace-nowrap rounded-base font-base ring-offset-white transition-all focus-visible:(outline-none ring-2 ring-black ring-offset-2) disabled:(pointer-events-none opacity-50) text-mtext bg-main border-2 border-border shadow-shadow hover:(translate-x-boxShadowX translate-y-boxShadowY shadow-none) h-10 px-4 py-2",
		"ui-dropdown-trigger":
			"flex cursor-pointer select-none items-center rounded-base border-2 border-transparent outline-none focus-visible:border-border ui-button px-2 py-1.5 bg-main!",
		"ui-dropdown-content":
			"z-50 min-w-[8rem] overflow-hidden rounded-base border-2 border-border bg-main p-1 font-base text-mtext data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
		"ui-dropdown-item":
			"relative gap-2  flex cursor-default select-none items-center rounded-base border-2 border-transparent bg-main px-2 py-1.5 font-base outline-none transition-colors focus-visible:border-border data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
		"ui-link": "underline decoration-2 hover:text-main",
		"ui-input":
			"flex w-full rounded-base border-2 text-text font-base selection:bg-main selection:text-mtext border-border bg-bw px-3 py-5 ring-offset-white focus-visible:(outline-none ring-2 ring-black ring-offset-2) disabled:(cursor-not-allowed opacity-50) text-base",
	},
});
