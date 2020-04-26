const {browser,element,by} = require('protractor')
const method = require('../../lib/methods.lib')

let linkViewAdjustment = element(by.xpath("//a[.='View Adjustments']"))
let buttonView = element.all(by.xpath("//button[.='View']"))
let iconDelete = element.all(by.xpath("//div[@class='deletebuttonrecord pointer']/img"))
let buttonYes = element(by.xpath("//button[.='YES']"))
let buttonNo = element(bu.xpath("//button[.='No']"))

module.exports = new function () {

    this.navigateToViewAdjustmentscreen = function() {
        method.clickOnElement(linkViewAdjustment)
    }

    this.clickOnViewButton = function() {
        buttonView.click()
        method.waitForPageload()
    }

    this.clickOnDelete = function() {
        iconDelete.click()
        method.waitForPageload()
    }

    this.clickOnYesButton = function() {
        buttonYes.click()
        method.waitForPageload()
    }

    this.clickOnNoButton = function() {
        buttonNo.click()
        method.waitForPageload()
    }
}