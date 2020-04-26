/* JavaScript Executor : should use javascript executor only when
not able to perform particular task with our protractor like click an element.

Javascript executor is an interface under protractor package.
three diffrenet types : executeScript(), executeAsyncScript(), executeScriptWithDescription()
*/


module.exports = new function() {
    this.clickElement = function(element) {
        if(browser.findElement == id) {
            browser.executeScript(document.getElementById(element).click())            
        }
        if(browser.findElement == name) {
            browser.executeScript(document.getElementByName(element).click())
        }
        if(browser.findElement == className) {
            browser.executeScript(document.getElementByClassName(element).click())
        }
        if(browser.findElements == tagName ) {
            browser.executeScript(document.getElementsByTagName(element).click())
        }
    }

    this.sendValues = function(element, values) {
        if(browser.findElement == id) {
            browser.executeScript(document.getElementById(element).value = values)            
        }
        if(browser.findElement == name) {
            browser.executeScript(document.getElementByName(element).value = values)
        }
        if(browser.findElement == className) {
            browser.executeScript(document.getElementByClassName(element).value = values)
        }
        if(browser.findElements == tagName ) {
            browser.executeScript(document.getElementsByTagName(element).value = values)
        }
    }
    this.findElementById = function(element) {
        browser.executeScript(document.getElementById(element).click())
    }

    this.findElementByClassName = function(element) {
        browser.executeScript(document.getElementByClassName(element).click())
    }

    this.getTitleOfPage = function() {
        browser.executeScript(document.title).then(function(title) {
            return title
        })
    }
    
    this.getUrlOfPage = function() {
        browser.executeScript(document.URL).then(function(url) {
            return url
        })
    }

    this.webPageLoaded = function() {
        browser.executeScript(document.readyState).then(function(state) {
            return state
        })
    }

    this.scrollPageDown = function(number) {
        browser.executeScript(document.scrollPageDown(number), 1000)
    }
    
    this.scrollPageUp = function(number) {
        browser.executeScript(document.scrollPageUp(number))
    }
}