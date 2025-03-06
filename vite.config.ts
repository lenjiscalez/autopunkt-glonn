import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    assetsInlineLimit: 0, // Ensure assets are not inlined
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          ui: ['framer-motion', 'lucide-react', 'react-hook-form'],
        },
      },
    },
    sourcemap: true,
    chunkSizeWarningLimit: 1000,
  },
  publicDir: 'public',
  server: {
    host: true,
    port: 3000,
    strictPort: true,
    hmr: {
      overlay: true,
    },
  },
  preview: {
    port: 4173,
  },
});