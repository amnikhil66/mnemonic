import { MnemoniPage } from './app.po';

describe('mnemoni App', function() {
  let page: MnemoniPage;

  beforeEach(() => {
    page = new MnemoniPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
