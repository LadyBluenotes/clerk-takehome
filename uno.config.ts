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
});
