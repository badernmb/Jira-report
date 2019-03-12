'use strict';

const By = require('selenium-webdriver').By;

class accountSettingsPage{

  constructor(){
  }

  async findTextbox(element, keys){

      switch (element) {

        case "widget_facebookId":
        await  this.inputText(element, keys);
        break;

        case "securityAnswer":
        await  this.inputText(element, keys);
        break;

        case "firstName":
        await  this.inputText(element, keys);
        break;

        case "lastName":
        await  this.inputText(element, keys);
        break;

        case "birthDate":
        await  this.inputText(element, keys);
        break;

      }
}


  async findButton(button){

      switch (button) {

        case "showLoginInfoLink":
        await this.clickById(button);
        break;

        case "loginInformationSubmitBtn":
        await  this.clickById(button);
        break;

        case "showGenInfoLink":
        await  this.clickById(button);
        break;

      }
  }

  async inputText(element,keys){
        await driver.findElement(By.id(element)).clear()
        await driver.findElement(By.id(element)).sendKeys(keys);
  }

  async clickById(id){
        await driver.findElement(By.id(id)).click();
  }


}
    module.exports = new accountSettingsPage();
