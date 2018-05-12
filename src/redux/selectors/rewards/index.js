/* eslint-disable */

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
