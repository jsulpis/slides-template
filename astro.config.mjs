import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: "https://jsulpis.github.io",
	base: "/slides-template",
	integrations: [react(), tailwind()],
});
