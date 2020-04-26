const {browser,element, by} = require('protractor')
const common = require('../../lib/common.lib')

let editAllButton = element(by.xpath("//div[@class='form-group edit-term-btn col-md-5']//button[1]"))
let terminateAllButton = element(by.xpath("//div[@class='form-group edit-term-btn col-md-5']//button[2]"))
let viewAllElegiblePlansLink = element(by.xpath("//a[.='View all eligible plans']"))
let hideAllElegiblePlansLink = element(by.xpath("//a[.='Hide all eligible plans']"))
let terminateButton = element.all(by.xpath("//button[.='Terminate']"))
let editButton = element.all(by.xpath("//div[@class='edit-plan-button']/..//img"))
let saveButton = element(by.xpath("//button[.='Save']"))
let closeButton = element(by.xpath("//button[.='Close']"))
let popUpTerminateButton = element(by.xpath("//div[@class='terminate-footer-popup']//button[.= 'Terminate']"))
let addButton = element(by.xpath("//button[.='Add']"))
let verifyEffDate = element.all(by.xpath("//div[@class='add-product-grid-dp']//label"))
let masterDate = element(by.xpath("//label[.='Effective date for all plans']/../div[@class ='calender-box']"))
let enrollementType = element(by.xpath("//label[.='Enrollment Type :']/..//select"))
let bargainingUnit = element(by.xpath("//label[.='Bargaining Unit :']/..//select"))
let selectMedicalPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='medical-plan-body']//input[@type = 'checkbox']/../..//label/span"))
let selectDentalPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='dental-plan-body']//input[@type = 'checkbox']/../..//label/span"))
let selectVisionPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='vision-plan-body']//input[@type = 'checkbox']/../..//label/span"))
let selectLifePlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='life-plan-body']//td//label/span"))
let updateButton = element(by.xpath("//button[.='Update']"))


module.exports = new function() {

    this.terminateAllPlans = function(year, month, date) {
        browser.sleep(5000)  
        terminateAllButton.click()
        browser.sleep(3000)
        common.selectYear(year)
        common.selectMonth(month)
        common.selectDate(date)
        browser.sleep(3000)
        popUpTerminateButton.click()
        browser.sleep(7000)
  
      }
  
      this.editEffectiveDateOfAllPlans = function(year, month, date) {
        browser.sleep(5000)  
        editAllButton.click()
        browser.sleep(3000)
        common.selectYear(year)
        common.selectMonth(month)
        common.selectDate(date)
        browser.sleep(2000)
        saveButton.click()
        browser.sleep(4000)   
      }

      this.clickOnAddButton = function() {
        addButton.click()
      }

      this.viewAllElegiblePlans = function() {
          viewAllElegiblePlansLink.click()
          browser.sleep(6000)
      }

      this.hideAllElegiblePlans = function() {
          hideAllElegiblePlansLink.click()
          browser.sleep(6000)
      }

      this.editEffectiveDateOfPlan = function(selectYear,selectMonth,selectDate) {
          editButton.click()
          browser.sleep(4000)
          common.selectYear(selectYear)
          common.selectMonth(selectMonth)
          common.selectDate(selectDate)
          saveButton.click()
          browser.sleep(4000)
      }

      this.terminatePlan = function(selectYear,selectMonth,selectDate) {
          terminateButton.click()
          browser.sleep(4000)
          common.selectYear(selectYear)
          common.selectMonth(selectMonth)
          common.selectDate(selectDate)
          popUpTerminateButton.click()
          
      }

      this.closePopup = function() {
          closeButton.click()
          browser.sleep(3000)
      }

      this.masterEffectiveDate = function(selectYear,selectMonth,selectDate) {
          masterDate.click()
          common.selectYear(selectYear)
          common.selectMonth(selectMonth)
          common.selectDate(selectDate)
      }

      this.checkEnrollementType = function() {
        enrollementType.click()
      }
  
      this.checkBargainingUnit = function() {
         bargainingUnit.click()
      }
  
      this.effectiveDate = function(selectYear, selectMonth, selectDate) {
         common.calenderBox()
         common.selectYear(selectYear)
         common.selectMonth(selectMonth)
         common.selectDate(selectDate)
         browser.sleep(3000)
      }
 
      this.selectMedicalPlans = function(medicalPlan) {
         selectMedicalPlan.get(medicalPlan).click()  
      }   
       
      this.selectDentalPlans = function(dentalPlan) {
         selectDentalPlan.get(dentalPlan).click()
      }
  
      this.selectVisionPlans = function(visionPlan) {
         selectVisionPlan.get(visionPlan).click()
      }
  
      this.selectLifePlans = function(lifePlan) {
          selectLifePlan.get(lifePlan).click()
          
      }
      this.clickOnUpdateButton = function() {
          updateButton.click()
      }
}