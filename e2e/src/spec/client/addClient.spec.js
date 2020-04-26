const {browser} = require('protractor')
const contactDetails = require('../../po/client/clientContactDetails.po')
const clientInformation = require('../../po/client/clientInformation.po')
const home = require('../../po/home.po')
const login = require('../../po/login.po')
const constants = require('../../constants/numberConstants')
const data = require('../../data/jsonUtils')
let url = '/#'
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password
let clientId = constants.getRandomNumbers(5)
let zipcode = data.readJson('zipcode','zipcode1')
let number = constants.getRandomNumbers(10)
let technician = data.readJson('technicians','tech1')

describe("should add new client successfully ", function() {
    
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        browser.get(url)
        login.loginToTheAppliction(userAddress, userPasword)
        home.navigateToClientScreen()
    })
    
    
    //  afterAll(function() {
    //      home.account()
    //      home.logout()    
    // })

    it("should navigate to clients screen and enter the details", function() {
        clientInformation.dateOfJoining(110,0,1)
        clientInformation.selectInsurerID(1)
        clientInformation.enterClientID(clientId)
        clientInformation.enterClientName("New client abcde")
        clientInformation.selectCountry(4)
        clientInformation.selectAssociation(2)
        clientInformation.selectCustomerServiceLocation(4)
        clientInformation.enterAddressLine1("address line one")
        clientInformation.enterAddressLine2("address line two")
        clientInformation.enterZipcode(zipcode)
        clientInformation.enterPhoneNumber(number)
        clientInformation.navigateToClientContacts()
    })

    it("should navigate to client info screen, enter the details and submit the client", function() {
        contactDetails.selectAccountManager(technician)
        contactDetails.selectTechnicianIII(technician)
        contactDetails.selectTechnicianI(technician)
        contactDetails.submitClient()
    })

    
})