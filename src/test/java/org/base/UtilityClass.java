package org.base;

import java.awt.Robot;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.interactions.Actions;

import io.github.bonigarcia.wdm.WebDriverManager;

public class UtilityClass {
	
	public static WebDriver driver;
	public static Actions a;
	public static Robot r;

	public static void launchChrome() {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
	}
	
	public static void launchEdge() {
		WebDriverManager.edgedriver().setup();
		driver = new EdgeDriver();
		driver.manage().window().maximize();

	}
	
	public static void launchUrl(String url) {
		driver.get(url);

	}

}
