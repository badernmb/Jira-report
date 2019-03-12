
var hooks =  function (){

var {After, Before, Status} = require('cucumber');
var {AfterAll, BeforeAll} = require('cucumber');
require("chromedriver")
const {Builder, By, until} = require('selenium-webdriver');
var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);


Before(async function () {

    driver = await new Builder()
    .forBrowser('chrome')
    .build();
});




After(async function (testCase) {

 
  });
 
}
  module.exports = hooks;
