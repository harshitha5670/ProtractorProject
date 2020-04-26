
const environment = process.env.ENV ? process.env.ENV : 'dev';
const fs = require('fs-extra')

exports.config = {
  
  SELENIUM_PROMISE_MANAGER: true,
  getPageInterval: 150000,
  allScriptsTimeout: 3000000,
  getPageTimeout : 10000000,

  capabilities: {
    'browserName': 'chrome',
    chromeOptions :{
      args : ["--headless", "--disable-gpu"]
    }
  },
   specs: [
     './e2e/src/spec/client/addClient.spec.js',
    //  './e2e/src/spec/enrollmentTransfer/terminateSubscriber.spec.js',
    //  './e2e/src/spec/enrollmentTransfer/transferSubscriber.spec.js',
    //  './e2e/src/spec/enrollmentTransfer/trasnferTermGroup.spec.js',
    //  './e2e/src/spec/otherAdjustemts/approveAdjustment.spec.js',
    //  './e2e/src/spec/otherAdjustemts/submitAdjustment.spec.js',
    //  './e2e/src/spec/outbound/GenerateNewFile.spec.js',
    //  './e2e/src/spec/payments/approvePayments.spec.js',
    //  './e2e/src/spec/payments/submitPayments.spec.js',
    //  './e2e/src/spec/subscription/addSubscriber.spec.js',
    //  './e2e/src/spec/subscription/addSubscriberWithTwoDependents.spec.js',
    //  './e2e/src/spec/subscription/editEffectiveDatesOfPlans.spec.js',
    //  './e2e/src/spec/subscription/editPersonalDeatilsOfSubscriber.spec.js',
    //  './e2e/src/spec/subscription/getHistoryOfSubscription.spec.js',
    //  './e2e/src/spec/subscription/terminateAllThePlans.spec.js'     
],


  // suites: {
  //   regression: './e2e/src/spec/**/*.spec.js',
  

  // },
  
  directConnect: true,
  baseUrl: environment == 'qa' ? 'https://hearwebapp-qa.azurewebsites.net/' :
    environment == 'dev' ? 'https://hearwebapp-dev.azurewebsites.net/' :
      environment == 'stage' ? 'https://hearwebapp-staging.azurewebsites.net/' :
        environment == 'prod' ? 'https://siscbenefits.com/' : 'https://hearwebapp-dev.azurewebsites.net/',
  framework: 'jasmine',

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 300000,
  },

  params: {
    postDeploy : false,
    credentails :{
      userName :'', // add login email address
      password : '' // add login password
    }

  },
  
  onPrepare() {
    browser.driver.manage().window().maximize()
    browser.ignoreSynchronization = true
  }
}
