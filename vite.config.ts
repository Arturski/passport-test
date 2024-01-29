// @ts-nocheck
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "buffer": "buffer",
      // util: "util",
      jsbi: path.resolve(__dirname, "node_modules/jsbi"),
      'events': path.resolve(__dirname, 'node_modules/events'),
      'stream': path.resolve(__dirname, 'node_modules/stream-browserify'),
      'process': path.resolve(__dirname, 'node_modules/process'),
      'crypto': path.resolve(__dirname, 'node_modules/crypto-browserify'),
      'crypto-browserify': path.resolve(__dirname, 'node_modules/crypto-browserify'),
      'https-browserify': path.resolve(__dirname, 'node_modules/https-browserify'),
      'os-browserify': path.resolve(__dirname, 'node_modules/os-browserify'),
      'stream-http': path.resolve(__dirname, 'node_modules/stream-http'),
      https: 'agent-base',
      './runtimeConfig': './runtimeConfig.browser',
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
