const {browser,element,by} = require('protractor')
const method = require('../../lib/methods.lib')

let accountManager = element(by.xpath("//label[.='Account Manager']/..//div/input"))
let benefitTechnicianIII = element(by.xpath("//label[.='Employee Benefit Technician III']/..//div/input"))
let benefitTechnicianI = element(by.xpath("//label[.='Employee Benefit Technician I']/..//div/input"))
let clientButton = element(by.xpath("//button[.='Client']"))
let consultant = element(by.xpath("//button[.='Consultant']"))
let consultant_name = element(by.xpath("//label[.='Consultant Name']/..//div/input"))
let consultant_firm = element(by.xpath("//label[.='Consultant Firm']/..//div/input"))
let submitButton = element(by.xpath("//button[.='Submit']"))

module.exports = new function() {

    this.selectAccountManager = function (name) {
        method.downArrow(accountManager, name, 5000)
    
    }

    this.selectTechnicianIII = function (name) {
        method.downArrow(benefitTechnicianIII, name, 5000)
    }
    
    this.selectTechnicianI = function(name) {
        method.downArrow(benefitTechnicianI, name, 5000)
    }
    
    this.clientContacts  = function() {
        clientButton.click()    
    }
    
    this.submitClient = function() {
        submitButton.click()
        browser.driver.sleep(5000)
        browser.getCurrentUrl().then(function() {
          console.log("Client added successfully")
        })
       
    }
}
