const { browser, element, by } = require('protractor')

let emailAddress =  element(by.id('i0116'))
let password =  element(by.name("passwd"))
let nextButton  =  element(by.xpath("//input[@class='btn btn-block btn-primary']"))
let signIn = element(by.id('idSIButton9'))
let onClick = element(by.xpath("(//div[@class='row tile'])[1]"))

module.exports = new  function() {

    this.loginToTheAppliction =  function(enterEmailAddress, enterPassword) {
        browser.sleep(4000)
        if (emailAddress.isDisplayed()){
            try {
                browser.sleep(4000)
                emailAddress.sendKeys(enterEmailAddress)
                browser.sleep(3000)
                nextButton.click()
                 browser.sleep(3000)
                password.sendKeys(enterPassword)
                nextButton.click()
                browser.sleep(3000)
                try {
                    signIn.click()
                } catch (error) {
                     return error
                }
            }
            catch(error) {
                return error
            }       
        }         

    }

    this.loginWithOnClick =  function(passwd) {
        browser.sleep(3000)
        onClick.click()
        browser.sleep(3000)
        password.sendKeys(passwd)
        nextButton.click()
        browser.sleep(3000)
        try {
            signIn.click()
        } catch (error) {
             return error
        }

    }
     
}

