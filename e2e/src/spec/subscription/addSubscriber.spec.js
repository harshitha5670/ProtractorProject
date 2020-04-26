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

describe('should add new subscriber successfully', function() {
    
    beforeAll( function() {
         browser.waitForAngularEnabled(false)
         browser.get(url)
         login.loginToTheAppliction(userAddress,userPasword)
        // login.loginWithOnClick(userPasword)
         home.navigateToAddSubscriberScreen()
        
    })
    // afterAll(then(function() {
    //     home.account()
    //     home.logout()
    // }))
  
   
    it("should navigate to addsubscriber screen, enter all the details and navigate to dependent screen" ,  function() {
       subscriber.enterSsnId(ssn)
       subscriber.enterClientId(clientId)
       subscriber.enterLastName("active")
       subscriber.enterFirstName("plan")
       subscriber.enterMiddleInitail("I")
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

    it("should select the relationship ,enter the details and navigate to product screen",  function() {
         dependent.selectRelationshipOfDependent("CHILD")
         dependent.enterFirstName("spouse")
         dependent.enterMiddleInitial("I")
         dependent.enterDateOfBirth(100,1,21)
         dependent.selectGenderMale()
         dependent.addProduct()
    })

    it("should select the plans and submit the subscription",  function() {
         products.masterEffectiveDate(2,0,1)
         products.selectMedicalPlans(1)
         products.selectDentalPlans(0)
         products.selectVisionPlans(0)
         //products.enterCobraDetails(3,3,2,1,4,3,1)
         products.submitSubscriber()
    })
})
