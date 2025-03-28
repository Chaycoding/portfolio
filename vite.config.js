import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ["./src/**/*.jsx", "./src/**/*.js"],
    }),
  ],
  // server: { port: 3000 },
  base: "/portfolio/",
});
