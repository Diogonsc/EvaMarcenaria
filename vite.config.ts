import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-label', '@radix-ui/react-slot'],
          icons: ['lucide-react', 'react-icons'],
          carousel: ['embla-carousel-react'],
          utils: ['clsx', 'class-variance-authority', 'tailwind-merge'],
          'pages-home': ['./src/pages/Home'],
          'pages-about': ['./src/pages/About'],
          'pages-products': ['./src/pages/Products'],
          'pages-contact': ['./src/pages/Contact'],
          'pages-work-with-us': ['./src/pages/WorkWithUs'],
          'pages-not-found': ['./src/pages/NotFound']
        }
      }
    },
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
})
