const {browser,element,by} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../../lib/common.lib')

let linkCarrierSchedulerVendor = element(by.xpath("//span[.='Carrier/Vendor Scheduler']"))
let dropDownSelectCarrier = element.all(by.xpath("//select[@name='partner']//option"))
let dropDownSelectFileType = element.all(by.xpath("//select[@name='filetype']//option"))
let dropDownSelectFileFormat = element.all(by.xpath("//select[@name='formatType']//option"))
let linkClear = element(by.xpath("//a[.='×Clear']"))
let swtichHoldResume = element.all(by.xpath("//span[@class='handle']"))
let buttonEdit = element.all(by.xpath("//button[@class='edit-img-style']"))
let radiobuttonDaily = element(by.xpath("//span[.='Daily']"))
let radiobuttonWeekly = element(by.xpath("//span[.='Weekly']"))
let radiobuttonMonthly = element(by.xpath("//span[.='Monthly']"))
let dropdownSetTime = element.all(by.xpath("//select[@class='form-control time-selector border-radius-2px width-5rem ng-pristine ng-valid ng-touched']//option"))
let dropdowntime = element.all(by.xpath("//select[@class='form-control margin-left time-selector border-radius-2px ng-pristine ng-valid ng-touched']//option"))
let radiobuttonEveryday = element(by.xpath("//span[.='Everyday']"))
let radiobuttonEveryWeekday = element(by.xpath("//span[.='Every weekday']"))
let checkboxWeeks = element.all(by.xpath("//span[@class='custom-control-description']"))
let radiobuttonDay = element(by.xpath("//span[.='Day']"))
let radiobuttonThe = element(by.xpath("//span[.='The']"))
let dropdownSelectSpan = element.all(by.xpath("//select[@class='form-control col-md-3 border-radius-2px ng-pristine ng-valid ng-touched']//option"))
let dropdownSelectDay = element.all(by.xpath("//select[@class='form-control col-md-4 margin-left-025rem border-radius-2px ng-pristine ng-valid ng-touched']//option"))
let buttonCancel = element(by.xpath("//button[.='Cancel']"))
let buttonSubmit = element(by.xpath("//button[.='Submit']"))
let linkSkip = element(by.xpath("//a[.='Skip']"))

module.exports = new function() {

    this.NavigateToCarrierSchedulerVendorScreen = function() {
        linkCarrierSchedulerVendor.click()
        method.waitForPageload()
    }
    this.filterByCarriers = function(index) {
        method.selectByIndex(dropDownSelectCarrier,index,3000)
    }
    this.filterByFiletype = function(index) {
        method.selectByIndex(dropDownSelectFileType,index,3000)
    }
    this.filterByFormatType = function(index) {
        method.selectByIndex(dropDownSelectFileFormat,index,3000)
    }
    this.clearFilters = function() {
        linkClear.click()
        method.waitForPageload()
    }
    this.holdResumeScheduler = function() {
        swtichHoldResume.click()
        browser.sleep(6000)
    }
    this.setSchedulerPatternDaily = function(index,setTime,time) {
        buttonEdit.get(index).click()
        method.waitForPageload()
        radiobuttonDaily.click()
        method.waitForPageload()
        radiobuttonEveryday.click()
        method.selectByIndex(dropdownSetTime,setTime,3000)
        method.selectByIndex(dropdowntime,time,3000)
        buttonSubmit.click()
        method.waitForPageload()
    }
    this.setSchedulerPatternEveryWeekDay = function(index,setTime,time) {
        buttonEdit.get(index).click()
        method.waitForPageload()
        radiobuttonDaily.click()
        method.waitForPageload()
        radiobuttonEveryWeekday.click()
        method.selectByIndex(dropdownSetTime,setTime,3000)
        method.selectByIndex(dropdowntime,time,3000)
        buttonSubmit.click()
        method.waitForPageload()
    }  
}