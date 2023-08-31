package org.stepdefine;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.base.UtilityClass;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.ast.DataTable;
import junit.framework.Assert;

public class StepDefinition extends UtilityClass {

	@Given("User have to launch the browser")
	public void user_have_to_launch_the_browser() {
		launchEdge();
	}

	@When("User have to enter the url")
	public void user_have_to_enter_the_url() {
		launchUrl("https://www.facebook.com/");
	}

	@When("User have to enter the Email address and password")
	public void user_have_to_enter_the_Email_address_and_password( io.cucumber.datatable.DataTable d2) {
		WebElement email = driver.findElement(By.id("email"));
		
		driver.findElement(By.name("pass")).sendKeys("1234@34");
	}

	@When("User have to click the login button")
	public void user_have_to_click_the_login_button() {
		driver.findElement(By.name("login")).click();

	}

	@Then("User have to close the browser")
	public void user_have_to_close_the_browser() throws InterruptedException {
		Thread.sleep(5000);
		driver.close();
	}

	
	@When("User have to fill the required datas")
	public void user_have_to_fill_the_required_datas() {
		driver.findElement(By.id("identify_email")).sendKeys("Selenium");
	}

	@Then("User have to click on submit button")
	public void user_have_to_click_on_submit_button() {
		Assert.assertTrue(false);
		driver.findElement(By.id("did_submit")).click();
	}
	
	@When("User have to enter the valid {string} and invalid {string}") //Examples
	public void user_have_to_enter_the_valid_and_invalid(String em, String pw) {
			driver.findElement(By.id("email")).sendKeys(em);
			driver.findElement(By.name("pass")).sendKeys(pw);

		
	}
	
	@When("User have to click the forget button")
	public void user_have_to_click_the_forget_button() {
	   driver.findElement(By.xpath("//a[contains(text(),'password')]")).click();
	   
	}

	@When("User have to enter the required data")
	public void user_have_to_enter_the_required_data() {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	    driver.findElement(By.id("identify_email")).sendKeys("Selenium");
	}

	@When("User have to click on submit")
	public void user_have_to_click_on_submit() {
	    driver.findElement(By.id("did_submit")).click();
	}
	
	@When("User have to enter the {string} address and {string}")
	public void user_have_to_enter_the_address_and(String string, String string2, io.cucumber.datatable.DataTable d) {
		
		List<Map<String, String>> mp = d.asMaps();
		driver.findElement(By.id("email")).sendKeys(mp.get(1).get("Username"));
		Assert.assertTrue(false);
		driver.findElement(By.name("pass")).sendKeys(mp.get(0).get("Password"));
		
	}
	
	

}
