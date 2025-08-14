import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // so you can access from LAN, or use 'localhost'
    port: 5174,      // change this to any port you want
  },
})
