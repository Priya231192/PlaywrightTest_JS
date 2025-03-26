
import { test, expect } from "@playwright/test"


test("Verify drop down on the Page", async function ({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    // locator by id - label is visible by text - this is best option
    await page.locator("#state").selectOption({label:"Goa"})

    await page.waitForTimeout(2000)

    await page.locator("#state").selectOption({value:"Himachal Pradesh"})

    await page.waitForTimeout(2000)


    await page.locator("#state").selectOption({index:4})

    await page.waitForTimeout(2000)

    const dropdownVal = await page.locator("#state").textContent()

    await page.waitForTimeout(2000)

    console.log("All Drop down values  :  " +dropdownVal)

    await expect(dropdownVal.includes("Kerala")).toBeTruthy()
}
);

test("Verify drop down all element", async function ({page}) {

    await page.goto("https://freelance-learn-automation.vercel.app/signup")

    let state = await page.$("#state")

    // Use $$ when you need to interact with multiple elements on the page (e.g., a list of items, multiple options in a dropdown, etc.)
     options = await state.$$("option")

    for (let i = 0; i < options.length; i++) {

    let element = options[i]

    let value = await element.textContent()

    console.log("Value from the drop down : " +value)

}   
 
}
);



