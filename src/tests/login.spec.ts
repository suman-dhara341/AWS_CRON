import { test, expect } from "@playwright/test";

test("login should show welcome message", async ({ page }) => {
  await page.goto("http://localhost:5173");

  await page.getByPlaceholder("Enter email").fill("user@example.com");
  await page.getByRole("button", { name: "Login" }).click();

  await expect(page.getByText("Welcome, user@example.com!")).toBeVisible();
});
