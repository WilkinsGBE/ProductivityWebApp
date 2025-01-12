import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ProductivityWebApp/",
  esbuild: {
    loader: 'jsx', // Treat .js and .jsx files as JSX
    include: /src\/.*\.(js|jsx)$/, // Apply only to files in the src folder
    exclude: /node_modules/, // Properly exclude node_modules folder
  },
});
