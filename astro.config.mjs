import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import { threeMinifier } from "@yushijinhun/three-minifier-rollup";

export default defineConfig({
  integrations: [tailwind(), react()],
  vite: {
    plugins: [
      { ...threeMinifier(), enforce: "pre" },
    ],
  },
});