import { defineConfig } from "vite"
import { nitro } from "nitro/vite"
import { solidStart } from "@solidjs/start/config"
import tailwindcss from "@tailwindcss/vite"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default defineConfig({
  plugins: [
    solidStart(),
    // Landing page prerendered at build (view-source must show real content).
    // Requires bun --bun vite build: nitro's prerenderer runs in worker_threads
    // of the current runtime. /ui and /footage are dev tools — SSR, no prerender.
    nitro({ prerender: { crawlLinks: false, routes: ["/"] } }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  // @basalt/ui ships .tsx source — keep it out of esbuild pre-bundling and
  // SSR externals so the solid plugin compiles the JSX.
  optimizeDeps: { exclude: ["@basalt/ui"] },
  ssr: { noExternal: ["@basalt/ui"] },
})
