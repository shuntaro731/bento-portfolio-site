// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcssv4 from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins[tailwindcssv4()],
  }
});
