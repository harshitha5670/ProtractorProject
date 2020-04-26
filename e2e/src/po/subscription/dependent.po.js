const {browser} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../../lib/common.lib')

let relationshipDDL = element.all(by.xpath("//label[.='Relationship']/..//select/option"));
let lastName = element(by.xpath("//h3[.='Add dependent details']/../../..//div[@class = 'personal-info-card-set']//div//div//div//div/label[.= 'Last Name']/..//input"));
let firstName = element(by.xpath("//h3[.='Add dependent details']/../../..//div[@class = 'personal-info-card-set']//div//div//div//div/label[.= 'First Name']/..//input"));
let middleName = element(by.xpath("//h3[.='Add dependent details']/../../..//div[@class = 'personal-info-card-set']//div//div//div//div/label[.= 'Middle Initial']/..//input"));
let ssn =  element(by.xpath("//label[.='SSN']/..//input"));
let calender = element(by.xpath("//div[@class='calender-box']/input"))
let year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
let month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
let date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
let genderFemale =   element(by.xpath("//div[@class='s-radio-box']/label//span[.='Female']"));
let genderMale = element(by.xpath("//div[@class='s-radio-box']/label//span[.='Male']"));
let genderOther = element(by.xpath("//span[.='Other']"))
let nextButton = element(by.xpath("//span[.='Next:']"));
let cobCheckbox = element(by.xpath("//h3[.='COB']"));
let benifitStartDate = element(by.xpath("//label[.='Benefit Start Date']/..//div/input"));
let benifitEndDate = element(by.xpath("//label[.='Benefit End Date']/..//div/input"));
let venderCode = element(by.xpath("//label[.='Vendor Code']"));
let venderSubscriberCode = element(by.xpath("//label[.='Vendor Subscriber Code']"));
let planDetails = element(by.xpath("//label[.='Plan Details']"));
let medicareCheckbox = element(by.xpath("//span[@class='custom-control-description']/h3[.='Medicare']"));
let medicarePartADate = element(by.xpath("//label[.='Medicare Part A Date']/..//div/input"));
let medicarePartBDate = element(by.xpath("//label[.='Medicare Part B Date']/..//div/input"));
let medicarePlan = element(by.xpath("//label[.='Medicare Plan #']"));
let overrideDate = element(by.xpath("//label[.='Override Date']/..//div/input"));
let saveAndAddAnotherDepenedent = element(by.xpath("//button[.='Save and add another dependent']"));
let subscriberAddress = element(by.xpath("//h3[.='Same as subscriber address']"))
let subscriberContact = element(by.xpath("//h3[.='Same as subscriber contact']"))

module.exports = new function() {

    this.selectRelationshipOfDependent = function(selectDependent) {
       method.selectByVisibleText(relationshipDDL,selectDependent)
    }

   this.enterDependentSSN =  function (ssnId) {
      return  ssn.sendKeys(ssnId)
         .then( function() {
             console.log(`Dependent ssn is "${ssnId}"`)
        })
    }

  this.entreLastName = function (lname) {
    return  lastName.sendKeys(lname)
         .then( function() {
            console.log(`LastName of the dependent is "${lname}"`)
        })
    }

  this.enterFirstName = function (fname) {
    return  firstName.sendKeys(fname)
         .then( function() {
            console.log(`FirstName of the dependent is "${fname}"`)
        })
    }

  this.enterMiddleInitial =  function (mName) {
    return  middleName.sendKeys(mName)
         .then( function() {
             console.log(`MiddleName of the dependent is "${mName}"`)
        })
    }

    this.enterDateOfBirth =  function(selectYear, selectMonth, selectDate) {
       common.calenderBox()
       common.selectYear(selectYear)
       common.selectMonth(selectMonth)
       common.selectDate(selectDate)
    }

    this.selectGenderFemale =  function() {
       genderFemale.click()
    }

    this.selectGenderMale =  function() {
       genderMale.click()
    }

    this.selectGenderOther = function() {
       genderOther.click()
    }

    this.validateCOB = function() {
      cobCheckbox.click();
      benifitStartDate.click();
      benifitEndDate.click();
      venderCode.click();
      venderSubscriberCode.click();
      planDetails.click();
   }

  
   this.validateMedicare = function() {
      medicareCheckbox.click();
      medicarePartADate.click();
      medicarePartBDate.click();
      medicarePlan.click();
      medicareOverrideDate.click();    
   }


    this.validateDependentAddressAndContact =  function() {
       subscriberAddress.click()     
       subscriberContact.click()
    }

    this.saveAndAddOneMoreDependent =  function() {
       saveAndAddAnotherDepenedent.click()
    }

    this.addProduct =  function() {
       nextButton.click()  
       browser.sleep(6000)
       browser.getCurrentUrl() 
      .then( function () {
         console.log("Navigated to Product Screen")
      })
      
    }

}
