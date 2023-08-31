package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.stepdefine.Reports;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\featureFile",glue="org.stepdefine",
				monochrome=true,dryRun=false,strict=true,tags="@login",
				
				plugin= {"pretty",
					"html:C:\\Users\\moham\\eclipse-workspace\\CucumberAug\\AllReports\\html",
					"junit:C:\\Users\\moham\\eclipse-workspace\\CucumberAug\\AllReports\\junit\\facebook.xml",
					"json:C:\\Users\\moham\\eclipse-workspace\\CucumberAug\\AllReports\\json\\fb2.json",
					"rerun:C:\\Users\\moham\\eclipse-workspace\\CucumberAug\\RerunFile\\fbFail.txt"}
										
													)
public class Runner extends Reports{

	@AfterClass
	public static void reporting() {
		generateJVMReport("json:C:\\Users\\moham\\eclipse-workspace\\CucumberAug\\AllReports\\json\\fb2.json");

	}

	
}
