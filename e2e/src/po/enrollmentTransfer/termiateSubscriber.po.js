const {browser,element,by} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../../lib/common.lib')

let checkboxTerminateAll = element(by.xpath("//h3[.='Terminate All']"))
let checkboxMedical = element(by.xpath("//h3[.='Medical']"))
let checkboxDental = element(by.xpath("//h3[.='Dental']"))
let checkboxVision = element(by.xpath("//h3[.='Vision']"))
let checkboxLife = element(by.xpath("//h3[.='Life']"))
let dropdownTerminationReason = element.all(by.xpath("//div[@class='terminate-reason-selection']/select//option"))
let buttonAddTask = element(by.xpath("//div[.=' Add task ']"))
let iconTaskDelete = element(by.xpath("//td[@class='pointer']"))

module.exports = new function() {

    this.selectTerminateAllCheckbox = function() {
        checkboxTerminateAll.click()
        method.waitForPageload()
    }
    this.selectMedicalPlanCheckbox = function() {
        checkboxMedical.click()
        method.waitForPageload()
    }
    this.selectDentalplanCheckbox = function() {
        checkboxDental.click()
        method.waitForPageload()
    }
    this.selectVisionPlanCheckbox = function() {
        checkboxVision.click()
        method.waitForPageload()
    }
    this.selectLifePlanCheckbox = function() {
        checkboxLife.click()
        method.waitForPageload()
    }
    this.selectTerminationDate = function(date,month,year) {
        common.calenderBox()
        common.selectYear(year)
        common.selectMonth(month)
        common.selectDate(date)
    }
    this.selectTerminationReason = function(index) {
        method.selectByIndex(dropdownTerminationReason,index,3000)
    }
    this.addtask = function() {
        method.clickOnElement(buttonAddTask)
    }
    this.deletAddedTask = function() {
        iconTaskDelete.click()
    }
}
