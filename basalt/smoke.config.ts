// Client-bundle the smoke check (SSR transform doesn't apply under vite 8 --ssr).
import { mergeConfig, type ViteUserConfig } from "vite"
import base from "./vite.config"

export default mergeConfig(base as ViteUserConfig, {
  build: {
    outDir: ".smoke",
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      input: "smoke.tsx",
      // happy-dom is a Node lib — keep it out of the browser bundle; bun resolves it at runtime.
      external: [/@happy-dom\//, /^happy-dom$/],
      output: { entryFileNames: "smoke.js", format: "es" },
    },
  },
})
