import { AppPage } from './app.po';

describe('webapps-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

 // it('should display wanderfull logo', () => {
  //  page.navigateTo();
  //  expect(page.getParagraphText()).toEqual('WanderFull');
  //});

  it('should logged in and user in localstorage', ()=>{
    page.login();
    page.getusername();
    page.getpassword();
    page.getButtonLoggin();
    expect(page.getLocalStorage).toEqual('TravellWonder');

  })
});

