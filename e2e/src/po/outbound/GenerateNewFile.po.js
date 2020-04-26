const {browser, element, by} = require ("protractor")
const methods = require("../../lib/methods.lib")

let carrierVendorName = element(by.xpath("//div[@class='completer-holder']/input"))
let fileType = element.all(by.xpath("//label[.='File Type']/..//select/option"))
let generateButton = element(by.xpath("//button[.='Generate']"))

module.exports = new function() {

    this.selectCarrierVendorName = function(vendorName) {
        carrierVendorName.sendKeys(vendorName)
    }

    this.selectFileType = function(index) {
        methods.selectByIndex(fileType,index,3000)
    }

    this.clickOnGenerateButton = function() {
        generateButton.click()
        methods.waitForPageload()
    }
}