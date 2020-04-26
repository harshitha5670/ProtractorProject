const {browser} = require('protractor')
const subscriber = require('../../po/subscription/subscriber.po')
const products = require('../../po/subscription/products.po')
const home = require('../../po/home.po')
const login = require('../../po/login.po')
const productDetails = require('../../po/subscription/productDetailsView.po')
const subcriberview = require('../../po/subscription/subscriberView.po')
const adjustPrior = require('../../po/subscription/adjustPriorPlans.po')
const data = require('../../data/jsonUtils')
const constant = require('../../constants/numberConstants')
let url = '/#/dashboard'
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password
let clientId = data.readJson('clientId','client1')
let zipcode = data.readJson('zipcode','zipcode1')
let ssn = constant.getRandomNumbers(9)
let number = constant.getRandomNumbers(10)

describe('should add new subscriber and edit the effective dates of the plans , transfer the plans ', function() {

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

    it("should navigate to addsubscriber screen, enter all the details and navigate to product screen" , function() {
      subscriber.enterSsnId(ssn)
      subscriber.enterClientId(clientId)
      subscriber.enterLastName("smith")
      subscriber.enterFirstName("golds")
      subscriber.enterMiddleInitail("k")
      subscriber.enterDateOfBirth(100,5,11)
      subscriber.selectGenderFemale()
      subscriber.enterPrimaryAddressLine1("address line one")
      subscriber.enterPrimaryAddressLine2("address line two")
      subscriber.enterZipCode(zipcode)
      subscriber.enterMobileNumber(number)
      subscriber.enterHomeNumber(number)
      subscriber.enterWorkNumber(number)
      subscriber.enterEmailID("stevejobs@iphone.com")
      subscriber.naviagteToProduct()
    })

    it("should select the plans and submit the subscription", function() {
        products.masterEffectiveDate(1,0,1)
        products.selectMedicalPlans(1)
        products.selectDentalPlans(2)
        products.selectVisionPlans(0)
        products.submitSubscriber()
    })

    it("should edit the effective date of the plans by edit all option", function() {
        productDetails.editEffectiveDateOfAllPlans(2,1,1)
       
    })

    it("should transfer the plans" , function() {
        productDetails.viewAllElegiblePlans()
        productDetails.masterEffectiveDate(2,0,1)
        productDetails.selectMedicalPlans(1)
        productDetails.selectDentalPlans(1)
        productDetails.selectVisionPlans(1)
        subcriberview.updateButton()

    })
    it("should verify the plans are transfer", function() {
        method.scrollUpThePage()
        adjustPrior.clickOnAdjustpriorPlansButton()
        adjustPrior.verifyTerminationDate("12/31/2018",0)

    })
})
