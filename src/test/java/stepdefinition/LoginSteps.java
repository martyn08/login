package stepdefinition;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class LoginSteps {
    public static WebDriver driver;
    @Given("^i'm on Google mail web$")
    public void i_m_on_Google_mail_web() throws Throwable {
        System.setProperty("webdriver.chrome.driver", "C:\\Users\\BidemiAkinlade\\IdeaProjects\\GoogleSearch\\drivers\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("");





        //System.setProperty("webdriver.chrome.driver", "C:\\Users\\BidemiAkinlade\\IdeaProjects\\GoogleSearch\\drivers\\chromedriver.exe");
        //System.setProperty("webdriver.firefox.marionette", "C:\\Users\\BidemiAkinlade\\IdeaProjects\\GoogleSearch\\drivers\\geckodriver.exe");
        //WebDriver driver = new ChromeDriver();
        //driver.get("https://accounts.google.com/AccountChooser/identifier?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&flowName=GlifWebSignIn&flowEntry=AddSession");
        // Thread.sleep(1000);

       // driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

        //driver.findElement(By.cssSelector("#identifierId")).sendKeys("automationfunworld@gmail.com");
        //driver.findElement(By.cssSelector("#identifierNext > span > span")).click();

        //driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);

        //driver.findElement(By.cssSelector("#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input")).sendKeys("automation2016");
        //driver.findElement(By.cssSelector("#passwordNext > span > span")).click();

        //driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);

        //driver.close();
        //driver.quit();

    }

    @When("^i enter valid user name and invalid password$")
    public void i_enter_valid_user_name_and_invalid_password(String arg1) throws Throwable {
        System.out.println(arg1);

    }

    @Then("^wrong password should be displayed$")
    public void wrong_password_should_be_displayed(String arg1) throws Throwable {
        System.out.println(arg1);

    }


    @When("^i enter valid \"([^\"]*)\" with \"([^\"]*)\"$")
    public void iEnterValidWith(String arg0, String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^I invalid \"([^\"]*)\" with \"([^\"]*)\"$")
    public void iInvalidWith(String arg0, String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^Error message should be displayed$")
    public void errorMessageShouldBeDisplayed(String arg1) {
        System.out.println(arg1);
    }
}
