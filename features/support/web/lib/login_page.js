'use strict';

const By = require('selenium-webdriver').By;

class loginPage{

  constructor(){}

  async findTextbox(element, keys){

      switch (element) {

        case "mobileNumberL":
        await  this.inputText(element, keys);
        break;

        case "nationalIdL":
        await  this.inputText(element, keys);
        break;

        case "username":
        await  this.inputTextByName(element, keys);
        break;

        case "password":
        await  this.inputTextByName(element, keys);
        break;

      }
}


  async findButton(button){

      switch (button) {

        case "send SMS":
        await this.sendSMS();
        break;

        case "nationalIdL":
        await  this.inputText(element, keys);
        break;

        case "login":
        await  this.clickbutton("subBtnId");
        break;

        case "mobileLogin":
        await  this.clickbutton("maintabContainter_tablist_mobilyLineDiv");
        break;



      }
  }

  async navigateToLoginPage(){

   await driver.get('https://www.mobily.com.sa/portalu/wps/portal/login-page');
  }

  async clickbutton(element){
    await driver.findElement(By.id(element)).click();
  }

  async inputText(element,keys){
        await driver.findElement(By.id(element)).sendKeys(keys);
  }
  async sendSMS(){
    await driver.findElement(By.css("input[value='Send SMS']")).click();
  }
  async inputTextByName(element,keys){
        await driver.findElement(By.name(element)).sendKeys(keys);
  }



}
    module.exports = new loginPage();
