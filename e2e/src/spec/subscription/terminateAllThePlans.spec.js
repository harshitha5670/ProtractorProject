const {browser} = require('protractor')
const subscriber = require('../../po/subscription/subscriber.po')
const dependent = require('../../po/subscription/dependent.po')
const products = require('../../po/subscription/products.po')
const home = require('../../po/home.po')
const login = require('../../po/login.po')
const subscriberView = require('../../po/subscription/subscriberView.po')
const productDetails = require('../../po/subscription/productDetailsView.po')
const adjustPriorPlans = require('../../po/subscription/adjustPriorPlans.po')
const data = require('../../data/jsonUtils')
const constant = require('../../constants/numberConstants')
let url = '/#/dashboard'
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password
let clientId = data.readJson('clientId','client1')
let zipcode = data.readJson('zipcode','zipcode1')
let ssn = constant.getRandomNumbers(9)

describe('should add subscriber successfully and Terminate all the plans ', function() {
    
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        // browser.get(url)
        login.loginWithOnClick(userPasword)
         home.navigateToAddSubscriberScreen()
        
    })
    afterAll(function() {
        home.account()
        home.logout()    
   })

    it("should navigate to addsubscriber screen, enter all the details and navigate to addDependent screen" , function() {
      subscriber.enterSsnId(ssn)
      subscriber.enterClientId(clientId)
      subscriber.enterLastName("smith")
      subscriber.enterFirstName("golds")
      subscriber.enterMiddleInitail("k")
      subscriber.enterDateOfBirth(90,5,11)
      subscriber.selectGenderFemale()
      subscriber.enterPrimaryAddressLine1("address line one")
      subscriber.enterPrimaryAddressLine2("address line two")
      subscriber.enterZipCode(zipcode)
      subscriber.enterMobileNumber(number)
      subscriber.enterHomeNumber(number)
      subscriber.enterWorkNumber(number)
      subscriber.enterEmailID("goldsSmith@gold.com")
      subscriber.NaviagteToAddDependent()
    })

    it("should add the Child as an dependent", function() {
        dependent.selectRelationshipOfDependent("CHILD")
        dependent.enterFirstName("Child")
        dependent.enterMiddleInitial("M")
        dependent.enterDateOfBirth(110,1,1)
        dependent.selectGenderMale()
        dependent.saveAndAddOneMoreDependent()

    })

    it("should add Spouse as an dependent", function() {
        dependent.selectRelationshipOfDependent("SPOUSE")
        dependent.enterFirstName("AMY")
        dependent.enterMiddleInitial("I")
        dependent.enterDateOfBirth(95,1,21)
        dependent.selectGenderMale()
        dependent.addProduct()
    })

    it("should select the plans and submit the subscription", function() {
        products.masterEffectiveDate(1,0,1)
        products.selectMedicalPlans(1)
        products.selectDentalPlans(2)
        products.selectVisionPlans(0)
        products.submitSubscriber()
    })

    it("should terminate all the plans of spouse", function() {
        subscriberView.navigateToDependentScreen(1)
        productDetails.terminateAllPlans(1,0,1)
        adjustPriorPlans.clickOnAdjustpriorPlansButton()
        adjustPriorPlans.verifyTerminationDate("01/01/2020",1)
        adjustPriorPlans.verifyTerminationReason("07 - District Request (generates COBRA letter)",1)
        adjustPriorPlans.navigateBackToViewScreen() 
    })

    it("should terminate all the plans of child", function() {
        subscriberView.navigateToDependentScreen(2)
        productDetails.terminateAllPlans(1,0,1)
        adjustPriorPlans.clickOnAdjustpriorPlansButton()
        adjustPriorPlans.verifyTerminationDate("01/01/2020",1)
        adjustPriorPlans.verifyTerminationReason("07 - District Request (generates COBRA letter)",1)
        adjustPriorPlans.navigateBackToViewScreen() 
    })

    it("should terminate all the plans of primary subscriber", function() {
        subscriberView.navigateToDependentScreen(0)
        productDetails.terminateAllPlans(1,0,1)
        adjustPriorPlans.clickOnAdjustpriorPlansButton()
        adjustPriorPlans.verifyTerminationDate("01/01/2019",1)
        adjustPriorPlans.verifyTerminationReason("07 - District Request (generates COBRA letter)",1)
        adjustPriorPlans.navigateBackToViewScreen() 
    })

    
})
