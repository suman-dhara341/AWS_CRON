import { test, expect } from "@playwright/test";

test("login should show welcome message", async ({ page }) => {
  await page.goto("https://main.dosl6rwrhoxpw.amplifyapp.com/");

  await page.getByPlaceholder("Enter email").fill("user@example.com");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Welcome, user@example.com!")).toBeVisible();
});
