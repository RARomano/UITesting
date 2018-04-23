# UI Testing
UI Testing using Headless (or not) Chrome and Puppeteer

## Overview
Sometimes we find ourselves in a position where we should maintain an existing codebase but we don't have any knowledge about it. To make our life even worse, there are no unit testing available and thus you don't have any confidence whether a change might break or not something in the system.

**IMPORTANT**: This method by no means replaces the need for testing your code. It just help you get through a situation and make a code-change less stressful.

After writting a good amount of tests, you could use it as regression test and save some hours of tests :)

So, what we could do about those scenarios?

There are a lot of available tools that we could use to do this kind of testing for us:
- Selenium WebDriver
- Protractor
- PhantomJS/CasperJS

But, why not use the Chrome itself for the job?

### Puppeteer
https://github.com/GoogleChrome/puppeteer
> Puppeteer is a Node library which provides a high-level API to control headless Chrome or Chromium over the DevTools Protocol. It can also be configured to use full (non-headless) Chrome or Chromium.

Puppeteer is a library created by Google that allows you to control Chrome and perform the tasks you want to do. 

## Running the solution
- Install the puppeteer `npm i puppeteer`
- Create a JavaScript file
```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.blue-frontend.com/about');

  await page.waitForSelector('.about__team');

  await page.screenshot({path: 'bf.png', fullPage: true});

  await browser.close();
})();
```

- run your file, i.e: `node index.js`

> After doing these steps, a full page screenshot will be saved at the same directory.


