import { HomeAngularPage } from './app.po';

describe('home-angular App', function() {
  let page: HomeAngularPage;

  beforeEach(() => {
    page = new HomeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
