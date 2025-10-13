import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/letz-assessoria/", // 👈 coloque o nome do repositório aqui
});
