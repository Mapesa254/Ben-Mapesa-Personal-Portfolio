import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig(({ command }) => ({
  base: command === "build"
    ? "/Ben-Mapesa-Personal-Portfolio/"  //  Production (GitHub Pages)
    : "/",                                //  Development (localhost)

  plugins: [
    tailwindcss(),
  ]
}))