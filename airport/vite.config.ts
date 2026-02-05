import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "0.0.0.0", // чтобы сервер был доступен на всех интерфейсах
    port: 3000,
  },
});
