import { defineConfig } from "astro/config";
// Tailwind handled via PostCSS (see postcss.config.cjs)
//import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

import sentry from "@sentry/astro";
import spotlightjs from "@spotlightjs/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://recharged.at",
  integrations: [sitemap(), icon(), sentry(), spotlightjs()],
  ssr: {
    noExternal: ['@fortawesome/*']
  }
});