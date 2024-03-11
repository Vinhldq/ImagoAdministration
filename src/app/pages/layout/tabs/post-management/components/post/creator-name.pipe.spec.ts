import { CreatorNamePipe } from './creator-name.pipe';

describe('CreatorNamePipe', () => {
  it('create an instance', () => {
    const pipe = new CreatorNamePipe();
    expect(pipe).toBeTruthy();
  });
});
