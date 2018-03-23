import { IplUiPage } from './app.po';

describe('ipl-ui App', () => {
  let page: IplUiPage;

  beforeEach(() => {
    page = new IplUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
