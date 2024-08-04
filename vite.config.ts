/// <reference types="vitest" />
import { defineConfig } from "vite";

export default defineConfig({
  test: {
    globals: true,
  },
  build: {
    lib: {
      entry: "./lib/main.tsx",
      name: "I18n",
      fileName: "i18n",
    },
  },
});
