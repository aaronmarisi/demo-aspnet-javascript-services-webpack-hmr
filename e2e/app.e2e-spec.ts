import { DemoJavascriptServicesAngularCliPage } from './app.po';

describe('demo-javascript-services-angular-cli App', () => {
  let page: DemoJavascriptServicesAngularCliPage;

  beforeEach(() => {
    page = new DemoJavascriptServicesAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
