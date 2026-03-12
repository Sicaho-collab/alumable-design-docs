import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/alumable-design-docs/' : '/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['@sicaho-collab/m3-design-system'],
  },
  server: {
    port: 5175,
    watch: {
      ignored: ['!**/node_modules/@sicaho-collab/**'],
    },
  },
})
