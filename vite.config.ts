import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Components': '/src/components',
      '@Nav': '/src/Components/Nav/Nav.tsx',
      '@utils': '/src/utils',
    }
  }
})
