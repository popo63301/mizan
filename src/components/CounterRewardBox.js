import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
const TotalRewardText = styled.Text`
  flex: 1;
  padding-left: 10px;
  font-size: 20px;
  font-weight: bold;
`;

class CounterRewardBox extends Component {
  getTotalReward = (e) => {
    const { emojis, counterValue, hadith } = this.props;
    const totalReward =
      Math.trunc(counterValue / hadith.validationRate) * e.numberRewardCorresponding;
    return (
      <TotalRewardText>
        {totalReward}x {emojis[e.idRewards]}
      </TotalRewardText>
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
