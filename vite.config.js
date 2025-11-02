import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// ✅ Tailwind 4 + React 19 config
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",
});
