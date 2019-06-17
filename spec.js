describe('Protractor Demo App', function() {
  it('should have a title', function() {
	browser.get('http://localhost/');
	browser.driver.manage().window().maximize();
    
	expect(browser.getTitle()).toEqual('Expekt');
	
	browser.executeScript("window['TRANSFER_CACHE'].context.urls['/global'] = 'http://localhost/r2/svcshared/st02/svcglobalapi/api'");
	browser.executeScript("window['TRANSFER_CACHE'].context.urls['/casino'] = 'http://localhost/r2/svcshared/st02/svccasinoapi/api'");
	
	// Step 1
	element(by.css("input[formControlName=loginNicknameInput]")).sendKeys('helloexpekt');
	browser.sleep(1000);
	element(by.css("input[formControlName=personalIdentityNumber]")).sendKeys('19670203-7539');
	browser.sleep(1000);
	element.all(by.css(".forms_toggle")).then(function (elm) {
        elm[0].click();
    });
	browser.sleep(1000);
	element(by.css('form.landingPage_content label.toggleButton')).click();
	browser.sleep(1000);
	element(by.css('.cookieBanner_validation')).click();
	browser.sleep(1000);
	element(by.css('.registerBankId_contentBtn')).click();
	browser.sleep(2000);
	
	// Step 2
	var registerButton = element(by.css('.registerBankId_contentBtn'));
	expect(registerButton.isEnabled()).toBe(false);
	element(by.css("input[formControlName=loginEmailInput]")).sendKeys('helloexpekt@topmail.net');
	browser.sleep(1000);
	element(by.css("input[formControlName=loginPhoneInput]")).sendKeys('05050505');
	browser.sleep(1000);
	expect(registerButton.isEnabled()).toBe(true);
	registerButton.click();
	browser.sleep(2000);
	
	// Step 3
	element(by.id('submitButton')).click();
	browser.sleep(2000);
  });
});