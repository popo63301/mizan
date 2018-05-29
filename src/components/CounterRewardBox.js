import React, { Component } from 'react';
import { View } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import RewardImage from './RewardImage';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const TotalRewardText = styled.Text`
  font-size: 20px;
  font-family: Capriola-Regular;
  color: black;
`;

class CounterRewardBox extends Component {
  getTotalReward = (e) => {
    const { counterValue, hadith } = this.props;
    const totalReward =
      Math.trunc(counterValue / hadith.validationRate) * e.numberRewardCorresponding;
    return (
      <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <TotalRewardText>{totalReward}x</TotalRewardText>
        <RewardImage idReward={e.idRewards} height={20} width={20} />
      </View>
    );
  };

  render() {
    const { listRewards } = this.props;
    return <Container>{listRewards.map(e => this.getTotalReward(e))}</Container>;
  }
}

CounterRewardBox.propTypes = {
  listRewards: PropTypes.array.isRequired, //eslint-disable-line
  emojis: PropTypes.object.isRequired, //eslint-disable-line
  counterValue: PropTypes.number.isRequired,
  hadith: PropTypes.object.isRequired, //eslint-disable-line
};
export default CounterRewardBox;
