import { getAllHadiths, getListHadiths, getHadithById } from './index';

describe('Hadiths Selectors', () => {
  it('selects all hadiths', () => {
    const initStore = {
      hadiths: {
        tree1: 'hadith for tree',
        house1: 'hadith for house',
        smth: 'else',
      },
      else: { something: 'important' },
    };

    const what = getAllHadiths(initStore);
    expect(what).toEqual({
      tree1: 'hadith for tree',
      house1: 'hadith for house',
      smth: 'else',
    });
  });

  it('gives list of all hadiths ids', () => {
    const initStore = {
      hadiths: {
        tree1: 'hadith for tree',
        house1: 'hadith for house',
        smth: 'else',
      },
      else: { something: 'important' },
    };

    const what = getListHadiths(initStore);
    expect(what).toEqual(['tree1', 'house1', 'smth']);
  });

  it('gives hadith by id', () => {
    const initStore = {
      hadiths: {
        tree1: 'hadith for tree',
        house1: 'hadith for house',
        smth: 'else',
      },
      else: { something: 'important' },
    };

    const props = { random: 'someValue', idHadith: 'house1' };
    const what = getHadithById(initStore, props);
    expect(what).toEqual('hadith for house');
  });
});
