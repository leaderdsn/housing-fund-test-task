import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8001,
    host: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
    extensions: ['.js', '.sass'],
  },

  plugins: [vue(), eslintPlugin({ cache: false })], 
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
          @import "@/styles/styles.sass"
        `,
      },
    },
  },
})
