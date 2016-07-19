import { Gallery2Page } from './app.po';

describe('gallery2 App', function() {
  let page: Gallery2Page;

  beforeEach(() => {
    page = new Gallery2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
