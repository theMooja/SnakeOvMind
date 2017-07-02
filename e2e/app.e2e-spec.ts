import { SnakeOvMindPage } from './app.po';

describe('snake-ov-mind App', () => {
  let page: SnakeOvMindPage;

  beforeEach(() => {
    page = new SnakeOvMindPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
