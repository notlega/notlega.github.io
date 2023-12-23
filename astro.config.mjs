import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import markdoc from '@astrojs/markdoc';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://notlega.github.io',
  integrations: [alpinejs(), markdoc(), partytown(), sitemap(), tailwind()],
});
