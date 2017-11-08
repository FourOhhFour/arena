import { ReultsAppPage } from './app.po';

describe('reults-app App', () => {
  let page: ReultsAppPage;

  beforeEach(() => {
    page = new ReultsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
