/* eslint-disable import/no-unresolved */
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import prefetch from '@astrojs/prefetch';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://notlega.github.io',
  integrations: [markdoc(), prefetch(), sitemap(), tailwind()],
});
