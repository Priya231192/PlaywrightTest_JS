import { test} from "@playwright/test"

test("Verify mouse hover check", async function ({ page }) {
    // Navigate to the login page
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    // Fill in the email and password
    await page.getByPlaceholder("Enter Email").fill("admin@email.com");
    await page.getByPlaceholder("Enter Password").fill("admin@123");

    // Click the "Sign in" button
    await page.getByRole("button", { name: "Sign in" }).click();

    // Hover over the "Manage" text
    await page.locator("//span[text()='Manage']").hover();

    // Click the "Manage Courses" link
    await page.locator("//a[normalize-space()='Manage Courses']").click();
});