import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nnnam2609.github.io',
  output: 'static',
  integrations: [sitemap()],
});
