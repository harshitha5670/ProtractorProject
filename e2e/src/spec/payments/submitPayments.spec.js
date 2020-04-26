const {browser} = require('protractor')
const home = require('../../po/home.po')
const login = require('../../po/login.po')
const recordPayment = require('../../po/payments/recordPayments.po')
const viewPayments = require('../../po/payments/viewPayments.po')
const data = require('../../data/jsonUtils')
const constant = require('../../constants/numberConstants')
let number = constant.getRandomNumbers(6)
let clientId = data.readJson('clientId','client1')
let url = '/#/dashboard'
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password



describe('should navigate to the rrecord payments screen, submit the payments and approve the payment from the view payments screen', function() {
    browser.ignoreSynchronization = true;
    
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        browser.get(url)
        login.loginToTheAppliction(userAddress,userPasword)
       // login.loginWithOnClick(userPasword)
        home.navigateToaAddViewPaymentScreen()
    })
    
    
    afterAll(function() {
        home.account()
        home.logout()    
   })

    it("should submit the payments ", function() {
        recordPayment.enterReferenceNumber(number)
        recordPayment.depositDate(2,1,12)
        recordPayment.enterClientId(clientId)
        recordPayment.checkDate(1,1,21)
        recordPayment.enterCheckNumber(number)
        recordPayment.enterCheckAmount(number)
        recordPayment.clickAddButton()
        recordPayment.clickSubmitButton()
    })

    it("should navigate to the view payments screen , and approve the payments",function() {
        viewPayments.a
    })
    

})
