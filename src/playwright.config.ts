import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./src/tests",
  use: {
    baseURL: "https://main.dosl6rwrhoxpw.amplifyapp.com/", // 👈 this must match your Vite dev server port
    headless: true,
  },
  webServer: {
    command: "npm run dev",
    port: 5173,
    reuseExistingServer: !process.env.CI,
  },
});
