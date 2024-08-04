/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
  },
  build: {
    lib: {
      entry: "./lib/main.ts",
      name: "Counter",
      fileName: "counter",
    },
  },
});
