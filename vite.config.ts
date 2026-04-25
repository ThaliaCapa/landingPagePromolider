import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === 'UNRESOLVED_IMPORT') return
        warn(warning)
      }
    }
  }
})