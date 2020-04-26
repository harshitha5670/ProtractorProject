const {browser, element, by} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../../lib/common.lib')

let adjustPriorPlansButton = element(by.xpath("//span[.='Adjust prior plans']"))
let edit = element.all(by.xpath("//div[@class='edit-plan-button']"))
let effectivedate = element(by.xpath("//label[.='Effective Date']/..//div[@class ='calender-box']"))
let terminatedate = element(by.xpath("//label[.='Termination Date']/..//div[@class ='calender-box']"))
let terminationReason = element.all(by.xpath("//div[.='Reason for termination']/..//div/select/option"))
let applyEffectiveDateCheckbox = element(by.xpath("//span[.='Apply Effective date(s) for all dependents that have the same effective date(s).']"))
let closeButton = element(by.xpath("(//button[.='Close'])[2]"))
let saveButton = element(by.xpath("//button[.='Save']"))
let viewAllElegiblePlansLink = element(by.xpath("//a[.='View all eligible plans']"))
let hideAllElegiblePlansLink = element(by.xpath("//a[.='Hide all eligible plans']"))
let getTerminationDate = element.all(by.xpath("//div[@class='terminate-d-label-bx'][1]"))
let getTerminationReason = element.all(by.xpath("//div[@class='terminate-d-label-bx'][2]"))
let backButton = element(by.xpath("//button[.='Back']"))

module.exports = new function() {

    this.clickOnAdjustpriorPlansButton = function() {
        adjustPriorPlansButton.click()
        browser.sleep(3000)
    }

    this.editPlansButton = function(index) {
        edit.get(index).click()
        browser.sleep(3000)
    }

    this.effectivedateEdit = function(selectYear, selectMonth, selectDate) {
        effectivedate.click()
        common.selectYear(selectYear)
        common.selectMonth(selectMonth)
        common.selectDate(selectDate)
        browser.sleep(3000)
    }

    this.terminationDateEdit = function(selectYear, selectMonth, selectDate) {
        terminatedate.click()
        common.selectYear(selectYear)
        common.selectMonth(selectMonth)
        common.selectDate(selectDate)
        browser.sleep(3000)

    }

    this.editTerminationReason = function(index) {
        method.selectByIndex(terminationReason,index,3000)
    }

    this.applyEffectiveDateforDependents = function() {
        applyEffectiveDateCheckbox.click()
        browser.sleep(3000)
    }

    this.closePopup = function() {
        closeButton.click()
        browser.sleep(3000)
    }

    this.saveChanges = function() {
        saveButton.click()
        browser.sleep(3000)
    }

    this.verifyTerminationDate = function(actualDate,index) {
        browser.sleep(3000)
        method.mouseHover(getTerminationDate.get(index),actualDate)
        let expectedDate = getTerminationDate.get(index).getAttribute('text')
        expect(expectedDate).toBe(actualDate)
        if( expectedDate == actualDate) {
            console.log("Termination date is validated")
        }
    }

    this.verifyTerminationReason = function(actualReason, index) {
        browser.sleep(3000)
        method.mouseHover(getTerminationReason.get(index),actualReason)
        let expectedReason = getTerminationReason.get(index).getAttribute('text')
        expect(expectedReason).toBe(actualReason)
        if(expectedReason == actualReason) {
            console.log("Termination reason is validated")
        }
    }

    this.clickOnViewAllEligiblePlans = function() {
        viewAllElegiblePlansLink.click()
        browser.sleep(6000)
    }

    this.clickOnHideAllElegiblePlansLink = function() {
        hideAllElegiblePlansLink.click()
        browser.sleep(6000)
    }

    this.navigateBackToViewScreen = function() {
        backButton.click()
        browser.sleep(4000)

    }

}

