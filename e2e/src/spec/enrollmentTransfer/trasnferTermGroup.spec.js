const {browser} = require('protractor')
const enrollement = require('../../po/enrollmentTransfer/enrollmentTransfer.po')
const transeferTermGroup = require('../../po/enrollmentTransfer/transferTermGroup')
const home = require('../../po/home.po')
const login = require('../../po/login.po')
const data = require('../../data/jsonUtils')
const viewStatus = require('../../po/enrollmentTransfer/viewStatus.po')
let url = '/#'
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password
let clientId = data.readJson('clientId','client1')

describe("should transfer new plan to the subscriber",function() {
beforeAll(function() {
    browser.waitForAngularEnabled(false)
    browser.get(url)
    login.loginToTheAppliction(userAddress,userPasword)
    home.navigateToEnrollmentTransferScreen()
})
it("should navigate to Transfer/Term Group screen and transfer medical plan",function() {
    enrollement.selectClient(clientId)
    enrollement.tabOnTransferTermGroup()
    transeferTermGroup.selectMedicalPlan("Medical",4,3)
   // transeferTermGroup.selectProduct("Medical")
    //transeferTermGroup.selectMedicalPlan(1)
    //transeferTermGroup.selectNewPlan(3)
    transeferTermGroup.TermEffDate(0,2,1)
    transeferTermGroup.clickOnAddTaskButton()
    enrollement.submitTasks()
    viewStatus.navigateToViewStatusScreen()
    viewStatus.viewBatchRecord(0)
})
})