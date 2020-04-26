const {browser} = require('protractor')
const subscriber = require('../../po/subscription/subscriber.po')
const products = require('../../po/subscription/products.po')
const home = require('../../po/home.po')
const login = require('../../po/login.po')
const personalDeatils = require('../../po/subscription/personalDetailsView.po')
const subscriberView = require('../../po/subscription/subscriberView.po')
const data = require('../../data/jsonUtils')
const constant = require('../../constants/numberConstants')
let url = '/#/dashboard'
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password
let zipcode = data.readJson('zipcode','zipcode2')
let number = constant.getRandomNumbers(10)
let id = constant.getRandomNumbers(5)

describe('should add a subscriber and edit the personal details of the subscriber', function() {
 
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        browser.get(url)
        login.loginWithOnClick(userPasword)
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
  

    it("should edit navigate personal details screen and edit the details of the suscriber", function() {
        subscriberView.tabOnPersonalDetails()
        personalDeatils.clickOnEditButton()
        personalDeatils.enterLastName("James")
        personalDeatils.enterFirstName("Ali")
        personalDeatils.enterMiddleInitail("p")
        personalDeatils.enterDateOfBirth(80,2,11)
        personalDeatils.addNewAddress()
        personalDeatils.enterSecondaryAddressLine1("secondary address line one")
        personalDeatils.enterSecondaryAddressLine2("secondary address line two")
        personalDeatils.enterSecondaryAddressZipcode(zipcode)
        personalDeatils.enterMobileNumber(number)
        personalDeatils.enterHomeNumber(number)
        personalDeatils.enterEmailID("Jamesali@p.com")
        method.scrollDownThepage()
        personalDeatils.enterAlternateId(4,id)
        subscriberView.updateButton()

    })
})