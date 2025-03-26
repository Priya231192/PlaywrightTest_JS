import { test } from "@playwright/test"


test("Handle Fame", async function ({page}) {

    await page.goto("https://docs.oracle.com/javase/8/docs/api/")

   const frame = page.frameLocator("//frame[@name='packageListFrame']")

   frame.locator("//a[text() ='java.applet']").click()

   await page.pause()

});