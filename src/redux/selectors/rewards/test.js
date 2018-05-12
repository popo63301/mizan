import { getTotalRewardByRewardId } from './index';

describe('Rewards selectors', () => {
  it('getRewardTotalByRewardId', () => {
    const initStore = {
      hadiths: {
        hadith1: {
          title: 'hadith1',
          validationRate: 5,
          listRewards: [{ idRewards: 'quran', numberRewardCorresponding: 3 }],
        },
        hadith2: {
          title: 'hadith2',
          validationRate: 15,
          listRewards: [{ idRewards: 'quran', numberRewardCorresponding: 1 }],
        },
      },
      rewards: {
        treasure: { id: 'treasure', title: 'treasure', listHadiths: ['treasure1'] },
        quran: { id: 'quran', title: 'quran', listHadiths: ['hadith1', 'hadith2'] },
      },
      counters: {
        hadith1: 130,
        hadith2: 32,
      },
    };

    const props = { rewardId: 'quran' };
    const what = getTotalRewardByRewardId(initStore, props);
    expect(what).toEqual(80);
  });
});
