const BasePage = require("../Utils/BasePage")

class LoginPage extends BasePage {

        constructor(page) {
        super(page);  // Call the parent class constructor to set the page object
        this.emailField = "//input[@placeholder='Enter Email']";
        this.passwordField = "#password1";
        this.submitButton = "//button[text()='Sign in']";

}

async loginToApplication(username, password) {
    await this.page.fill(this.emailField, username);  // Directly using page to interact
    await this.page.fill(this.passwordField, password);
    await this.page.click(this.submitButton);
}

}

module.exports=LoginPage;