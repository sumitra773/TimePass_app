// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // 👈 important if your Render URL is https://.../multistep-form
  plugins: [react()],
})
