const {browser,element, by} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../../lib/common.lib')

let enrollementType = element(by.xpath("//label[.='Enrollment Type :']/..//select"));
let bargainingUnit = element(by.xpath("//label[.='Bargaining Unit :']/..//select")); 
let selectMedicalPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='medical-plan-body']//input[@type = 'checkbox']/../..//label/span"));
let selectDentalPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='dental-plan-body']//input[@type = 'checkbox']/../..//label/span"));
let selectVisionPlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='vision-plan-body']//input[@type = 'checkbox']/../..//label/span"));
let enrollVoluntaryPlan = element(by.xpath("//button[.='Enroll for Voluntary Term Life Insurance']"));
let coverageAmount = element(by.xpath("//div[.='Coverage Amount']/..//input"));
let submitButton = element(by.xpath("//button[.='Submit']"));
let enrollChild = element(by.xpath("//label[@class='custom-control custom-checkbox']/..//span")) 
let selectLifePlan = element.all(by.xpath("//tr[@ng-reflect-ng-class='life-plan-body']//td//label/span"))
let masterDate = element(by.xpath("//label[.='Effective date for all plans']/../div[@class ='calender-box']"))
let cobraDetails = element(by.xpath("//div[@class='row col-md-11 cobra-info-header']"))
let cobraEvent = element.all(by.xpath("//label[.='COBRA Event']/..//select/option"))
let beginDate = element(by.xpath("//label[.='Begin Date']/..//div[@class = 'calender-box']"))
let endDate = element(by.xpath("//label[.='End Date']/..//div[@class = 'calender-box']"))

module.exports =new function() {

    this.checkEnrollementType = function() {
       enrollementType.click()
     }
 
     this.checkBargainingUnit =  function() {
       bargainingUnit.click()
     }

     this.masterEffectiveDate =  function(selectYear, selectMonth, selectDate) {
       common.selectYear(selectYear)
       common.selectMonth(selectMonth)
       common.selectDate(selectDate)
       browser.sleep(6000)

     }
 
     this.effectiveDate =  function(selectYear, selectMonth, selectDate) {
       common.calenderBox()
       common.selectYear(selectYear)
       common.selectMonth(selectMonth)
        common.selectDate(selectDate)
       browser.sleep(3000)
     }

     this.selectMedicalPlans =  function(medicalPlan) {
       selectMedicalPlan.get(medicalPlan).click()  
     }  
      
     this.selectDentalPlans =  function(dentalPlan) {
       selectDentalPlan.get(dentalPlan).click()
     }
 
     this.selectVisionPlans =  function(visionPlan) {
       selectVisionPlan.get(visionPlan).click()
       
     }
 
     this.selectLifePlans = function(lifePlan) {
       method.selectByIndex(selectLifePlan,lifePlan,3000)
         
     }
 
     this.enrollForVoluntaryPlan = function() {
       enrollVoluntaryPlan.click()
       
     }
 
     this.enterCoverageAmount = function(amount) {
        coverageAmount.sendKeys(amount)
        coverageAmount.sendKeys(protractor.Key.TAB);
        browser.driver.sleep(2000)
     }
     
     this.erollChildForVoluntary =  function() {
        enrollChild.click()
        browser.driver.sleep(3000)
     }
 
     this.submitSubscriber = function() {
       submitButton.click()
        browser.driver.sleep(7000)
       method.scrollUpThePage()
       browser.getCurrentUrl()
       .then( function() {
          console.log("Subscriber Added Sucessfully")
        })
 
    }

    this.enterCobraDetails = function(index,selectYear,selectMonth,selectDate,year,month,date) {
      // browser.wait(ExpectedConditions.visibilityOf(cobraDetails),5000)
       if(cobraDetails.isDisplayed() == true) {
         browser.sleep(6000)
          try {
             method.selectByIndex(cobraEvent,index,3000)
             beginDate.click()
             common.selectYear(selectYear)
             common.selectMonth(selectMonth)
             common.selectDate(selectDate)
             endDate.click()
             common.selectYear(year)
             common.selectMonth(month)
             common.selectDate(date)               
          } catch (error) {
             console.log(error)
             
          }
       }
       else {
         console.log("Cobra plan not selected.")
       }

   }
     
}


