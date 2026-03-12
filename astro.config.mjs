import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";

export default defineConfig({
  site: "https://sebalderrama.github.io",
  base: "/",
  integrations: [tailwind(), react()],
  vite: {
    plugins: [
      { ...threeMinifier(), enforce: "pre" },
    ],
  },
});