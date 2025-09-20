import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/withdrawal-simulator/', // Replace 'withdrawal-simulator' with your actual repository name
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
