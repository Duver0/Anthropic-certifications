import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'static',
  site: 'https://Duver0.github.io/Anthropic-certifications',
  base: '/Anthropic-certifications',
  vite: {
    plugins: [tailwindcss()],
  },
});
