const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.blue-frontend.com/about');

  await page.waitForSelector('.about__team');

  await page.screenshot({path: 'bf.png', fullPage: true});

  await browser.close();
})();