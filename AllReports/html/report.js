$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/featureFile/login.feature");
formatter.feature({
  "name": "To validate the login function of facebook application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    \t\tVerify user able to login app by Valid username and valid password",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@sanity"
    },
    {
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter the url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter the \"\u003cEmail\u003e\" address and \"\u003cpassword\u003e\"",
  "rows": [
    {
      "cells": [
        "Username",
        "Password",
        "Passcode"
      ]
    },
    {
      "cells": [
        "Greens",
        "Ch-098",
        "12345"
      ]
    },
    {
      "cells": [
        "Java",
        "1234-QWE",
        "67345"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_the_address_and(String,String,DataTable)"
});
formatter.result({
  "error_message": "junit.framework.AssertionFailedError\r\n\tat junit.framework.Assert.fail(Assert.java:55)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\r\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\r\n\tat org.stepdefine.StepDefinition.user_have_to_enter_the_address_and(StepDefinition.java:88)\r\n\tat ✽.User have to enter the \"\u003cEmail\u003e\" address and \"\u003cpassword\u003e\"(src/test/resources/featureFile/login.feature:9)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "",
  "description": "    Verify that user able to login by Valid username and Invalid Password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smoke"
    },
    {
      "name": "@reg"
    },
    {
      "name": "@log"
    },
    {
      "name": "@fine"
    }
  ]
});
formatter.step({
  "name": "User have to enter the url",
  "keyword": "When "
});
formatter.step({
  "name": "User have to enter the valid \"\u003cusername\u003e\" and invalid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User have to click the login button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Java",
        "JDK_1.8"
      ]
    },
    {
      "cells": [
        "Selenium",
        "Sel-098"
      ]
    },
    {
      "cells": [
        "GIT",
        "gt_1223"
      ]
    }
  ]
});
formatter.scenario({
  "name": "",
  "description": "    Verify that user able to login by Valid username and Invalid Password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@reg"
    },
    {
      "name": "@log"
    },
    {
      "name": "@fine"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter the url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter the valid \"Java\" and invalid \"JDK_1.8\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_the_valid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    Verify that user able to login by Valid username and Invalid Password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@reg"
    },
    {
      "name": "@log"
    },
    {
      "name": "@fine"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter the url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter the valid \"Selenium\" and invalid \"Sel-098\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_the_valid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "    Verify that user able to login by Valid username and Invalid Password",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@reg"
    },
    {
      "name": "@log"
    },
    {
      "name": "@fine"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter the url",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to enter the valid \"GIT\" and invalid \"gt_1223\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_have_to_enter_the_valid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User have to click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_have_to_click_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});