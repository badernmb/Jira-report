'use strict';
const login_page = require('./login_page');
const main_page = require('./main_page');
const account_settings_page = require('./account_settings_page');
const neqaty_page = require('./neqaty_page');


class controller{

  async findTextbox(page, element, keys){

      switch (page) {

        case "login":
        await  login_page.findTextbox(element, keys);
        break;

        case "account settting":
        await account_settings_page.findTextbox(element, keys);
        break;

        default:

      }
}

  async findButton(page, button){

      switch (page) {

        case "login":
        await login_page.findButton(button);
        break;

        case "main":
        await main_page.findButton(button);
        break;

        case "account settting":
        await account_settings_page.findButton(button);
        break;

          break;
        default:
      }
  }

  async findField(field, result, page ){

      switch (page) {

        case "Neqaty":
        await neqaty_page.findField(field, result);
        break;

        default:
      }
    }
}
   module.exports = new controller();
