import { test, expect } from "@playwright/test";

test("login should show welcome message", async ({ page }) => {
  await page.goto("https://main.dosl6rwrhoxpw.amplifyapp.com/");

  await page.getByPlaceholder("Enter email").fill("user@example.com");
  await page.getByRole("button", { name: "Login" }).click();
  console.log("Build successfully playwright test");
  console.log("Build successfully playwright test 2");

  await expect(page.getByText("Welcome, user@example.com!")).toBeVisible();
});
