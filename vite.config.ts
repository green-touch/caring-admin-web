import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg?react",
    }),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "src"),
      "@_assets": path.resolve(__dirname, "src/assets"),
      "@_components": path.resolve(__dirname, "src/components"),
      "@_features": path.resolve(__dirname, "src/features"),
      "@_hooks": path.resolve(__dirname, "src/hooks"),
      "@_navigation": path.resolve(__dirname, "src/navigation"),
      "@_pages": path.resolve(__dirname, "src/pages"),
      "@_services": path.resolve(__dirname, "src/services"),
      "@_styles": path.resolve(__dirname, "src/styles"),
      "@_types": path.resolve(__dirname, "src/types"),
      "@_utils": path.resolve(__dirname, "src/utils"),
      "@_zustand": path.resolve(__dirname, "src/zustand"),
    },
  },
});
