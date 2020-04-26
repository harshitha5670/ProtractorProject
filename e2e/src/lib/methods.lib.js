const { browser,ExpectedConditions, element, protractor } = require ("protractor")
const {createWriteStream} = require('fs')

module.exports = new function() {

    this.clickOnElement = function(objElement) {
        try {
            const condition = ExpectedConditions.elementToBeClickable(element(objElement))
            browser.wait(condition,6000)
            element(objElement).click()
        } catch (e) {
            console.log('Error :' ,e)            
        }
    }

    this.typeValue = function(objElement, value) {
        try {
            const condition = ExpectedConditions.visibilityOf(element(objElement))
            browser.wait(condition, 6000)
            element(objElement).sendKeys(value)       
        } catch (e) {
            console.log('Error :' ,e)
            
        }
    }

    this.waitForVisibilityOfElement = function(locator) {
        const condition = ExpectedConditions.visibilityOf(element(locator))
        browser.wait(condition,6000)
    }

    this.waitForPageload = function() {
        browser.sleep(5000)
    }

    this.selectByIndex = function(element, index, milisecond) {
        element.then(function(options){
            options[index].click()
        })
        if(typeof milisecond !== 'undefined') {
            browser.sleep(milisecond)
        }
    }

    this.selectByVisibleText = function(element, visibleText, milisecond) {
        element.each(function(item){
            item.getAttribute('text').then(function(text){
                if(text == visibleText){
                    item.click()
                }
            })
        })
        if(typeof milisecond !== 'undefined') {
            browser.sleep(milisecond)
        }
    }

    this.downArrow = function(element, text, milisecond){
        element.sendKeys(text)
        browser.driver.sleep(milisecond)
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform()
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.driver.sleep(milisecond)
    }

    this.mouseHover = function(element){
        browser.actions().mouseMove(element.click()).perform()
    }

    this.windowHandle = function(element, handle) {
        element.click().then(function() {
            browser.getAllWindowHandles().then(function(handles) {
                browser.switchTo().window(handles[handle])
                browser.getTitle()
            })
        })
    }

    this.scrollUpThePage = function() {
        browser.executeScript('window.scrollTo(0,0)')
    }

    this.scrollDownThepage = function() {
        browser.executeScript('window.scrollTo(0,10000)')
    }

    this.takeScreenShots = function(){
        browser.takeScreenshot().then(function(png) {
            let stream = createWriteStream("exception.png")
            stream.write(new Buffer(png, 'base64'))
            stream.end()
        })
    }
}
