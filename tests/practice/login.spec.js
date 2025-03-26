import { test, expect } from "@playwright/test"

//viewport test level

test.use({viewport:{width:1272,height:602}})

test("Verify Login Page", async function ({page}) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    //using placeholder
    // await page.getByPlaceholder("username").fill("Admin")

    // delay ---- await page.getByPlaceholder('username').type('Admin', { delay: 100 });
    
    // Slowly fill the username using a custom approach
    const username = 'Admin';
    const usernameField = page.getByPlaceholder('username');
    
    for (let i = 0; i < username.length; i++) {
        await usernameField.fill(username.substring(0, i + 1)); // Incrementally fill characters
        await page.waitForTimeout(100); // 100ms delay between each character
    }

    //css locator
    await page.locator("input[name='password']").pressSequentially("admin123")

    //Xpath locator starts with //
    await page.locator("//button[@type='submit']").click()

    //eg wait for debugging
    await page.waitForTimeout(2000)

    await expect(page).toHaveURL(/dashboard/);
   
    // 'profile picture' got two elements so using the first one
    await page.getByAltText("profile picture").first().click()

    //both as same ----- nth(0)  nth(1)
    // await page.getByAltText("profile picture").nth(0).click()

    //using direct text as logout
    await page.getByText("Logout").click()

    await expect(page).toHaveURL(/login/);

})