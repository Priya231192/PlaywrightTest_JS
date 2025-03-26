import { test, expect } from "@playwright/test"

test("Verify Error Message", async function ({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //using placeholder
     await page.getByPlaceholder("username").fill("Admin")


    //css locator ---- invalid password
    await page.locator("input[name='password']").pressSequentially("Admin1234")

    //Xpath locator starts with //
    await page.locator("//button[@type='submit']").click()

    //Xpath with contains

   const errorMessage = await page.locator("//p[contains(@class,'alert-content-text')]").textContent()

   //partial verification
   expect(errorMessage.includes("Invalid")).toBeTruthy()

   expect(errorMessage=="Invalid credentials").toBeTruthy()

})