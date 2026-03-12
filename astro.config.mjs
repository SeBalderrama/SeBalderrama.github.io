import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";

export default defineConfig({
  site: "https://sebalderrama.github.io",
  // Use '/astrosite/' while repo is named "astrosite". When you rename to Sebalderrama.github.io, change to base: '/'
  base: "/astrosite/",
  integrations: [tailwind(), react()],
  vite: {
    plugins: [
      { ...threeMinifier(), enforce: "pre" },
    ],
  },
});