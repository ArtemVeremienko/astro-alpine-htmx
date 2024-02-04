import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";
import htmx from "astro-htmx";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://artemveremienko.github.io',
  base: '/astro-alpine-htmx',
  integrations: [tailwind(), alpinejs(), htmx()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
})
