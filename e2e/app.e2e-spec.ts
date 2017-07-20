import { HeroloTestPage } from './app.po';

describe('herolo-test App', () => {
  let page: HeroloTestPage;

  beforeEach(() => {
    page = new HeroloTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
