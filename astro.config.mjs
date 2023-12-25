import { defineConfig } from 'astro/config';
import alpinejs from '@astrojs/alpinejs';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://notlega.github.io',
  trailingSlash: 'never',
  integrations: [alpinejs(), partytown(), sitemap(), tailwind()],
});
