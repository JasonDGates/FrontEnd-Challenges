import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/FrontEnd-Challenges",
  plugins: [react()],
  assetsInclude: ["**/*.png"],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
