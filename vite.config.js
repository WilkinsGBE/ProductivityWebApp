import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ProductivityWebApp/",
  esbuild: {
    loader: 'jsx', // Use JSX loader for JavaScript files
    include: /src\/.*\.(js|jsx)$/, // Apply only to files in the src folder
    exclude: /node_modules/, // Properly exclude node_modules folder
  },
});
