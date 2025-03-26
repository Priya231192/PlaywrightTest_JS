const { test,expect } = require('@playwright/test')

test("My First Test", async function ({page}) {
expect(100).toBe(100);
})