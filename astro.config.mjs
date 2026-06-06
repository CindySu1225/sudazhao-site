import { defineConfig } from 'astro/config';

// Custom domain served at the root, so no `base` subpath is needed.
export default defineConfig({
  site: 'https://www.sudazhao.com',
  image: {
    // Generate responsive, optimized derivatives from full-res originals.
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
});
