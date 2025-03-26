import { test, expect } from "@playwright/test"

const testdata = JSON.parse(JSON.stringify(require("../../testData.json")))

test("Login -Use jsoon file", async function ({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //Running Sample Data

    // await page.getByPlaceholder("username").fill(testdata.username)

    // await page.getByPlaceholder("username").fill(testdata.address.street)

    await page.getByPlaceholder("username").fill(testdata.phone[1])

    await page.locator("input[name='password']").pressSequentially(testdata.password)


}
);