import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://nhatnam.github.io',
  output: 'static',
  integrations: [sitemap()],
});
