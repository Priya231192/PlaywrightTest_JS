import { test } from "@playwright/test"

    test('Handle Mutiple Tabs', async ({ browser }) => {   
        // Create a new browser context
        const context = await browser.newContext();
    
        // Open the first tab
        const page = await context.newPage();
        await page.goto('https://freelance-learn-automation.vercel.app/login');
    
        // Perform actions on both tabs in parallel using Promise.all
        const [newPage] = await Promise.all
        (
            [
                context.waitForEvent("page") ,

                page.locator("(//a[contains(@href,'facebook')])[1]").click()
   
            ]
        )
    
        await newPage.waitForTimeout(5000)

        newPage.locator("//span[text()='Create new account']").click()

        const page3 = await context.waitForEvent("page");

        page3.locator("//input[@name='firstname']").fill("autotest")

    });
    