import {
  getAllHadiths,
  getListHadithsIds,
  getHadithById,
  getValidationRateByHadithId,
  getEmojiHadithByHadithId,
} from './index';

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

    const what = getListHadithsIds(initStore);
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

    const props = { random: 'someValue', hadithId: 'house1' };
    const what = getHadithById(initStore, props);
    expect(what).toEqual('hadith for house');
  });

  it('gives validation hadith by hadith id', () => {
    const initStore = {
      hadiths: {
        tree1: {
          id: 'tree1',
          title: 'Avoir des arbres au paradis',
          description: 'description',
          hadith: 'hadithvalue',
          validationRate: 1,
          emoji: '🌳',
        },
        tree2: {
          id: 'tree2',
          title: 'Avoir un palmier au paradis',
          description: 'description',
          hadith: 'hadithvalue',
          validationRate: 1,
          emoji: '🌴',
        },
      },
    };

    const props = { hadithId: 'tree2' };
    const what = getValidationRateByHadithId(initStore, props);
    expect(what).toEqual(1);
  });

  it('getEmojiHadithByHadithId', () => {
    const initStore = {
      hadiths: {
        tree1: {
          id: 'tree1',
          title: 'Avoir des arbres au paradis',
          description: 'description',
          hadith: 'hadithvalue',
          validationRate: 1,
          emoji: '🌳',
        },
        tree2: {
          id: 'tree2',
          title: 'Avoir un palmier au paradis',
          description: 'description',
          hadith: 'hadithvalue',
          validationRate: 1,
          emoji: '🌴',
        },
      },
    };

    const props = { hadithId: 'tree2' };
    const what = getEmojiHadithByHadithId(initStore, props);
    expect(what).toEqual('🌴');
  });
});
