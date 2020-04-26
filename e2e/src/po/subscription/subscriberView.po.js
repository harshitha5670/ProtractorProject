const {browser,element,by} = require('protractor')

let subscriberName = element(by.xpath("//div[@class='row card-block']/../..//div/h1"))
let subscriberSsn = element(by.xpath("//span[@class='s-ssn'][1]"))
let personalDetailsTab = element(by.xpath("//label[.='Personal Details']"))
let productsDetailsTab = element(by.xpath("//label[.='Product']"))
let historyTab = element(by.xpath("//label[.='History']"))
let getHistoryButton = element(by.xpath("//button[.='Get History']"))
let refreshButton = element(by.xpath("//button[.='Refresh']"))
let billingTab = element(by.xpath("//label[.='Billing']"))
let getBillingButton = element(by.xpath("//button[.='Get Bill Details']"))
let updateButton = element(by.xpath("//button[.='Update']"))
let dependentList = element.all(by.xpath("//div[@class='row list-group dependent-list'])"))
let addMoreDependents = element(by.xpath("//span[.='Add more dependents']"))
let notesTab = element(by.xpath("//label[@aria-controls='panel3']"))
let notesTextArea = element(by.xpath("////label[@aria-controls='panel3']/..//textarea"))
let notesIndicator = element(by.xpath("//label[@aria-controls='panel3']//img"))

module.exports= new function() {

    this.getSubscriberName = function() {
    subscriberName.getAttribute('text').then(function(name){
        console.log(name)
      }) 
    }
    
    this.getSubscriberSsn = function() {
    subscriberSsn.getAttribute('text')
    .then(function(ssn) {      
          console.log(ssn)
        })
    }
    
    this.tabOnPersonalDetails = function () {
       personalDetailsTab.click()
       browser.sleep(3000)
    }
  
    this.tabOnProductDetails = function () {
      productsDetailsTab.click()
    }
  
    this.tabOnHistory = function() {
        historyTab.click()
        browser.sleep(4000)
    }

    this.tabOnBilling = function() {
        billingTab.click()
        browser.sleep(5000)
    }
  
    this.getHistory = function() {
        getHistoryButton.click()
        browser.sleep(10000)
    }

    this.refreshButton = function() {
        if(refreshButton.isDisplayed()) {
            try {
                refreshButton.click()
                browser.sleep(30000)
            } catch (error) {
                console.log("refresh button not displayed")
                
            }
         }
 
    }

    this.getBillingHistory = function() {
        getBillingButton.click()
        browser.sleep(10000)
    }

    this.updateButton = function() {
        updateButton.click()
    }
      
    this.addMoreDependents = function() {
        addMoreDependents.click()
        browser.sleep(5000)
    }

    this.tabOnNotes = function() {
        notesTab.click()
    }

    this.writeNote = function(notes) {
        notesTextArea.sendKeys(notes) 
    }
    
    this.indicatorOfNotes = function() {
        notesIndicator.getAttribute("class") 
    }

    this.navigateToDependentScreen = function(index) {
       browser.wait(EC.visibilityOf(dependentList.get(index)),5000)
        dependentList.get(index).click()
        browser.sleep(6000)
    }
}