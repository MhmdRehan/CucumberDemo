package org.stepdefine;

import org.base.UtilityClass;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks extends UtilityClass {
	//Uses:-   It will execute before and after of each scenarios(All feat)
	@Before
	public void preCond() {
		System.out.println("Before");
		launchEdge();

	}
	
	@Before(order=3)
	public void date() {
		System.out.println("Order 3");

	}
	@Before(order=2)
	public void time() {
		System.out.println("Order 2");

	}
	@Before(order=1)
	public void add() {
		System.out.println("Order 1");

	}
	
	@After(order=2)
	public void afte() {
		System.out.println("AFter 2");

	}
	@After(order=1)
	public void Aft() throws InterruptedException {
		System.out.println("AFter 1");
		Thread.sleep(3000);
		driver.close();

	}
	@After(order=3)
	public void after() {
		System.out.println("AFter 3");

	}
	
	
	
	@After
	public void postCon(Scenario s)  {
		
		if(s.isFailed()) {
			TakesScreenshot ts = (TakesScreenshot)driver;
			byte[] bt = ts.getScreenshotAs(OutputType.BYTES);
			s.embed(bt, "Image/png");
		}
		

	}

}
