import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
//import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://recharged.at",
  integrations: [tailwind(), sitemap(), icon()],
  ssr: {
    noExternal: ['@fortawesome/*']
  }
});