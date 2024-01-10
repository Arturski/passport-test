// @ts-nocheck
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      process: "process/browser",
      stream: "stream-browserify",
      "safe-buffer": "buffer",
      // util: "util",
      jsbi: path.resolve(__dirname, "node_modules/jsbi"),
    },
  },
  plugins: [
    nodePolyfills({
      globals: {
        Buffer: false,
        global: true,
        process: true,
      },
      protocolImports: true,
    }),
    react(),
  ],
});
