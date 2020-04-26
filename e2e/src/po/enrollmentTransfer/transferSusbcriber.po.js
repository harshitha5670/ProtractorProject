const {browser, by,element} = require('protractor')
const common = require('../../lib/common.lib')
const method = require('../../lib/methods.lib')

let qualifyingEventYes = element(by.xpath("//span[.='Yes']"))
let qualifyingEventNo = element(by.xpath("//span[.='No']"))
let healtPlan = element(by.xpath("//label[.='Health Plan']/../../..//div//div//div/div/input"))
let dentalPlan = element(by.xpath("//label[.='Dental Plan']/../../..//div//div//div/div/input"))
let visionPlan = element(by.xpath("//label[.='Vision Plan']/../../..//div//div//div/div/input"))
let lifePlan = element(by.xpath("//label[.='Life Plan']/../../..//div//div//div/div/input"))
let healthPlanList = element.all(by.xpath("//div[@class ='row m-0 clickable item-row_health']"))
let dentalPlanList = element.all(by.xpath("//div[@class ='row m-0 clickable item-row_dental']"))
let visionPlanList = element.all(by.xpath("//div[@class ='row m-0 clickable item-row_vision']"))
let lifePlanList = element.all(by.xpath("//div[@class ='row m-0 clickable item-row_life']"))
let addTaskButton = element(by.xpath("//button[.='Add task']"))
let taskDeleteIcon = element(by.xpath("//td[@class='pointer']"))


module.exports = new function() {

    this.selectQualifyingEventYes = function() {
        qualifyingEventYes.click()
        method.waitForPageload()
    }
    this.selectQualifyingEventNo = function() {
        qualifyingEventNo.click()
        method.waitForPageload()
    }
    this.searchMedicalPlan = function(groupName) {
        method.downArrow(healtPlan,groupName,4000)
    }
    this.searchDentalPlan = function(groupName) {
        method.downArrow(dentalPlan,groupName,4000)
    }
    this.searchVisionPlan = function(groupName) {
        method.downArrow(visionPlan,groupName,4000)
    }
    this.searchLifePlan = function(groupName) {
        method.downArrow(lifePlan,groupName,4000)
    }
    this.selecthealthPlan = function(index) {
        healtPlan.click()
        method.waitForPageload()
        healthPlanList.get(index).click()
        method.waitForPageload()
    }
    this.selectDentalPlan = function(index) {
        dentalPlan.click()
        method.waitForPageload()
        dentalPlanList.get(index).click()
        method.waitForPageload()
    }
    this.selectVisionPlan = function(index) {
        visionPlan.click()
        method.waitForPageload()
        visionPlanList.get(index).click()
        method.waitForPageload()
    }
    this.selectLifePlan = function(index) {
        lifePlan.click()
        method.waitForPageload()
        lifePlanList.get(index).click()
        method.waitForPageload()
    }
    this.setEffectiveDate = function(year,month,date) {
        common.calenderBox()
        common.selectYear(year)
        common.selectMonth(month)
        common.selectDate(date)
    }
    this.clickOnAddTask = function() {
        addTaskButton.click()
        method.waitForPageload()
    }
    this.removeTaskFromGrid = function() {
        taskDeleteIcon.click()
        method.waitForPageload()
    }

    this.tabOnMedicalPlanDropDown = function() {
        qualifyingEventYes.click()
    }
}