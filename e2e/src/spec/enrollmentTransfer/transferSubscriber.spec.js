const {browser} = require('protractor')
const enrollementTerm = require('../../po/enrollmentTransfer/enrollmentTransfer.po')
const transferSubscriber = require('../../po/enrollmentTransfer/transferSusbcriber.po')
const home = require('../../po/home.po')
const login = require('../../po/login.po')
const data = require('../../data/jsonUtils')
let url = '/#'
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password
let clientId = data.readJson('clientId','client1')

describe("should submit multiple transfer subscriber task", function() {
    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        browser.get(url)
        login.loginToTheAppliction(userAddress, userPasword)
        home.navigateToEnrollmentTransferScreen()
    })
    
     afterAll(function() {
         home.account()
         home.logout()    
    })

    it("should select the subscriber ,select plans and add multiple task", function() {
        enrollementTerm.selectClient(clientId)
        enrollementTerm.selectSubscriber(234)
        transferSubscriber.selectQualifyingEventYes()
        transferSubscriber.selecthealthPlan(3)
        transferSubscriber.searchDentalPlan(4)
        transferSubscriber.setEffectiveDate(0,3,1)
        transferSubscriber.clickOnAddTask()
        enrollementTerm.submitTasks()
        
    })

})