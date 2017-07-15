import { RestclientPage } from './app.po';

describe('restclient App', function() {
  let page: RestclientPage;

  beforeEach(() => {
    page = new RestclientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
