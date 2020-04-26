const {browser, element, by} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../../lib/common.lib')

let searchTextbox = element(by.xpath("//input[@class='   let h-check-number ng-pristine ng-valid ng-touched']"))
let viewButton = element.all(by.xpath("//button[.='View']"))
let viewPayment = element(by.xpath("//a[.='View Payments']"))
let filter = element(by.xpath("//div/img[@class ='filter-icon' and contains (@src,'../../../assets/img/ico-filter.svg')]"))
let searchCheckNumber = element(by.xpath("//div[@class='col-md-3 no-right-padding']/input"))
let clientId = element(by.xpath("//div[@class='row col-md-12 ']//input"))
let insurerId = element.all(by.xpath("//div[@class='insurer-id-container']/select/option"))
let checkAmountRange = element.all(by.xpath("//div[@class='check-amount-container']/select/option"))
let checkAmount = element(by.xpath("//div[@class='check-amount-container']//input"))
let applyButton = element(by.xpath("//button[.='Apply']"))
let cancelButton = element(by.xpath("//button[.='Cancel']"))
let backButton = element(by.xpath("//button[.='Back']"))
let depositDate = element.all(by.xpath("//div[2]/table//tr/td[3]"))
let clientName = element.all(by.xpath("//div[@class='grid-tooltip reason-code-ellipses truncate-client']"))
let productId = element.all(by.xpath("//div[@class='row col-md-12']//table//tr/td[2]"))


module.exports = new function() {

    this.viewButton = function(viewDetails) {
        method.selectByIndex(viewButton,viewDetails,3000)
    }
 
    this.viewPaymentPage = function() {
        viewPayment.click()
    }

    this.searchByCheckNumber = function(checkNumber) {
        searchCheckNumber.sendKeys(checkNumber)
        browser.actions().sendKeys(protractor.Key.ENTER).perform()
        browser.driver.sleep(3000)
    }
 
    this.addFilter = function() {
        browser.driver.sleep(3000)
        filter.click()
        browser.driver.sleep(3000)
    }

    this.enterClientID = function (id) {
      method.downArrow(clientId, id ,3000)
    }

    this.selectInsurerId = function(insurer) {
        method.selectByIndex(insurerId,insurer,3000)
    }

    this.depositFromDate = function(year,month,date) {
        common.calenderBox()
        common.selectYear(year)
        common.selectMonth(month)
        common.selectDate(date)
        browser.sleep(3000)
    }

    this.depositToDate = function(year,month,date) {
        browser.driver.sleep(3000)
        common.calenderBox()
        common.selectYear(year)
        common.selectMonth(month)
        common.selectDate(date)
        browser.sleep(3000)
    }

    this.selectCheckAmountrange = function(range) {
        method.selectByIndex(checkAmountRange,range)
    }

    this.enterCheckAmount = function(amount) {
        checkAmount.sendKeys(amount)
    }

    this.applyFilters = function() {
        applyButton.click()
        browser.sleep(3000)
    }

    this.cancelFilters = function() {
        cancelButton.click()
        browser.sleep(3000)
    }

    this.backToViewPaymentsScreen = function() {
        backButton.click()
        browser.sleep(3000)
    }
    
}

 