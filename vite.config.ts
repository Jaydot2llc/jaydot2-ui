import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: [
      { 
        find: './runtimeConfig', 
        replacement: './runtimeConfig.browser' // ensures browser-compatible AWS JS SDK is used
      }
    ]
  },
  define: {
    global: 'window' // polyfill the global object if you see "global is not defined"
  }
})