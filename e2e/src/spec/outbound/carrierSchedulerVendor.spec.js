const home = require('../../po/home.po')
const login = require('../../po/login.po')
const vendor = require('../../po/outbound/CarrierSchedulerVendor.po')
let url = '/#/dashboard'
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password

describe("set the scheduler for everyday and everyweekday", function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        browser.get(url)
        login.loginToTheAppliction(userAddress, userPasword)
        browser.sleep(4000)
        home.navigateToOutboundScreen()
    })

    afterAll(function() {
        browser.close()
    })
    
    it("should set the scheduler for the vendor daily", function() {
        vendor.NavigateToCarrierSchedulerVendorScreen()
        vendor.setSchedulerPatternDaily(3,3,1)
    })

    it("should set the scheduler for the vendor at every weekday", function() {
        vendor.NavigateToCarrierSchedulerVendorScreen()
        vendor.setSchedulerPatternEveryWeekDay(4,7,0)
    })
})

