
const fs = require('fs');
const path = require('path')


class BaseTest {
  
  // Before each test - navigate to app URL
  async beforeEach({ page }) {
    console.log('Running setup before each test');

    // Load the properties from the file
    const properties = this.loadProperties("config.properties")

    const appUrl = properties['APP_URL'];
    
    console.log("appUrl : " +appUrl)

    if (!appUrl) {
        throw new Error('APP_URL not found in the properties file');
    }

    await page.goto(appUrl);
}

// After each test - close the browser
async afterEach({ browser }) {
    console.log('Closing the browser after each test');
    await browser.close();  // Close the browser instance after the test
}

// Function to load properties from a .properties file
loadProperties(filePath) {
    const properties = {};

    // Use path.resolve() to create the absolute file path
    const resolvedFilePath = path.resolve(__dirname, '..', filePath);

    // Read the content of the properties file
    const fileContent = fs.readFileSync(resolvedFilePath, 'utf8');

    
    // Split the file into lines
    const lines = fileContent.split('\n');

    lines.forEach(line => {
        // Ignore empty lines and comments
        if (line.trim() === '' || line.startsWith('#')) return;

        // Split each line into key and value
        const [key, value] = line.split('=');

        // If key and value exist, trim and add to properties object
        if (key && value) {
            properties[key.trim()] = value.trim();
        }
    });

    return properties;
}
}

module.exports = BaseTest;
