const {browser} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../../lib/common.lib')


let insurerID = element.all(by.xpath("//label[.='Insurer ID']/../..//select/option")) 
let clientID = element(by.xpath("//label[.='Client ID']/..//input"))
let clientName = element(by.xpath("//label[.='Client Name']/..//input"))
let country = element.all(by.xpath("//label[.='County']/..//select/option"))
let association = element.all(by.xpath("//label[.='Association']/..//select/option"))
let customerServiceLocation = element.all(by.xpath("//label[.='Customer Service Location']/..//select/option"))
let addressLine1 = element(by.xpath("//label[.='Address Line 1']/../..//hear2-input-controls/input"))
let addressLine2 = element(by.xpath("//label[.='Address Line 2']/../..//hear2-input-controls/input"))
let zipcode = element(by.xpath("//label[.='Zipcode']/..//input"))
let city = element(by.xpath("//label[.='City']"))
let state = element(by.xpath("//label[.='State']"))
let phoneNumber = element(by.xpath("//label[.='Phone']/..//input"))
let faxNumber = element(by.xpath("//label[.='Fax']/..//input"))
let setting_eRAAG = element(by.xpath("//div/hear2-client-info/div[2]/div[4]/div[1]/div[2]/label/span"))
let addClientContactsButton = element(by.xpath("//button[.='Next: Add client contacts']"))


module.exports = new function() {

    this.selectInsurerID = function (selectInsurer) {
        method.selectByIndex(insurerID, selectInsurer)
    }

    this.dateOfJoining = function(selectYear, selectMonth, selectDate) {
        common.calenderBox()
        common.selectYear(selectYear)
        common.selectMonth(selectMonth)
        common.selectDate(selectDate)
    }
      
    this.enterClientID = function(id) {   
        return clientID.sendKeys(id)
        .then(function () {
            console.log(`client ID is "${id}"`)
        })
    }
   
    this.enterClientName = function (name) {
       return clientName.sendKeys(name)
         .then(function () {
           console.log(`client name is "${name}"`)
        })
    } 
   
    this.selectCountry = function (selectCountry) {
        method.selectByIndex(country, selectCountry)  
    }


    this.selectAssociation = function (selectassociation) {
        method.selectByIndex(association, selectassociation)
    }
         
    this.selectCustomerServiceLocation = function (selectserviceLocation) {
        method.selectByIndex(customerServiceLocation, selectserviceLocation)
    
    }

    this.enterAddressLine1 = function(address) {
        addressLine1.sendKeys(address)
    }
   
    this.enterAddressLine2 = function(address) {
        addressLine2.sendKeys(address)
    }
   
    this.enterZipcode = function (enterZipcode) {
        zipcode.sendKeys(enterZipcode)
        city.click()
        state.click()
        browser.driver.sleep(2000)

    }
       
    this.enterPhoneNumber = function(phone) {
        phoneNumber.sendKeys(phone)
         if (phoneNumber.length != 10) {
           phoneNumber.sendKeys(method.getRandomNumber(10))
        }
    }
   
    this.enterFaxNumber = function(fax) {
        faxNumber.sendKeys(fax)
         if (faxNumber.length != 10) {
           faxNumber.sendKeys(method.getRandomNumber(10))
        }
         
    }
   
    this.navigateToClientContacts = function() {
        addClientContactsButton.click()
        browser.sleep(3000)
       browser.getCurrentUrl().then(function () {
         console.log("Navigated To Client ContactInfo Screen")
       })
   
    }
}