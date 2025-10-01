import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  build: {
    // เพิ่มประสิทธิภาพการ build
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        // แยก chunks เพื่อเพิ่มประสิทธิภาพการโหลด
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@chakra-ui/react', '@chakra-ui/icons'],
          swiper: ['swiper'],
          utils: ['aos', 'react-feather']
        },
        // เพิ่มประสิทธิภาพการ cache
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]'
      }
    },
    // เพิ่มประสิทธิภาพการบีบอัด
    chunkSizeWarningLimit: 1000,
    cssCodeSplit: true,
    sourcemap: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@assets': resolve(__dirname, 'src/assets')
    }
  },
  server: {
    // เพิ่มประสิทธิภาพ dev server
    hmr: true,
    open: true
  },
  optimizeDeps: {
    // เพิ่มประสิทธิภาพการโหลด dependencies
    include: [
      'react',
      'react-dom',
      '@chakra-ui/react',
      '@chakra-ui/icons',
      'swiper',
      'aos',
      'react-feather'
    ]
  }
})


