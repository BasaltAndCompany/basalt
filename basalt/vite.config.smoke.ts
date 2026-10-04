// Smoke check builds as a plain client bundle — NOT through SolidStart
// (solidStart+nitro plugins need their own build context). Only the solid
// plugin + alias are needed to compile the route modules.
import { defineConfig } from "vite"
import solid from "vite-plugin-solid"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [solid()],
  resolve: { alias: { "@": resolve(__dirname, "./src") } },
  build: {
    outDir: ".smoke",
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      input: "smoke.tsx",
      // happy-dom is a Node lib — keep it out of the browser bundle; rtk bun resolves it at runtime.
      external: [/@happy-dom\//, /^happy-dom$/],
      output: { entryFileNames: "smoke.js", format: "es" },
    },
  },
})
