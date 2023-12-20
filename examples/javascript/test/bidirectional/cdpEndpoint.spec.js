const Chrome = require('selenium-webdriver/chrome');
const {suite} = require('selenium-webdriver/testing');
const {Browser} = require("selenium-webdriver");
const options = new Chrome.Options();

suite(function (env) {
  describe('Chrome DevTools Protocol Endpoint', function () {
    it('Basic authentication ', async function () {
      const Options = new Chrome.Options();
      let driver = await env
        .builder()
        .setChromeOptions(Options)
        .build();
      const connection = await driver.createCDPConnection('page')
      await driver.register("username", "password", connection);
      await driver.get('https://www.selenium.dev/selenium/web/blank.html');
      await driver.quit();
    });
  });
}, { browsers: [Browser.CHROME]});
