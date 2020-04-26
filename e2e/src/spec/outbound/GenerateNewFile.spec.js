const generateNewFile = require('../../po/outbound/GenerateNewFile.po')
const home = require('../../po/home.po')
const login = require('../../po/login.po')
let url = '/#/dashboard'
let userAddress = browser.params.credentails.userName
let userPasword = browser.params.credentails.password

describe("Generate new file for the selected partner", function() {

    beforeAll(function() {
        browser.waitForAngularEnabled(false)
        browser.get(url)
        login.loginToTheAppliction(userAddress, userPasword)
        browser.sleep(4000)
        home.navigateToOutboundScreen()
    })

    it("Navigate to outbound generate new file screen and generate file", function() {
        generateNewFile.selectCarrierVendorName("MESF")
        generateNewFile.selectFileType(1)
        generateNewFile.clickOnGenerateButton()
    })
})