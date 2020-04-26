const {browser} = require('protractor')
const method = require('../../lib/methods.lib')
const common = require('../../lib/common.lib')

clientInformationLink = element(by.xpath("//a[.='Client Information']"))
contactDetailsLink = element(by.xpath("//a[.='Contact details']"))
editButton = element(by.xpath("//button[.='Edit']"))
terminateButton = element(by.xpath("//button[.='Terminate']"))
dateJoining = element(by.xpath("//label[.='Date Joined']/..//div"))
clientId = element(by.xpath("//label[.='Client ID']/..//div"))
clientName = element(by.xpath("//label[.='Client Name']/..//div"))


module.exports = function() {

    terminatePlan = function(){
        method.clickOnElement(terminateButton)
    }

    editPlanEffectiveDate = function() {
        method.clickOnElement(editButton)
    }

    getClientName =function() {
        clientName.getText().then(function(name) {
            console.log(`clientName is "${name}" `)
        })
    }

    getClientID =function() {
        console.log(`Client ID "${clientId.getText()}" `)
    }

    navigateToClientInformtion =function() {
       method.clickOnElement(clientInformationLink)
    }

    navigateToClientDetails =function() {
        method.clickOnElement(contactDetailsLink)
    }
}
