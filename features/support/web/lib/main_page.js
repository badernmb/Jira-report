'use strict';

const By = require('selenium-webdriver').By;

class mainPage{

  constructor(){
  }


  async findButton(button){

      switch (button) {

        case "English":
        await this.clickbylinkedtext(button);
        break;

        case "Account Settings":
        await this.clickbylinkedtext(button);
        break;

        case "Neqaty":
        await this.clickbylinkedtext(button);
        break;

      }
  }



  async clickbylinkedtext(text){
    await driver.findElement(By.linkText(text)).click();
  }


}
    module.exports = new mainPage();
