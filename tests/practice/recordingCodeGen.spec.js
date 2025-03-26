import { test, expect } from '@playwright/test';

//C:\Users\dprakash\playwright>npx  playwright codegen https://opensource-demo.orangehrmlive.com/web/index.php/auth/login -o ./tests/recordingCodeGen.spec.js

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('span').filter({ hasText: 'manda user' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});