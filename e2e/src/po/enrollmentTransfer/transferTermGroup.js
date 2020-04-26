const {browser, element, by} = require('protractor')
const method = require('../../lib/methods.lib')
const commom = require('../../lib/common.lib')

let selectProduct = element(by.xpath("//div[@class='col-md-12 custom-select product-type']"))
let products = element.all(by.xpath("//div[@class='col-md-12 custom-select product-type']/select/option"))
let currentPlan = element(by.id("HLTHCurrentPlan_Dropdown"))
let newPlan = element(by.id("HLTHNewPlan_Dropdown"))
let medicalPlans = element.all(by.xpath("//div[@class ='row m-0 clickable align-self-center item-row_health']"))
let dentalPlans = element.all(by.xpath("//div[@class ='row m-0 clickable align-self-center item-row_dental']"))
let visionPlans = element.all(by.xpath("//div[@class ='row m-0 clickable align-self-center item-row_vision']"))
let lifePlans = element.all(by.xpath("//div[@class ='row m-0 clickable align-self-center item-row_life']"))
let terminationReason = element.all(by.xpath("//label[.='Termination Reason']/../../..//div/select/option"))
let addTaskButton = element(by.xpath("//button[.='Add task']"))

module.exports = new function() {
    
    this.selectProduct = function(product) {
        browser.sleep(5000)
        selectProduct.click()
        method.selectByVisibleText(products,product,3000)
    }

    this.selectMedicalPlan = function(product,selectCurrentPlan,selectNewPlan) {
        browser.sleep(5000)
        selectProduct.click()
        method.selectByVisibleText(products,product,3000)
        currentPlan.click()
        method.selectByIndex(medicalPlans,selectCurrentPlan,3000)
        newPlan.click()
        method.selectByIndex(medicalPlans,selectNewPlan,3000)
    }

    this.selectDentalPlan = function(product,selectCurrentPlan, newPlan) {
        browser.sleep(5000)
        selectProduct.click()
        method.selectByVisibleText(products,product,3000)
        currentPlan.click()
        method.selectByIndex(dentalPlans,selectCurrentPlan,3000)
        newPlan.click()
        method.selectByIndex(dentalPlans,selectNewPlan,3000)
    }

    this.selectVisionPlan = function(product,selectCurrentPlan,selectNewPlan) {
        browser.sleep(5000)
        selectProduct.click()
        method.selectByVisibleText(products,product,3000)
        currentPlan.click()
        method.selectByIndex(visionPlans,selectCurrentPlan,3000)
        newPlan.click()
        method.selectByIndex(visionPlans,selectNewPlan,3000)
    }

    this.selectLifePlan = function(product,selectCurrentPlan,selectNewPlan) {
        browser.sleep(5000)
        selectProduct.click()
        method.selectByVisibleText(products,product,3000)
        currentPlan.click()
        method.selectByIndex(lifePlans,selectCurrentPlan,3000)
        newPlan.click() 
        method.selectByIndex(lifePlans,selectNewPlan,3000)

    }
    // this.selectCurrentPlan = function(plan) {
    //     currentPlan.click()
    //     action.waitForPageload()
    //     let selectedProdut = products.getText()
    //     if (selectedProdut === 'Medical') {
    //         action.selectByIndex(medicalPlans,plan,3000)
    //     }
    //     if(selectedProdut === 'Dental') {
    //         action.selectByIndex(dentalPlans,plan,3000)
    //     }
    //     if(selectedProdut === 'Vision') {
    //         action.selectByIndex(visionPlans,plan,3000)
    //     }
    //     if(selectedProdut === 'Life') {
    //         action.selectByIndex(lifePlans,plan,3000)
    //     }

    // }

    // this.selectNewPlan = function(plan) {
    //     newPlan.click()
    //     let selectedProduct = products.getText()
    //     if(selectedProduct === 'Medical') {
    //         action.selectByIndex(medicalPlans,plan,3000)
    //     }
    //     if(selectedProduct === 'Dental') {
    //         action.selectByIndex(dentalPlans,plan,3000)
    //     }
    //     if(selectedProduct === 'Vision') {
    //         action.selectByIndex(visionPlans,plan,3000)
    //     }
    //     if(selectedProduct === 'Life') {
    //         action.selectByIndex(lifePlans,plan,3000)
    //     }
    //  }

    this.TermEffDate = function(year,month,date) {
        commom.calenderBox()
        commom.selectYear(year)
        commom.selectMonth(month)
        commom.selectDate(date)
    }

    this.selectTerminationReason = function(reason) {
        method.selectByIndex(terminationReason,reason,3000)    
    }

    this.clickOnAddTaskButton = function() {
        addTaskButton.click()
        method.waitForPageload()
    }

 }