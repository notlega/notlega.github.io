/* eslint-disable import/no-unresolved */
import { defineConfig } from 'astro/config';
import markdoc from '@astrojs/markdoc';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://notlega.github.io',
  integrations: [markdoc(), react(), tailwind()],
});
