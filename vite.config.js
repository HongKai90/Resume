import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@cp': fileURLToPath(new URL('./src/components', import.meta.url)),
      '@store': fileURLToPath(new URL('./src/stores', import.meta.url)),
    }
  },
  base: '/Resume/',
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          'import',
          // 'mixed-decls',
          'color-functions',
          'global-builtin',
          'if-function',
        ],
      },
    },
  },
})
