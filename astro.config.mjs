import { defineConfig } from "astro/config";
import remarkToc from "remark-toc";
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from "./src/remark-plugins/remark-reading-time.js";
import { flowbiteImage } from "./src/remark-plugins/flowbite-image.js";
import { popupSyntax } from "./src/remark-plugins/popup-syntax.js";
import vercel from "@astrojs/vercel/static";
import remarkEleventyImage from "astro-remark-eleventy-image";

const commonConfig = {
  integrations: [tailwind(), remarkEleventyImage()],
  markdown: {
    remarkPlugins: [
      [remarkToc, { heading: "目录" }],
      remarkReadingTime,
      flowbiteImage,
      popupSyntax,
    ],
  },
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img"],
    },
  },
};

const vercelConfig = {
  integrations: [tailwind()],
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
  }),
};

export default defineConfig(commonConfig);
