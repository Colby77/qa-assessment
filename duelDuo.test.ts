
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(2000)
})

test('Clicking draw button displays div with id choices', async () => {
    let drawBtn = await driver.findElement(By.id('draw'))
    await driver.sleep(2000)

    await drawBtn.click()
    await driver.sleep(2000)

    let choices = await driver.findElement(By.id('choices'))
    await driver.sleep(2000)
    let choicesDisplayed = await choices.isDisplayed()
    expect(choicesDisplayed).toBe(true)
    await driver.sleep(2000)
    console.log('choices displayed')
    await driver.sleep(3000)
})

// second automated test doesn't work
test('Clicking add to duo displays player-duo div', async () => {
    // let addBot = await driver.findElement(By.xpath('//div[@class="bot-card outline"'))
    let addBot = await driver.findElement(By.xpath('(//button[@class="bot-btn"])'))
    // let addBot = await driver.findElement(By.className('bot-btn'))
    await addBot.click()
    await driver.sleep(3000)
})

afterAll(async () => {
    driver.quit()
})

