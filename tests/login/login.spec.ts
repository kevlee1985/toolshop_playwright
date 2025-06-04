import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/login/loginPage";

// test("Succesful Login", async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();
//   await loginPage.login("kev_lee2002@hotmail.com", "22P@ignton");
//   await expect(page.getByTestId("nav-menu")).toContainText("kevin lee");
// });

test("@smoke Unsucesful Login", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("customer@incorrect.com", "welcome01");
  await expect(page.locator("div.help-block")).toContainText(
    "Invalid email or password"
  );
});

test("Empty Fields when logging in", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.loginButton.click();
  await expect(page.getByTestId("password-error")).toContainText(
    "Password is required"
  );
  await expect(page.getByTestId("email-error")).toHaveText("Email is required");
});

test("Invalid formatted email", async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login("customer", "welcome01");
  await expect(page.getByTestId("email-error")).toHaveText(
    "Email format is invalid"
  );
});
