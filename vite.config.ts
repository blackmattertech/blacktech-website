import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return;
          if (id.includes("@splinetool")) return "spline";
          if (id.includes("gsap")) return "gsap";
          if (id.includes("framer-motion")) return "motion";
          if (id.includes("hls.js")) return "hls";
          if (id.includes("react-router")) return "router";
        },
      },
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8787",
        changeOrigin: true,
      },
    },
  },
});
