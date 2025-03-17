import {
	defineConfig,
	presetAttributify,
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
	],
	shortcuts: {
		"ui-button":
			"h-12 border-black border-2 p-2.5 bg-[#A6FAFF] hover:bg-[#79F7FF] hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:bg-[#00E1EF] dark:(text-black)",
	},
});
