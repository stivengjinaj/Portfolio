import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "@tailwindcss/vite";
import tanstackRouter from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
    base: '/Portfolio/',
  plugins: [
      tanstackRouter({
          target: 'react',
          autoCodeSplitting: true,
      }),
      tailwindcss(),
      react()
  ],
})
