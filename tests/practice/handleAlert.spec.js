import { test, expect } from "@playwright/test"


test("Handle Alert", async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    console.log("Before Alert")

    page.on('dialog', async (d)  => {  //listeners
    
    expect(d.type()).toContain("alert")

    console.log("Message : " +d.message())

    expect(d.message()).toContain("I am a JS Alert")

    await d.accept()

    console.log("Handled Alert")

    } )

    await page.locator("//button[text()='Click for JS Alert']").click();

});

test("Handle Confirm", async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    console.log("Before Confirm")

    page.on('dialog', async (d)  => {
    
    expect(d.type()).toContain("confirm")

    console.log("Message : " +d.message())

    expect(d.message()).toContain("I am a JS Confirm")

    await d.dismiss()

    console.log("Handled confirm")

    } )

    await page.locator("//button[text()='Click for JS Confirm']").click();

});

test("Handle Prompt", async function ({page}) {

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    console.log("Before Prompt")

    page.on('dialog', async (d)  => {
    
    expect(d.type()).toContain("prompt")

    console.log("Message : " +d.message())

    expect(d.message()).toContain("I am a JS prompt")

    await d.accept("Priya")

    console.log("Handled Prompt")

    } )

    await page.locator("//button[text()='Click for JS Prompt']").click();

});