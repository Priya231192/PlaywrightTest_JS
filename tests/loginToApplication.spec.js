const { test, expect } = require('@playwright/test');
const BaseTest = require("../Utils/BaseTest");
const LoginPage = require("../PageModel/loginPage");

const baseTest = new BaseTest();

const testdata = JSON.parse(JSON.stringify(require("../testdataApp.json")));

// Filter the test data to get the user with id 567
const JiraNo = testdata.filter(Id => Id.JiraID === 1234);


test.describe('Login Tests', () => {
    
    // Use `beforeEach` to navigate to the app URL before each test
    test.beforeEach(async ({ page }) => {
        // Call the instance method to navigate to the app URL
        await baseTest.beforeEach({ page });
    });

    test('Login successfully with valid credentials', async ({ page }) => {

        if (JiraNo.length > 0) {

            console.log(JiraNo.length)
      
            const userdata = JiraNo[0];  

        const loginPage = new LoginPage(page); // Create an instance of LoginPage
        
        // Perform login and verify the result
        console.log("Retrieved data from Json for email : " +userdata.useremail)
        console.log("Retrieved data from Json for password : " +userdata.password)

        await loginPage.loginToApplication(userdata.useremail, userdata.password);


    } else {

        console.log("User data not found for id 1234.");
    
        }
        
    });
});
