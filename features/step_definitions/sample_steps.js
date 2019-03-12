'use strict';

var {Given,When, Then} = require('cucumber');
const hooks = require('../support/hooks/hooks');
const {Builder, until} = require('selenium-webdriver');

let h1 = new hooks()

Given('the login page of mobily portal', async function () {
  // Write code here that turns the phrase above into concrete actions
        await login_page.navigateToLoginPage()

});

