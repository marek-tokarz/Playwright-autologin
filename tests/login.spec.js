const {test} =require('@playwright/test')

test("Login",async function({page}){

    await page.goto("https://studia-online.pl/konto")

    await page.getByPlaceholder("Podaj login").type("marek.tokarz14@gmail.com")
    // login hashed in order to hide it

    await page.locator("input[name='pass']").type("#######") // password hashed in order to hide it

    await page.locator("input[value='Zaloguj']").click()
    
    // await page.locator("//button[@type='submit']").click()

    await page.pause(); // to keep the browser open
})