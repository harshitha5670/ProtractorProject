//Code to handle date pickers

const {browser,by, element} = require('protractor')
const method = require('./methods.lib')

const calender = element(by.xpath("//div[@class='calender-box']/input"))
const year = element.all(by.xpath("//select[@class='ui-datepicker-year']/option"))
const month = element.all(by.xpath("//select[@class='ui-datepicker-month']/option"))
const date = element.all(by.xpath("//table[@class='ui-datepicker-calendar']//tbody//td/a"))
 

const common = function() {

    this.calenderBox = function() {
       calender.click()
       browser.sleep(3000)
    }

    this.selectYear =  function(selectYear) {
         method.selectByIndex(year,selectYear)
    }
    
    this.selectMonth =  function(selectMonth) {
         method.selectByIndex(month, selectMonth)
    }

    this.selectDate =  function(selectDate) {
         method.selectByVisibleText(date, selectDate)
    }
    
}

module.exports = new common