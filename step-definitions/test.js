/*const {Given, when, then, Before, After} = require('@cucumber/cucumber')
const {expect} = require('chai');
const { By } = require('selenium-webdriver');
const {setDefaultTimeout} = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

//let driver = new webdriver.Builder()
//.forBrowser('chrome')
//.build();
let driver

Before(function () {
    driver = new webdriver.Builder().forBrowser('chrome').build();
}
)

After(function () {
    driver.quit();
})

Given('I visit google homepage', async () => {
    await driver.get("https://www.google.com");
}
);

When ('I When I seach for Techverito', async () => {
    await driver.findElement(By.name('q')).sendKeys('Techverito'+'\n')
}
);

Then ('I should see the results', async () => {
    let text = await driver.findElement(By.id('search')).getText()
    console.log(text);
})*/
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { By } = require('selenium-webdriver');

Given('I visit google homepage', async () => {
  // Write code to navigate to the Google homepage
  await driver.get('https://www.google.com');
});

When('I search for Techverito', async () => {
  // Write code to perform the search for Techverito
  await driver.findElement(By.name('q')).sendKeys('Techverito\n');
});

Then('I should see the results', async () => {
  // Write code to verify the search results
  let text = await driver.findElement(By.id('search')).getText();
  console.log(text);
});



