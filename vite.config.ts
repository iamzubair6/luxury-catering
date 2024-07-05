import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@assets": "/src/assets/",
      "@Components": "/src/Components/",
      "@Pages": "/src/Pages/",
      "@Layout": "/src/Layout/",
      "@Lib": "/src/Lib/",
    },
  },
});
