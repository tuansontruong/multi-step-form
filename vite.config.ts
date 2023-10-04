import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@common", replacement: resolve(__dirname, "./src/common") },
      { find: "@models", replacement: resolve(__dirname, "./src/models") },
      { find: "@hooks", replacement: resolve(__dirname, "./src/hooks") },
      { find: "@types", replacement: resolve(__dirname, "./src/types") },
    ],
  },
});
