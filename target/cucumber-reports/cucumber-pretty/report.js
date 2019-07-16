$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "i want to verify login details on Google mail",
  "description": "As a Google mail user\r\ni want to verify user name and password match",
  "id": "i-want-to-verify-login-details-on-google-mail",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@Test"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "Validate username and password on Google mail account",
  "description": "",
  "id": "i-want-to-verify-login-details-on-google-mail;validate-username-and-password-on-google-mail-account",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "i\u0027m on Google mail web",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "i enter valid \"username\" with \"automationfunworld@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I invalid \"password\" with \"automation2016\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Error message should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.i_m_on_Google_mail_web()"
});
formatter.result({
  "duration": 4930351549,
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003cspan class\u003d\"RveJvd snByac\"\u003e...\u003c/span\u003e is not clickable at point (604, 503). Other element would receive the click: \u003cdiv class\u003d\"ANuIbb IdAqtf\" jsname\u003d\"k4HEge\" tabindex\u003d\"0\"\u003e\u003c/div\u003e\n  (Session info: chrome\u003d75.0.3770.80)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-AG89RSG\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_191\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.80, chrome: {chromedriverVersion: 75.0.3770.8 (681f24ea911fe7..., userDataDir: C:\\Users\\BIDEMI~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:54005}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: c4825c5f099f45473a821f43b8071c0b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat stepdefinition.LoginSteps.i_m_on_Google_mail_web(LoginSteps.java:32)\r\n\tat ✽.Given i\u0027m on Google mail web(login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 15
    },
    {
      "val": "automationfunworld@gmail.com",
      "offset": 31
    }
  ],
  "location": "LoginSteps.iEnterValidWith(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 11
    },
    {
      "val": "automation2016",
      "offset": 27
    }
  ],
  "location": "LoginSteps.iInvalidWith(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginSteps.errorMessageShouldBeDisplayed(String)"
});
formatter.result({
  "status": "skipped"
});
});