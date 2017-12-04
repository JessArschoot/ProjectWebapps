import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/article/list');
  }

  getParagraphText() {
    return element(by.css('app-root .logo')).getText();
  }

  login(){
    return browser.get('/login');
  }
  getButtonLoggin(){
    return element(by.css('app-login .button')).click();
  }
  getusername(){
    return element(by.css('app-login #username')).sendKeys('TravellWonder');
  }
  getpassword(){
    return element(by.css('app-login #password')).sendKeys('azerty123456');
    
  }

  getLocalStorage(){
    return JSON.parse(localStorage.getItem('currentUser')).username;
  }
}
