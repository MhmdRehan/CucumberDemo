package org.stepdefine;

import java.io.File;
import java.util.*;
import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class Reports {
	
	public static void generateJVMReport(String jsonPath) {
		
		File f = new File("C:\\Users\\moham\\eclipse-workspace\\CucumberAug\\AllReports\\jvmReport");
		
		Configuration c = new Configuration(f, "Facebook");
		c.addClassifications("Windows", "Platform");
		
		
		List<String> li = new ArrayList();
		li.add(jsonPath);
		
		ReportBuilder r= new ReportBuilder(li, c);
		r.generateReports();
		
	}
	
	
	

}
