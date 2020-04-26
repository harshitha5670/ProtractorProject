const {browser,element,by} = require('protractor')
const common = require('../../lib/common.lib')
const method = require("../../lib/methods.lib")

let editButton = element(by.xpath("//button[@class='btn btn-outline-primary edit-subscriber-info']"))
let ssnEditButton = element(by.xpath("//div[@class='deletebuttonrecord show-pointer']"))
let acceptSsn = element(by.xpath("//button[@class='btn btn-primary btn-tick']"))
let rejectSsn = element(by.xpath("//button[@class='btn btn-outline-primary btn-tick btn-close-space']"))
let ssnText = element(by.xpath("//label[.='SSN']/..//input"))
let lastName = element(by.xpath("//label[.='Last Name']/..//input"))
let firstName = element(by.xpath("//label[.='First Name']/..//input"))
let middleName = element(by.xpath("//label[.='Middle Initial']/..//input"))
let genderFemale = element(by.xpath("//div[@class='s-radio-box']/label//span[.='Female']"))
let genderMale = element(by.xpath("//div[@class='s-radio-box']/label//span[.='Male']"))
let genderOther = element(by.xpath("//div[@class='s-radio-box']/label//span[.='Other']"))
let boardMemberYes = element(by.xpath("//span[.='Yes']"))
let boardMemberNo = element(by.xpath("//span[.='No']"))
let primaryAddressLineOne = element(by.xpath("//label[.='Address Line 1']/../..//hear2-input-controls/input"))
let primaryAddressLineTwo =  element(by.xpath("//label[.='Address Line 2']/../..//hear2-input-controls/input"))
let clearAddress = element(by.xpath("//span[.='Clear address']"))
let primaryAddressZipCode =  element(by.xpath("(//label[.='Zipcode']/..//input)[1]")) 
let city = element(by.xpath("//label[.='City']"))
let state = element(by.xpath("//label[.='State']"))
let addNewAddress = element(by.xpath("//span[.='Add new address']"))
let secondaryAddressLineOne = element(by.xpath("//span[.=' Secondary Address']/..//div//div//label[.='Address Line 1']/..//input"))
let secondaryAddressZipcode = element(by.xpath("(//label[.='Zipcode']/..//input)[2]"))
let secondaryAddressLineTwo = element(by.xpath("//span[.=' Secondary Address']/..//div//div//label[.='Address Line 2']/..//input"))
let deleteAddress = element(by.xpath("//span[.='Delete this address']"))
let mobileNumber =   element(by.xpath("//label[.='Mobile']/..//input"))
let homeNumber =   element(by.xpath("//label[.='Home']/..//input"))
let workNumber =   element(by.xpath("//label[.='Work']/..//input"))
let email =   element(by.xpath("//label[.='Email']/..//input"))
let cobCheckbox = element(by.xpath("//h3[.='COB']/../..//span"))
let benifitStartDate = element(by.xpath("//label[.='Benefit Start Date']/..//div/input"))
let benifitEndDate = element(by.xpath("//label[.='Benefit End Date']/..//div/input"))
let venderCode = element(by.xpath("//label[.='Vendor Code']"))
let venderSubscriberCode = element(by.xpath("//label[.='Vendor Subscriber Code']"))
let planDetails = element(by.xpath("//label[.='Plan Details']"))
let medicareCheckbox = element(by.xpath("//span[@class='custom-control-description']/h3[.='Medicare']"))
let medicarePartADate = element(by.xpath("//label[.='Medicare Part A Date']/..//div/input"))
let medicarePartBDate = element(by.xpath("//label[.='Medicare Part B Date']/..//div/input"))
let medicareOverrideDate = element(by.xpath("//label[.='Override Date']/..//div/input"))
let medicarePlan = element(by.xpath("//label[.='Medicare Plan #']"))
let alternateIdCheckbox = element(by.xpath("(//h3[.='Alternate ID']/../..//span)[2]"))
let vendorName = element.all(by.xpath("//label[.='Vendor Name']/../..//select/option"))
let alternateId = element(by.xpath("//label[.='ID']/..//input"))
let addAlternateId = element(by.xpath("//span[.='Add Alternate ID']"))
let removeAlternateId = element(by.xpath("//a[@class='removelink']"))

module.exports = new function() {

    this.clickOnEditButton = function() {
        editButton.click()
        browser.sleep(3000)
    }

    this.editSsnOfDependent = function(ssn) {
        ssnEditButton.click()
        ssnText.clear()
        ssnText.sendKeys(ssn)
        if(ssnText.length != 9) {
            ssn.sendKeys(method.getSSNNumberInSplitFormat())
        }   
    }

    this.acceptSsn = function() {
        acceptSsn.click()
        browser.sleep(10000)
    }

    this.rejectSsn = function() {
        rejectSsn.click()
    }

    this.enterFirstName = function(enterFname) {
        firstName.clear()
        return firstName.sendKeys(enterFname)
        .then(function() {
           console.log(`FirstName of the Subscriber is "${enterFname}"`)
       })
    }

    this.enterLastName = function(enterLname) {
        lastName.clear()
        return lastName.sendKeys(enterLname)
        .then(function() {
           console.log(`LastName of the Subscriber is "${enterLname}"`)
       })
    }

    this.enterMiddleInitail = function(enterMname) {
        middleName.clear()
        return middleName.sendKeys(enterMname)
        .then(function() {
           console.log(`MiddleName of the dependent is "${enterMname}"`)
       })
    }

    this.enterDateOfBirth = function(selectYear, selectMonth, selectDate) {
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
    
    this.selectGenderOther = function() {
        genderOther.click()
    }

    this.selectBoardMemberYes = function() {
        boardMemberYes.click()
    }

    this.selectBoardMemberNo = function() {
        boardMemberNo.click()
    }

    this.enterPrimaryAddressLine1 = function(address){
        primaryAddressLineOne.clear()
        primaryAddressLineOne.sendKeys(address)
    }

    this.enterPrimaryAddressLine2 = function(address) {
        primaryAddressLineTwo.clear()
        primaryAddressLineTwo.sendKeys(address)
    }

    this.enterPrimaryAddressZipCode = function(enterZipCode) {
        primaryAddressZipCode.clear()
        primaryAddressZipCode.sendKeys(enterZipCode)
        browser.sleep(3000)
    
    }

    this.addNewAddress = function() {
        addNewAddress.click()
    }

    this.enterSecondaryAddressLine1 = function(address){
        secondaryAddressLineOne.clear()
        secondaryAddressLineOne.sendKeys(address)
    }

    this.enterSecondaryAddressLine2 = function(address) {
        secondaryAddressLineTwo.clear()
        secondaryAddressLineTwo.sendKeys(address)
    }

    this.enterSecondaryAddressZipcode = function(zipcode) {
        secondaryAddressZipcode.clear()
        secondaryAddressZipcode.sendKeys(zipcode)
        browser.sleep(3000)
    }

    this.clearPrimaryAddress = function() {
        clearAddress.click()
    }

    this.deleteSecondaryAddress = function() {
        deleteAddress.click()
    }

    this.enterMobileNumber = function(number) {
        mobileNumber.clear()
        mobileNumber.sendKeys(number)
        if (mobileNumber != 10) {
            mobileNumber.sendKeys(number)
          }
        else {
          return number
        }
      
    }
  
      this.enterHomeNumber = function(number) {
        homeNumber.clear()
        homeNumber.sendKeys(number)
        if (homeNumber != 10) {
            homeNumber.sendKeys(number)
        }
        else {
          return number
        }
    }
  
      this.enterWorkNumber = function(number) {
        workNumber.clear()
        workNumber.sendKeys(number)
        if (workNumber != 10) {
            workNumber.sendKeys(number)
        }
        else {
          return number
        }
      }

      this.enterEmailID = function(emailAddress) {
        email.clear()
        email.sendKeys(emailAddress)
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

    this.enterAlternateId = function(index,id) {
        browser.sleep(3000)
        alternateIdCheckbox.click()
        browser.sleep(4000)
        method.selectByIndex(vendorName,index,2000)
        alternateId.sendKeys(id)
        addAlternateId.click()
    }

    this.removeAltenateId = function() {
        removeAlternateId.click()
    }

}
