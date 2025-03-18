import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetMini,
	presetWebFonts,
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
		presetWebFonts({
			fonts: {
				questrial: ["Questrial"],
			},
		}),
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
		"ui-header": "text-5xl self-center font-bold",
		"ui-button":
			"border-2 border-solid border-border inline-flex items-center justify-center whitespace-nowrap rounded-base font-base ring-offset-white transition-all focus-visible:(ring-2 ring-ring ring-offset-ringOffset ring-offset-2) disabled:(pointer-events-none opacity-50) text-mtext bg-main shadow-shadow hover:(translate-x-boxShadowX translate-y-boxShadowY shadow-none) h-10 px-4 py-2 ",
		"ui-dropdown-trigger":
			"flex cursor-pointer select-none items-center rounded-base outline-2 outline-transparent focus-visible:border-border ui-button px-2 py-1.5 bg-main!",
		"ui-dropdown-content":
			"z-50 min-w-[8rem] flex flex-col gap-2 overflow-hidden rounded-base border-2 border-border bg-main p-1 font-base text-mtext shadow-shadow",
		"ui-dropdown-item":
			"relative flex cursor-default select-none items-center rounded-base bg-main mx-1 my-0.5 px-1.5 py-1 font-base outline-none transition-colors focus-visible:border-border data-[disabled]:pointer-events-none data-[disabled]:opacity-50 hover:(ring-none cursor-pointer)",
		"ui-link":
			"underline decoration-2 hover:(outline-none ring-none) focus-visible:(ring-ring ring-solid ring-offset-4 ring-offset-ringOffset)",
		"ui-input":
			"bg-transparent border-transparent outline-2 outline-solid outline-border shadow-none flex w-full rounded-base text-text font-base px-3 py-4 focus-visible:(shadow-none border-transparent outline-2 outline-solid outline-text ring-2 ring-offset-6 ring-offset-ringOffset ring-solid ring-ring) disabled:(cursor-not-allowed opacity-50) text-base transition-none! translate-none! hover:(transition-none! translate-none! shadow-none! border-transparent)",
	},
});
