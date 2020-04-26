const {browser} = require('protractor')
const subscriber = require('../../po/subscription/subscriber.po')
const dependent = require('../../po/subscription/dependent.po')
const products = require('../../po/subscription/products.po')
const home = require('../../po/home.po')
const login = require('../../po/login.po')
const data = require('../../data/jsonUtils')
const constant = require('../../constants/numberConstants')
let url = '/#/dashboard'
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password
let clientId = data.readJson('clientId','client1')
let zipcode = data.readJson('zipcode','zipcode1')
let ssn = constant.getRandomNumbers(9)
let number = constant.getRandomNumbers(10)

describe("should enroll subscription with three members", function() {

    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        browser.get(url)
        login.loginToTheAppliction(userAddress,userPasword)
        //login.loginWithOnClick(userPasword)
        home.navigateToAddSubscriberScreen()
    })

    afterAll(function() {
        home.account()
        home.logout()    
   })
   
    it("should enter the details of the subscriber and naviagte to dependent screen", function() {
        subcriber.enterSsnId(ssn)
        subcriber.enterClientId(clientId)
        subcriber.enterLastName("plans")
        subcriber.enterFirstName("all active")
        subcriber.enterMiddleInitail("t")
        subcriber.enterDateOfBirth(90,5,12)
        subcriber.selectGenderMale()
        subcriber.enterPrimaryAddressLine1("address line one")
        subcriber.enterZipCode(zipcode)
        subcriber.naviagteToAddDependent()
    })
    it("should add the Child as an dependent", function() {
        dependent.selectRelationshipOfDependent("CHILD")
        dependent.enterFirstName("Child")
        dependent.enterMiddleInitial("M")
        dependent.enterDateOfBirth(110,1,1)
        dependent.selectGenderMale()
        dependent.saveAndAddOneMoreDependent()

    })
    it("should add Domestic partner as an dependent", function() {
        dependent.selectRelationshipOfDependent("DOMESTIC PARTNER (DOM)")
        dependent.enterFirstName("Domestic")
        dependent.enterMiddleInitial("I")
        dependent.enterDateOfBirth(100,1,21)
        dependent.selectGenderMale()
        dependent.addProduct()
    })

    it("should select the plans and submit the subscriber", function() {
        produts.masterEffectiveDate(1,0,1)
        produts.selectMedicalPlans(0)
        produts.selectDentalPlans(0)
        produts.selectVisionPlans(0)
        produts.submitSubscriber()
    })
})
