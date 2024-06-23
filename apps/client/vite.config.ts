import { defineConfig } from "vite";
import mkcert from "vite-plugin-mkcert";
import react from "@vitejs/plugin-react";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react(), mkcert()],
  resolve: {
    alias: [
      { find: "#app", replacement: resolve(__dirname, "./src") },
      { find: "#assets", replacement: resolve(__dirname, "./src/assets") },
      {
        find: "#components",
        replacement: resolve(__dirname, "./src/components"),
      },
      {
        find: "#constants",
        replacement: resolve(__dirname, "./src/constants"),
      },
      { find: "#contexts", replacement: resolve(__dirname, "./src/contexts") },
      { find: "#hooks", replacement: resolve(__dirname, "./src/hooks") },
      { find: "#services", replacement: resolve(__dirname, "./src/services") },
      { find: "#types", replacement: resolve(__dirname, "./src/types") },
      { find: "#utils", replacement: resolve(__dirname, "./src/utils") },
      { find: "#pages", replacement: resolve(__dirname, "./src/pages") },
    ],
  },
});
