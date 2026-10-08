// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// Change `site` to the live domain before you publish. Canonical tags,
// the sitemap, and Open Graph URLs all use this value.
export default defineConfig({
  site: "https://www.sjpplumbingservices.co.uk",
  trailingSlash: "never",
  integrations: [
    sitemap({
      filter: (page) => !page.includes("/404"),
    }),
  ],
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
