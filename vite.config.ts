import { defineConfig } from "vite"
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  base: '/Ben-Mapesa-Portfolio/',
  plugins: [
    tailwindcss(),
  ],
})
