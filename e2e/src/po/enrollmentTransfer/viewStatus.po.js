const {browser,element,by} = require('protractor')
const method = require('../../lib/methods.lib')

let viewIcon = element.all(by.xpath("//button[@class ='view-icon']"))
let viewStatus = element(by.xpath("//a[@name = 'viewstatus' and @href='javascript:void(0)']"))
//let deleteIcon = element.all(by.xpath(""))
let cancelButton = element(by.xpath("//button[@class='btn btn-cancel']"))
let backButton = element(by.xpath("//button[.='Back']"))
let popNoButton = element(by.xpath("//button[.=No']"))
let popYesButton = element(by.xpath("//button[.='Yes']"))

module.exports =new function() {

    this.navigateToViewStatusScreen = function() {
        viewStatus.click()
        method.waitForPageload()
    }
    
    this.viewBatchRecord = function(index) {
        viewIcon.get(index).click()
        method.waitForPageload()
        let jobid = browser.getCurrentUrl()
        console.log(`Job id is "${jobid}"`)
    }

    this.navigateBackToViewStatusScreen = function() {
        backButton.click()
        method.waitForPageload()
    }

    this.cancelBatch = function() {
        cancelButton.click()
        popYesButton.click()
        method.waitForPageload()
    }

    this.getBatchJobId = function() {
    
    }
}