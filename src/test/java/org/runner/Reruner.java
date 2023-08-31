package org.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="@RerunFile\\fbFail.txt",glue="org.stepdefine",
				monochrome=true,
			plugin= "rerun:C:\\Users\\moham\\eclipse-workspace\\CucumberAug\\RerunFile\\fbFailassert.txt")
										
													
public class Reruner {
  //5 --3
}
