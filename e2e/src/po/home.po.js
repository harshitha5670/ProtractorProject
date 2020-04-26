const { browser,element,by } = require('protractor')
const method = require('../lib/methods.lib')

let search = element(by.xpath("//div[@class='input-group search-bar-box']//input"))
let addSubscriber = element(by.id('subscription'))
let addClient = element(by.id('client'))
let addViewPayment = element(by.id('payment'))
let otherAdjustement = element(by.id('adjustment'))
let uploadSheets = element(by.id('upload'))
let account = element(by.xpath("//div[@class='user-profile-box']/img"))
let logout = element(by.xpath("//span[.='Logout']"))
let hear2 = element(by.xpath("//div[@class='logo-container']/img"))
let enrollmentTerm = element(by.id('et'))
let outbound = element(by.id('ediout'))

module.exports = new  function() {

    this.searchTextbox =  function (values) {
        method.downArrow(search, values, 4000)
        browser.sleep(3000) 
        console.log(`Page navigated to "${browser.getCurrentUrl}" `)
     }
    
        this.navigateToAddSubscriberScreen =  function() {
          method.clickOnElement(addSubscriber)
          let expectedUrl = '/#/newsubscriber/add-subscriber'
          let actualUrl = browser.getCurrentUrl()
          expect(actualUrl).toContain(expectedUrl)
      }
    
        this.navigateToClientScreen =  function() {
          method.clickOnElement(addClient)
          let expectedUrl = '/#/client/clientInfo'
          let actualUrl = browser.getCurrentUrl()
          expect(actualUrl).toContain(expectedUrl)
      }
    
      this.navigateToaAddViewPaymentScreen =  function () {
        method.clickOnElement(addViewPayment)
        let expectedUrl = '/#/payments/records'
        let actualUrl = browser.getCurrentUrl()
        expect(actualUrl).toContain(expectedUrl)
       
        }
    
        this.navigateToOtherAdjustementScreen =  function() {
          method.clickOnElement(otherAdjustement)
          let expectedUrl = '/#/payments/otherAdj/records'
          let actualUrl = browser.getCurrentUrl()
          expect(actualUrl).toContain(expectedUrl)
             
        }
    
        this.navigateToUploadSheetsScreen =  function() {
          method.clickOnElement(uploadSheets)
          let expectedUrl = '/#/dashboard/upload/7'
          let actualUrl = browser.getCurrentUrl()
          expect(actualUrl).toContain(expectedUrl)
        }
    
        this.account =  function() {
           account.click()
            browser.sleep(3000)
        }
    
        this.logout =  function() {
            logout.click() 
            browser.sleep(3000)       
        }

      this.navigateToEnrollmentTransferScreen = function() {
        method.clickOnElement(enrollmentTerm)
        let expectedUrl = '/#/enrollmenttransfer/changeplans'
        let actualUrl = browser.getCurrentUrl()
        expect(actualUrl).toContain(expectedUrl)
      }

      this.navigateToOutboundScreen = function() {
        method.clickOnElement(outbound)
        let expectedUrl = '/#/outbound/reportsummary'
        let actualUrl = browser.getCurrentUrl()
        expect(actualUrl).toContain(expectedUrl)
      }

      this.NavigateBackToDashboardScreen = function(){
        method.clickOnElement(hear2)
        let expectedUrl = '/#/dashboard'
        let actualUrl = browser.getCurrentUrl()
        expect(actualUrl).toContain(expectedUrl)
    }
}
