const {browser} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../..//lib/common.lib')

    let lastName = element(by.xpath("//h3[.='Subscriber Information']/../../..//div[@class = 'personal-info-card-set']//div//div//div//div/label[.= 'Last Name']/..//input"));
    let firstName = element(by.xpath("//h3[.='Subscriber Information']/../../..//div[@class = 'personal-info-card-set']//div//div//div//div/label[.= 'First Name']/..//input"));
    let middleName = element(by.xpath("//h3[.='Subscriber Information']/../../..//div[@class = 'personal-info-card-set']//div//div//div//div/label[.= 'Middle Initial']/..//input"));
    let ssn =  element(by.xpath("//label[.='SSN']/..//input"));
    let clientID =  element(by.xpath("//label[.='Client ']/../..//div//div//div//div/input"));
    let genderFemale =   element(by.xpath("//div[@class='s-radio-box']/label//span[.='Female']"));
    let genderMale =   element(by.xpath("//div[@class='s-radio-box']/label//span[.='Male']"));
    let addressLine1 =  element(by.xpath("//label[.='Address Line 1']/../..//hear2-input-controls/input"));
    let addressLine2 = element(by.xpath("//label[.='Address Line 2']/../..//hear2-input-controls/input"));
    let zipCode =  element(by.xpath("//label[.='Zipcode']/..//input"));
    let city = element(by.xpath("//label[.='City']"));
    let state = element(by.xpath("//label[.='State']"));
    let mobileNumber =   element(by.xpath("//label[.='Mobile']/..//input"));
    let homeNumber =   element(by.xpath("//label[.='Home']/..//input"));
    let workNumber =   element(by.xpath("//label[.='Work']/..//input"));
    let email =   element(by.xpath("//label[.='Email']/..//input"));
    let nextButton = element(by.xpath("//span[.='Next:']"));
    let cobCheckbox = element(by.xpath("//h3[.='COB']/../..//span"));
    let benifitStartDate = element(by.xpath("//label[.='Benefit Start Date']/..//div/input"));
    let benifitEndDate = element(by.xpath("//label[.='Benefit End Date']/..//div/input"));
    let venderCode = element(by.xpath("//label[.='Vendor Code']"));
    let venderSubscriberCode = element(by.xpath("//label[.='Vendor Subscriber Code']"));
    let planDetails = element(by.xpath("//label[.='Plan Details']"));
    let medicareCheckbox = element(by.xpath("//span[@class='custom-control-description']/h3[.='Medicare']"));
    let medicarePartADate = element(by.xpath("//label[.='Medicare Part A Date']/..//div/input"));
    let medicarePartBDate = element(by.xpath("//label[.='Medicare Part B Date']/..//div/input"));
    let medicareOverrideDate = element(by.xpath("//label[.='Override Date']/..//div/input"))
    let medicarePlan = element(by.xpath("//label[.='Medicare Plan #']"));
    let overrideDate = element(by.xpath("//button[.='Cancel']"));
    let addProductLink = element(by.xpath("//a[.='Go to Add Products']"));
    
module.exports = new function() {

    this.enterSsnId =  function(enterSsn) {
        ssn.sendKeys(enterSsn)
        if (ssn.length != 9) {
           ssn.sendKeys(method.getSSNNumberInSplitFormat())
            }
        else {
            console.log("ssn entered")
          }
    }

    this.enterClientId = function(enterClientId) {
        method.downArrow(clientID,enterClientId,3000)
    }

    this.enterFirstName =  function(enterFname) {
        return  firstName.sendKeys(enterFname)
        .then( function() {
           console.log(`FirstName of the Subscriber is "${enterFname}"`)
       })
    }

    this.enterLastName =  function(enterLname) {
        browser.sleep(3000)
        return  lastName.sendKeys(enterLname)
        .then( function() {
           console.log(`LastName of the Subscriber is "${enterLname}"`)
       })
    }

    this.enterMiddleInitail =  function(enterMname) {
        return  middleName.sendKeys(enterMname)
        .then( function() {
           console.log(`MiddleName of the dependent is "${enterMname}"`)
       })
    }
      
    this.enterDateOfBirth =  function(selectYear, selectMonth, selectDate) {
       common.calenderBox()
        common.selectYear(selectYear)
        common.selectMonth(selectMonth)
        common.selectDate(selectDate)
    }
    
    this.selectGenderFemale = function() {
       genderFemale.click()
    }

    this.selectGenderMale = function() {
       genderMale.click()
    }

    this.enterPrimaryAddressLine1 = function(address){
        addressLine1.sendKeys(address)
    }

    this.enterPrimaryAddressLine2 =  function(address) {
       addressLine2.sendKeys(address)
    }

    this.enterZipCode =  function(enterZipCode) {
       zipCode.sendKeys(enterZipCode)
       city.click()
       state.click()
    }

    this.enterMobileNumber =  function(number) {
       mobileNumber.sendKeys(number)
        if (mobileNumber != 10) {
            mobileNumber.sendKeys(number)
          }
        else {
          return number
        }
      
      }
  
      this.enterHomeNumber =  function(number) {
         homeNumber.sendKeys(number)
        if (homeNumber != 10) {
            homeNumber.sendKeys(number)
        }
        else {
          return number
        }
      }
  
      this.enterWorkNumber =  function(number) {
         workNumber.sendKeys(number)
        if (workNumber != 10) {
           workNumber.sendKeys(number)
        }
        else {
          return number
        }
      }

      this.enterEmailID =  function(emailAddress) {
          email.sendKeys(emailAddress)
    }

    this.validateCOB =  function() {
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

    this.naviagteToAddDependent =  function() {
       nextButton.click()
       browser.sleep(3000) 
        browser.getCurrentUrl()
      .then( function () {
          console.log("Navigated to AddDependent Screen")
      })
    }

    this.naviagteToProduct =  function() {
       addProductLink.click()
       browser.sleep(3000)
       browser.getCurrentUrl().then( function () {
          console.log("Navigated to Product Screen")
      })
    }
}
