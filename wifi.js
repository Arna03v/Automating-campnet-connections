// write a script using ndode.js to connect to campnet wifi inteadd of doing it manually
const playwright = require('playwright');

async function wifi(){

    // initiate the browser
    const browser = await playwright.chromium.launch({
        headless:false
    });

    const page = await browser.newPage();

    // enter your own url here
    await page.goto('https://campnet.bits-goa.ac.in:8090/httpclient.html'); 

    // enter your username here
    await page.fill('input[name="username"]', 'f20212092');

    // enter your password here
    await page.fill('input[name="password"]', 'enter-your-password-here');
    await page.$eval('div#loginbutton', item =>{
        item.click();
    });

    // await page.waitForTimeout(500); // incase you want to wait to see the 'you are signed in' page
    await browser.close();
    
}

wifi();