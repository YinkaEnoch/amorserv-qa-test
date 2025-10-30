const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const { strict: assert } = require("assert");

describe("Login Functionality Tests (Selenium)", function () {
  let driver;
  this.timeout(20000);

  before(async () => {
    const options = new chrome.Options();
    options.addArguments("--headless");
    options.addArguments("--no-sandbox");
    options.addArguments("--disable-dev-shm-usage");
    options.addArguments("--disable-gpu");

    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(options)
      .build();
  });

  after(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  beforeEach(async () => {
    await driver.get("http://localhost:8080/login.html");
  });

  it("should login successfully with valid credentials", async () => {
    await driver.findElement(By.id("username")).sendKeys("user");
    await driver.findElement(By.id("password")).sendKeys("password");
    await driver.findElement(By.id("loginButton")).click();

    const successMsg = await driver.wait(
      until.elementLocated(By.id("successMessage")),
      2000,
    );
    const isDisplayed = await successMsg.isDisplayed();
    assert.equal(isDisplayed, true);
  });

  it("should fail login with invalid credentials", async () => {
    await driver.findElement(By.id("username")).sendKeys("wrongusername");
    await driver.findElement(By.id("password")).sendKeys("wrongpassword");
    await driver.findElement(By.id("loginButton")).click();

    const errorMsg = await driver.wait(
      until.elementLocated(By.id("errorMessage")),
      2000,
    );
    const isDisplayed = await errorMsg.isDisplayed();
    assert.equal(isDisplayed, true);
  });
});
