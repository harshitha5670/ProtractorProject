const {browser,element,by} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../../lib/common.lib')

let dropdownSelectProduct = element.all(by.xpath("//label[.='Select Product']/../../..//div//select//option"))
let dropdownSelectCurrentPlan = element.all(by.xpath("//label[.='Current Plan']/../../..//div//div//div/div/input"))
let dropdownSelectNewProduct = element.all(by.xpath("//label[.='Select New Product']/../../..//div//select//option"))
let dropdownSelectNewPlan = element.all(by.xpath("//label[.='Add New Plan']/../../..//div//div//div/div/input"))
let checkboxEnrollActiveDependents = element(by.xpath("//span[@class='custom-control-description']"))
let buttonAddTask = element(by.xpath("//div[.=' Add task ']"))
let iconTaskDelete = element(by.xpath("//td[@class='pointer']"))

module.exports = new function() {

    this.selectProduct = function(index) {
        method.selectByIndex(dropdownSelectProduct,index,3000)
    }
    this.selectCurrentPlan = function(index) {
        method.selectByIndex(dropdownSelectCurrentPlan,index,3000)
    }
    this.selectNewProduct = function(index) {
        method.selectByIndex(dropdownSelectNewProduct,index,3000)
    }
    this.selectNewPlan = function(index) {
        method.selectByIndex(dropdownSelectNewPlan,index,3000)
    }
    this.setEffectiveDate = function(date,month,year) {
        common.calenderBox()
        common.selectYear(year)
        common.selectMonth(month)
        common.selectDate(date)
    }
    this.addTask = function() {
        buttonAddTask.click()
    }
    this.EnrollActiveDependents = function() {
        checkboxEnrollActiveDependents.click()
        method.waitForPageload()
    }
    this.deleteTaks = function() {
        iconTaskDelete.click()
    }
}