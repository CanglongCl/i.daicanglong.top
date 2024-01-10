import { defineConfig } from "astro/config";
import remarkToc from 'remark-toc';
import tailwind from "@astrojs/tailwind";
import { remarkReadingTime } from './src/utils/remark-reading-time.mjs';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [
		[remarkToc, { heading: '目录' }],
		remarkReadingTime
	],
  },
});
