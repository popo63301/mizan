/* eslint-disable */
import { createSelector } from 'reselect';

export const getTotalRewardByRewardId = (state, props) => {
  const listHadiths = state.rewards[props.rewardId].listHadiths;
  const reducer = (accumulator, currentValueId) => {
    const validationRate = state.hadiths[currentValueId].validationRate;
    const counterValue = state.counters[currentValueId];
    const listRewardsHadith = state.hadiths[currentValueId].listRewards;
    const numberReward = listRewardsHadith.find(e => e.idRewards === props.rewardId);
    const numberRewardCorresponding = numberReward.numberRewardCorresponding;
    const currentValue = Math.trunc(counterValue / validationRate) * numberRewardCorresponding;
    return accumulator + currentValue;
  };

  return listHadiths.reduce(reducer, 0);
};

export const getListRewardsIds = state => Object.keys(state.rewards);

export const getRewardByRewardId = (state, props) => state.rewards[props.rewardId];

export const getRewardNameByRewardId = createSelector(getRewardByRewardId, reward => reward.title);
export const getEmojiRewardByRewardId = createSelector(getRewardByRewardId, reward => reward.emoji);
