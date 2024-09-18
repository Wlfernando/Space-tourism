import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Components': path.resolve(__dirname, './src/components'),
      '@Nav': path.resolve(__dirname, './src/Components/Nav/Nav.tsx'),
      '@utils': path.resolve(__dirname, './src/utils'),
    }
  }
})
