import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: {
    host: "0.0.0.0",
    port: 8080,
    watch: {
      usePolling: true,
    },
  },
});
