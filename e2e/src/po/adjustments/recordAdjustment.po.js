const {browser, element, by} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../../lib/common.lib')


let insurerProductID = element.all(by.xpath("//label[.='Insurer product ID']/..//select/option"))
let directBill = element.all(by.xpath("//label[.='Direct bill:']/..//select/option"))
let clientId = element(by.xpath("//label[.='Client id & name ']/..//div/input"))
let adjustmentAmount = element(by.xpath("//label[.='Adjustment amount']/..//input"))
let description = element(by.xpath("//label[.='Description (optional)']/..//input"))
let count = element(by.xpath("//label[.='Count (optional)']/..//input"))
let addButton = element(by.xpath("//button[.='Add']"))
let submitButton = element(by.xpath("//button[.='Submit']"))
let approveButton = element(by.xpath("//button[.='Approve']"))
let resetButton = element(by.xpath("//button[.='Reset']"))
let productCode = element.all(by.xpath("//label[.='Product code']/..//select/option"))
let group = element.all(by.xpath("//label[.='Group']/..//select/option"))
let department = element.all(by.xpath("//label[.='Department']/..//select/option"))

module.exports = new function() {

    this.selectInsurerProductID = function(id) {
        method.selectByIndex(insurerProductID,id)
    }
 
   this.datePicker = function(selectyear, selectMonth, selectdate) {
      common.calenderBox()
      common.selectYear(selectyear)
      common.selectMonth(selectMonth)
      common.selectDate(selectdate)  
   }
 
    this.enterClientId = function (value) {
      method.clickOnElement(clientId) 
      method.actions(clientId, value, 3000)
     
   }
 
     this.selectDirectBill = function(bill) {
        method.selectByIndex(directBill,bill)
   }
 
     this.enterAdjustementAmount = function(amount) {
         adjustmentAmount.sendKeys(amount)
     }
 
     this.enterDescription = function(des) {
         description.sendKeys(des)
     }
 
     this.selectProductCode = function(code) {
        method.selectByIndex(productCode,code)
     }
     
     this.selectGroup = function(grp) {
        method.selectByIndex(group,grp)
     }
 
     this.selectDeprtment = function(dept) {
        method.selectByIndex(department,dept)
     }
      
     this.clickAddButton = function() {
        method.clickOnElement(addButton)
        browser.sleep(5000)
     }
 
     this.clickSubmitButton = function() {
      method.clickOnElement(submitButton)
         browser.sleep(5000)
     }

     this.clickApproveButton = function() {
      method.clickOnElement(approveButton)
         browser.sleep(5000)
     }

     this.clickResetButton = function() {
      method.clickOnElement(resetButton)
        browser.sleep(3000)
     }
}