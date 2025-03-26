import { test, expect } from "@playwright/test"

// Load the JSON data (ensure you have a file path and correct structure)
const testdata = JSON.parse(JSON.stringify(require("../../testDataID.json")));

// Filter the test data to get the user with id 567
const JiraNo = testdata.filter(Id => Id.JiraID === 567);

test.describe("First test case", function () {

  test("Login - Test case 1", async function ({ page }) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    if (JiraNo.length > 0) {

      console.log(JiraNo.length)

      const userdata = JiraNo[0];  
      
      await page.getByPlaceholder("username").fill(userdata.username)

      await page.locator("input[name='password']").pressSequentially(userdata.password)

    } else {

    console.log("User data not found for id 567.");

    }

  });

}

);

const test2 = testdata.filter(Id => Id.JiraID === 800);

test.describe("Second test case", function () {

  test("Login - Test case 2", async function ({ page }) {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    if (test2.length > 0) {

      console.log(test2.length)

      const userdata = test2[0];  
      
      await page.getByPlaceholder("username").fill(userdata.username)

      await page.locator("input[name='password']").pressSequentially(userdata.password)

    } else {

    console.log("User data not found for id 800.");

    }

  });

}

)