const {browser} = require('protractor')
const subscriber = require('../../po/subscription/subscriber.po')
const dependent = require('../../po/subscription/dependent.po')
const products = require('../../po/subscription/products.po')
const home = require('../../po/home.po')
const login = require('../../po/login.po')
const view = require('../../po/subscription/subscriberView.po')
const data = require('../../data/jsonUtils')
const constant = require('../../constants/numberConstants')
let url = '/#/dashboard'
let clientId = data.readJson('clientId','client1')
let zipcode = data.readJson('zipcode','zipcode1')
let ssn = constant.getRandomNumbers(9)
let number = constant.getRandomNumbers(10)
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password

describe('should get the history and billing detils of the subscriber and dependent', function() {
 
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
       browser.get(url)
       login.loginToTheAppliction(userAddress,userPasword)
      // login.loginWithOnClick(userPasword)
       home.navigateToAddSubscriberScreen()
        
    })
    
  //   afterAll(function() {
  //     home.account()
  //     home.logout()
  // })

    it("should navigate to addsubscriber screen, enter all the details and navigate to addDependent screen" , function() {
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
        subscriber.naviagteToAddDependent()
      })
      
      it("should add the Child as an dependent", function() {
        dependent.selectRelationshipOfDependent("CHILD")
        dependent.enterFirstName("Child")
        dependent.enterMiddleInitial("M")
        dependent.enterDateOfBirth(110,1,1)
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
    
    it("should get the history and billingHistory of the subscriber ", function() {
        view.tabOnHistory()
        view.getHistory()
    //    view.tabOnBilling()
      //  view.getBillingHistory()
           
    })

    it("should get the history of dependent", function() {
        view.navigateToDependentScreen(0)
        view.tabOnHistory()
        view.getHistory() 
    })
})
