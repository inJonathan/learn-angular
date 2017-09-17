import { LearnNgPage } from './app.po';

describe('learn-ng App', () => {
  let page: LearnNgPage;

  beforeEach(() => {
    page = new LearnNgPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
