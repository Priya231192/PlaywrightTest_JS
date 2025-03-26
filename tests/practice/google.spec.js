const { test,expect } = require("@playwright/test")

test("Verify Google Page", async function ({page}) {

    await page.goto("https://google.com")

    const baseURL = page.url()

    console.log("Page URL " +baseURL)


    const title = await page.title()

    console.log("Page Title " +title)

    await expect(page).toHaveTitle("Google")

});
