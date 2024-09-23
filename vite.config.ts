import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolve = (route: string) => path.resolve(__dirname, route)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Components': resolve('./src/Components'),
      '@Nav': resolve('./src/Components/Nav/Nav.tsx'),
      '@utils': resolve('./src/utils'),
    }
  }
})
