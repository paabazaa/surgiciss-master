import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tsconfigPaths from "vite-tsconfig-paths"
import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"

export default defineConfig({
  base: "/surgiciss-master/",
  plugins: [
    tailwindcss(),
    tanstackStart({
      srcDirectory: "src",
    }),
    react(),
    tsconfigPaths()
  ],
})
