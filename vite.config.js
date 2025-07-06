import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   optimizeDeps: {
    include: ['i18next-http-backend']
  },
  resolve: {
    extensions: ['.js', '.jsx'] // Isso ajuda na resolução de imports
  }
});
