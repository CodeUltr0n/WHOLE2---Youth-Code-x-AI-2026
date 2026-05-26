import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
     tailwindcss(),
  ],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-lottie': ['lottie-react', '@lottiefiles/react-lottie-player'],
          'vendor-icons': ['lucide-react', '@fortawesome/react-fontawesome', '@fortawesome/free-brands-svg-icons'],
        }
      }
    }
  },
  server:{
    proxy:{
      '/api': {
        target: 'http://127.0.0.1:5000', // Your Flask server address
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // remove /api before sending to Flask
      },
    }
  }
})
