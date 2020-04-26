const {browser, element, by} = require('protractor')
const method = require('../../lib/methods.lib')
const commom = require('../../lib/common.lib')

let selectClient = element(by.xpath("//div[@class='completer-holder']/input"))
let transferSubscriber = element(by.xpath("//button[.=' Transfer Subscriber ']"))
let terminateSubscriber = element(by.xpath("//button[.=' Terminate Subscriber ']"))
let transferGroup = element(by.xpath("//button[.=' Transfer/Term Group ']"))
let addNewproduct = element(by.xpath("//button[.=' Add New Product ']"))
let backButton = element(by.xpath("//button[.=' Back ']"))
let resetButton = element(by.xpath("//button[.=' Reset ']"))
let submitButton = element(by.xpath("//button[.=' Submit ']"))
let backTodashboardlink = element(by.xpath("//a[@class='navigation-dashboard ml-1']"))
let viewStatus = element(by.xpath("//a[.='View Status']"))
let selectSubscriber = element(by.xpath("//label[.='Select Subscriber']/..//div/div/div/input"))
let clientIdDeleteIcon = element(by.xpath("(//img[@class='deletebutton pointer'])[1]"))
let subscriberDeleteIcon = element(by.xpath("(//img[@class='deletebutton pointer'])[2]"))
let popNoButton = element(by.xpath("//button[.=No']"))
let popYesButton = element(by.xpath("//button[.='Yes']"))


module.exports = new function() {

    this.selectClient = function(clientId) {
        method.downArrow(selectClient,clientId,3000)
    }

    this.tabOnTransferSubscriber = function() {
        method.waitForPageload()
        transferSubscriber.click()
        method.waitForPageload()
    }

    this.tabOnTerminateSubscriber = function() {
        method.waitForPageload()
        terminateSubscriber.click()
        method.waitForPageload()
    }

    this.tabOnTransferTermGroup = function() {
        method.waitForPageload()
        transferGroup.click()
        method.waitForPageload()
    }

    this.tabOnAddNewProduct = function() {
        method.waitForPageload()
        addNewproduct.click()
        method.waitForPageload()
    }

    this.submitTasks = function() {
        method.waitForPageload()
        submitButton.click()
        method.waitForPageload()
        popYesButton.click()
        method.waitForPageload()
    }

    this.resetScreen = function() {
        method.waitForPageload()
        resetButton.click()
        method.waitForPageload()
    }

    this.backButton = function() {
        method.waitForPageload()
        method.clickOnElement(backButton)
        method.waitForPageload()
    }

    this.backTodashboard = function() {
        method.waitForPageload()
        method.clickOnElement(backTodashboardlink)
        method.waitForPageload()
    }

    this.navigateToviewStatusScreen = function() {
        method.waitForPageload()
        viewStatus.click()
        method.waitForPageload()
    }

    this.selectSubscriber = function(subscriber) {
        method.waitForPageload()
        method.actions(selectSubscriber,subscriber,4000)
    }
    this.clearSubscriberSearch = function() {
        method.waitForPageload()
        subscriberDeleteIcon.click()
        method.waitForPageload()
    }
    this.clearClientSearch = function() {
        method.waitForPageload()
        clientIdDeleteIcon.click()
        method.waitForPageload()
    }

    


}
 