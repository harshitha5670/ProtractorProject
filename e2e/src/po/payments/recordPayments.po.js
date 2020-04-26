const {browser, element, by} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../../lib/common.lib')


let fileCategoryJE = element(by.xpath("//button[.='JE']"))
let fileCategoryTF = element(by.xpath("//button[.='TF']"))
let referenceNumber = element(by.xpath("//label[.='Reference number:']/..//input"))
let insurerProductID = element.all(by.xpath("//label[.='Insurer product ID']/..//select/option"))
let directBill = element.all(by.xpath("//label[.='Direct bill:']/..//select/option"))
let clientName = element(by.xpath("//label[.='Client id & name ']/..//div/input"))
let clientBalance = element(by.xpath("//label[.='Client balance']/..//div"))
let glAccount = element(by.xpath("//label[.='G/L account']/../..//select/option"))
let checkNumber = element(by.xpath("//label[.='Check #']/../..//input"))
let checkAmount = element(by.xpath("//label[.='Check amount']/../..//input"))
let description = element(by.xpath("//label[.='Description (optional)']/..//input"))
let addButton = element(by.xpath("//button[.='Add']"))
let submitButton = element(by.xpath("//button[.='Submit']"))
let approveButton = element(by.xpath("//button[.='Approve']"))
let resetButton = element(by.xpath("//button[.='Approve']"))
let depositDate = element(by.xpath("//label[.='Deposit date:']/..//div[@class='calender-box']"))
let checkDate = element(by.xpath("//label[.='Check date:']/..//div[@class='calender-box']"))
let validateCheckNum = element(by.xpath("//div[@class='grid-tooltip reason-code-ellipses truncate-checknum{']"))
let EC = ExpectedConditions

module.exports = new function() {

    this.selectFileCategory_JE = function() {
       method.clickOnElement(fileCategoryJE)   
    }

    this.selectFileCategory_TF = function() {
        method.clickOnElement(fileCategoryTF)
    }

    this.enterReferenceNumber = function(number) {
        method.clickOnElement(referenceNumber)
        //browser.wait(EC.elementToBeClickable(referenceNumber),3000)
        referenceNumber.sendKeys(number)
    }

    this.depositDate = function(selectYear, selectMonth, selectDate) {
        depositDate.click()
        common.selectYear(selectYear)
        common.selectMonth(selectMonth)
        common.selectDate(selectDate)
    }

    this.selectInsusrerProduct = function(id) {
        method.selectByIndex(insurerProductID,id)
    }

    this.selectBill = function(bill) {
        method.selectByIndex(directBill,bill)
    }

   this.enterClientId = function(value) {
       clientName.sendKeys(value)
       method.waitForPageload()
    //action.actions(clientName, value , 3000)  
    }

    this.GLAccount = function() {
        glAccount.click()
    }

    this.enterCheckNumber = function(number) {
        checkNumber.sendKeys(number)
    }

    this.enterCheckAmount = function(amount) {
        checkAmount.sendKeys(amount)
        checkAmount.getAttribute("ng-reflect-model")  
    }

    this.enterDescription = function(destion) {
        description.sendKeys(destion)
    }

    this.clickAddButton = function() {
        addButton.click()
        browser.sleep(3000)
    }

    this.clickSubmitButton = function() {
        submitButton.click()
        browser.sleep(5000)
    }

    this.clickApproveButton = function() {
        approveButton.click()
        browser.sleep(5000)
    }

    this.clickResetButton = function() {
        resetButton.click()
    }

    this.checkDate = function(selectYear,selectMonth,selectDate) {
        checkDate.click()
        common.selectYear(selectYear)
        common.selectMonth(selectMonth)
        common.selectDate(selectDate)
    }

    this.getClientBalance = function(balanceAmount) {
        browser.sleep(3000)
        expect(clientBalance).toContain(balanceAmount)

    }
}