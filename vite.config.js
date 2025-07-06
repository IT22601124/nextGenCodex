import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-app/', // Replace 'my-app' with your actual repository name
  build: {
    outDir: 'dist',
  }
})