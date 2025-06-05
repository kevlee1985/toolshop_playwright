import { test, expect } from "@playwright/test";
import { HomePage } from "../../pages/login/homePage";

test.describe("Home page with no auth", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://practicesoftwaretesting.com/");
  });

  // test("visual test", async ({ page }) => {
  //   await page.waitForLoadState("networkidle");
  //   await expect(page).toHaveScreenshot("home-page-no-auth.png", {
  //     mask: [page.getByTitle("Practice Software Testing - Toolshop")],
  //   });
  // });

  test("check sign in", async ({ page }) => {
    await expect(page.getByTestId("nav-sign-in")).toHaveText("Sign in");
  });

  test("validate page title", async ({ page }) => {
    await expect(page).toHaveTitle(
      "Practice Software Testing - Toolshop - v5.0"
    );
  });

  test("add item to basket", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.addItem("Thor Hammer");
  });

  // test("grid loads with 9 items", async ({ page }) => {
  //   const productGrid = page.locator(".col-md-9");
  //   await page.getByTestId("search-submit").click();
  //   await expect(productGrid.getByRole("link")).toHaveCount(9);
  //   expect(await productGrid.getByRole("link").count()).toBe(9);
  // });

  test("@smoke search for Thor Hammer", async ({ page }) => {
    const homePage = new HomePage(page);
    const productGrid = page.locator(".col-md-9");
    await homePage.search("Thor Hammer");
    await expect(productGrid.getByRole("link")).toHaveCount(1);
    await expect(page.getByAltText("Thor Hammer")).toBeVisible();
  });
});

// test.describe("Home page customer 01 auth", () => {
//   test.use({ storageState: ".auth/customer01.json" });
//   test.beforeEach(async ({ page }) => {
//     await page.goto("https://practicesoftwaretesting.com/");
//   });

// test("visual test authorized", async ({ page }) => {
//   await page.waitForLoadState("networkidle");
//   await expect(page).toHaveScreenshot("home-page-customer01.png", {
//     mask: [page.getByTitle("Practice Software Testing - Toolshop")],
//   });
// });

// test("check customer 01 is signed in", async ({ page }) => {
//   await expect(page.getByTestId("nav-sign-in")).not.toBeVisible();
//   await expect(page.getByTestId("nav-menu")).toContainText("Jane Doe");
// });
// });
