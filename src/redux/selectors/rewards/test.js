import {
  getTotalRewardByRewardId,
  getListRewardsIds,
  getRewardNameByRewardId,
  getEmojiRewardByRewardId,
} from './index';

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

  it('getListRewardsIds', () => {
    const initStore = {
      rewards: {
        treasure: { id: 'treasure', title: 'treasure', listHadiths: ['treasure1'] },
        quran: { id: 'quran', title: 'quran', listHadiths: ['hadith1', 'hadith2'] },
      },
    };

    const what = getListRewardsIds(initStore);
    expect(what).toEqual(['treasure', 'quran']);
  });

  it('getRewardNameByRewardId', () => {
    const initStore = {
      rewards: {
        treasure: { id: 'treasure', title: 'Trésor', listHadiths: ['treasure1'] },
        quran: { id: 'quran', title: 'quran', listHadiths: ['hadith1', 'hadith2'] },
      },
    };

    const props = { rewardId: 'treasure' };
    const what = getRewardNameByRewardId(initStore, props);
    expect(what).toEqual('Trésor');
  });

  it('getEmojiHadithByHadithId', () => {
    const initStore = {
      rewards: {
        tree: {
          id: 'tree1',
          emoji: '🌳',
        },
        palm: {
          id: 'palm',
          emoji: '🌴',
        },
      },
    };

    const props = { rewardId: 'palm' };
    const what = getEmojiRewardByRewardId(initStore, props);
    expect(what).toEqual('🌴');
  });
});
