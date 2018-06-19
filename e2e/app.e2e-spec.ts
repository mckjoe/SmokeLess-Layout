import { SmokelessPage } from './app.po';

describe('smokeless App', () => {
  let page: SmokelessPage;

  beforeEach(() => {
    page = new SmokelessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
