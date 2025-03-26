import { test, expect } from "@playwright/test"


test("Upload File Test", async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/upload")

    await page.locator("#file-upload").setInputFiles("C:\\Users\\dprakash\\playwright\\FileUploads\\imagetest.png");

    await page.locator("#file-submit").click()

    expect(await page.locator("//h3")).toHaveText("File Uploaded!")

});