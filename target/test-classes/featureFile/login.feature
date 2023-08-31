@login
Feature: To validate the login function of facebook application
	
	@sanity @smoke
  Scenario: 
    		Verify user able to login app by Valid username and valid password

    When User have to enter the url
    When User have to enter the Email address and password
     
      | Username | Password | Passcode |
      | Greens   | Ch-098   |    12345 |
      | Java     | 1234-QWE |    67345 |
      
    And User have to click the login button
	@smoke @reg @log @fine 
  Scenario Outline: 
    Verify that user able to login by Valid username and Invalid Password

    When User have to enter the url
    When User have to enter the valid "<username>" and invalid "<password>"
    And User have to click the login button

    Examples: 
      | username | password |
      | Java     | JDK_1.8  |
      | Selenium | Sel-098  |
      | GIT      | gt_1223  |
