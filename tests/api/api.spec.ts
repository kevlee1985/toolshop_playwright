import { test, expect } from "@playwright/test";
import { TestData } from "../../utils/TestData";
import { log } from "console";

test("GET /products", async ({ request }) => {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response = await request.get(apiUrl + "/products");

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.data.length).toBe(9);
  expect(body.total).toBe(50);
});

test("POST /users/login", async ({ request }) => {
  const apiUrl = "https://api.practicesoftwaretesting.com";
  const response = await request.post(apiUrl + "/users/login", {
    data: {
      email: TestData.loginEmail,
      password: TestData.loginPassword,
    },
  });

  expect(response.status()).toBe(200);
  const body = await response.json();
  expect(body.access_token).toBeTruthy();
});

test("POST /users/register - handle already registered users", async ({
  request,
}) => {
  const apiUrl = "https://api.practicesoftwaretesting.com";

  const response = await request.post(apiUrl + "/users/register", {
    data: {
      first_name: TestData.firstName,
      last_name: TestData.lastName,
      dob: TestData.dateOfBirth,
      phone: TestData.phoneNumber,
      email: TestData.loginEmail, // might already be registered
      password: TestData.loginPassword,
      address: {
        street: TestData.defaultAddress.street,
        city: TestData.defaultAddress.city,
        state: TestData.defaultAddress.state,
        country: TestData.defaultAddress.countryCode,
        postal_code: TestData.defaultAddress.postalCode,
      },
    },
  });

  const status = response.status();

  if (status === 201) {
    const body = await response.json();
    console.log(body);
    console.log("✅ Registration successful. User ID:", body.id);
    expect(body).toHaveProperty("id");
  } else if (status === 422) {
    const body = await response.json();
    console.log("⚠️ User already registered:", body);
    expect(body).toHaveProperty("email");
    expect(Array.isArray(body.email)).toBe(true);
    expect(body.email[0]).toContain("already exists");
  } else {
    throw new Error(`❌ Unexpected status code: ${status}`);
  }
});
