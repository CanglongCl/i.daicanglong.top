import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/remark-plugins/remark-reading-time.js";
import { flowbiteImage } from "./src/remark-plugins/flowbite-image.js";
import { popupSyntax } from "./src/remark-plugins/popup-syntax.js";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
  ],
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: "目录" }],
      remarkReadingTime,
      flowbiteImage,
      popupSyntax,
    ],
  },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
    imagesConfig: {
      sizes: [320, 640, 1280],
    },
  }),
});
