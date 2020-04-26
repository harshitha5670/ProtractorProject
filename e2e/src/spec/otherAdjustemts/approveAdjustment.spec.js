const {browser} = require('protractor')
const home = require('../../po/home.po')
const login = require('../../po/login.po')
const recordAdjustment = require('../../po/adjustments/recordAdjustment.po')
const data = require('../../data/jsonUtils')
const constant = require('../../constants/numberConstants')
let url = '/#/dashboard'
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password
let number = constant.getRandomNumbers(6)
let clientId = data.readJson('clientId','client1')


describe('should navigate to record adjusment screen and approve the adjusment', function() {
  
   beforeAll( function() {
         browser.waitForAngularEnabled(false)
         browser.get(url)
        login.loginToTheAppliction(userAddress, userPasword)
       //login.loginWithOnClick(userPasword)
          browser.sleep(4000)
          home.navigateToOtherAdjustementScreen()
    })
     
    afterAll( function() {
          home.account()
          home.logout()    
   })

     it("should approve the other adjustment", function() {
         recordAdjustment.enterClientId(clientId)
         recordAdjustment.datePicker(1,6,1)
         recordAdjustment.enterAdjustementAmount(number)
         recordAdjustment.enterDescription("Description optional")
         recordAdjustment.selectProductCode(3)
         recordAdjustment.selectGroup(4)
         recordAdjustment.selectDeprtment(1)
         recordAdjustment.clickAddButton()
         recordAdjustment.clickApproveButton()
    })

})

