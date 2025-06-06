import { test, expect } from "@playwright/test";
import { ForgottenPasswordPage } from "../../pages/login/forgottenPassword";

test.describe("forgot password scenarios", async () => {
  test.use({ storageState: ".auth/customer01.json" });

  test("reset password", async ({ page }) => {
    const forgottenPassword = new ForgottenPasswordPage(page);
    await forgottenPassword.goto();
    await forgottenPassword.resetPassword("test@test.com");
  });

  test("@smoke reset password empty email", async ({ page }) => {
    const forgottenPassword = new ForgottenPasswordPage(page);
    await forgottenPassword.goto();
    await forgottenPassword.resetPassword("");
    await forgottenPassword.emptyEmail;
  });
});


