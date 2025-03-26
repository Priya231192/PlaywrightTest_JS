import { test,expect } from "@playwright/test"

test("Wait for load state", async ({page}) => {

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    //locator --> text()

    await page.locator("//a[text()='New user? Signup']").click()

    // await page.waitForTimeout(5000)

    await page.waitForLoadState("networkidle")

    const count = await page.locator("//input[@type='checkbox']").count()

    console.log("checkbox count is " +count)

    expect(count).toBe(10)

});