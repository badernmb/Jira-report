'use strict';

const By = require('selenium-webdriver').By;
var assert = require('assert');


class neqatyPage{

  constructor(){
  }

  async findTextbox(element, keys){}

  async findButton(button){}

  async findField(field, expected){

      switch (field) {

        case "Neqaty Balance":
        await this.evaluateResult(expected);
        break;

        default:
      }
  }
  async inputText(element,keys){}

  async clickById(id){}

  async evaluateResult(expected){
    var actual =   await driver.findElement(By.className("current_balance")).getText()
    assert.equal(actual, expected, "Expected result doesn't equale to actual result")

  }
}
    module.exports = new neqatyPage();
