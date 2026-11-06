// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.new/config
export default defineConfig({
  site: 'https://joaqu.github.io/suzanne-collins-fan-site',
  outDir: './dist',
  // Keep .html filenames in dist/ so existing relative links (collections.html, map.html…) work unchanged.
  build: { format: 'file' },
  // Keep the existing plain-HTML pages usable as Astro pages.
  // The canonical pages stay in src/*.html; src/pages/*.html are
  // the copies Astro builds into dist/ (see AGENTS.md note).
});
