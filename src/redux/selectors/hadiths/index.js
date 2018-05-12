import { createSelector } from 'reselect';

export const getAllHadiths = state => state.hadiths;

export const getListHadithsIds = createSelector(getAllHadiths, hadiths => Object.keys(hadiths));

export const getHadithById = (state, props) => state.hadiths[props.hadithId];

export const getValidationRateByHadithId = createSelector(
  getHadithById,
  hadith => hadith.validationRate,
);

export const getEmojiHadithByHadithId = createSelector(getHadithById, hadith => hadith.emoji);

export const getListRewardByHadithId = createSelector(getHadithById, hadith => hadith.listRewards);

export const getEmojisListForRewardListByHadithId = (state, props) => {
  const listReward = getListRewardByHadithId(state, props);
  const emojiList = {};

  listReward.map((e) => {
    emojiList[e.idRewards] = state.rewards[e.idRewards].emoji;
  });

  return emojiList;
};
