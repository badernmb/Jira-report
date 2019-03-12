Feature: Account info features



Scenario: Login then edit profile information
   Given the login page of mobily portal
   And  I'm in "login" page and I want to input "username" as "badernmb"
   And  I'm in "login" page and I want to input "password" as "cgcHAA189"
   And  I'm in "login" page and I want to click "login"
   And  I'm in "main" page and I want to click "English"
   And  I'm in "main" page and I want to click "Account Settings"
   And  I'm in "account settting" page and I want to click "showLoginInfoLink"
   And  I'm in "account settting" page and I want to input "facebookId" as "badernmb@gmail.com"
   And  I'm in "account settting" page and I want to input "securityAnswer" as "hello its me"
   And  I'm in "account settting" page and I want to click "loginInformationSubmitBtn"
   And  I'm in "account settting" page and I want to click "showGenInfoLink"
   And  I'm in "account settting" page and I want to input "firstName" as "بدر"
   And  I'm in "account settting" page and I want to input "lastName" as "البليهيص"
   And  I'm in "account settting" page and I want to input "birthDate" as "07/08/2018"
   Then I'm in "account settting" page and I want to click "editAccountInformationSaveBtn"

   Scenario: Check neqaty balance
      Given the login page of mobily portal
      And  I'm in "login" page and I want to input "username" as "badernmb"
      And  I'm in "login" page and I want to input "password" as "cgcHAA189"
      And  I'm in "login" page and I want to click "login"
      And  I'm in "main" page and I want to click "English"
      And  I'm in "main" page and I want to click "Neqaty"
      Then "Neqaty Balance" should be equle to "336" in "Neqaty" page
