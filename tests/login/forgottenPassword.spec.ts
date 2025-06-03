import { test, expect } from "@playwright/test";
import { ForgottenPasswordPage } from "../../pages/login/forgottenPassword";

test.describe("Checkout challenge", async () => {
  test.use({ storageState: ".auth/customer01.json" });

  test("reset password", async ({ page }) => {
    const forgottenPassword = new ForgottenPasswordPage(page);
    await forgottenPassword.goto();
    await forgottenPassword.resetPassword("test@test.com");
  });
});
