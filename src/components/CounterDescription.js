import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CounterRewardBox from '../containers/CounterRewardBox';

const CounterDescriptionContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: rgba(57, 204, 204, 0.1);
`;

const ModalButtonRow = styled.View`
  display: flex;
  flex-direction: row-reverse;
  flex: 1;
`;

const ModalButton = styled.Text`
  font-size: 30px;
`;

const DescriptionRow = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;

const DescriptionText = styled.Text`
  font-size: 20px;
  text-align: center;
`;

const RewardsRow = styled.View`
  display: flex;
  flex-direction: row;
  flex: 1;
`;

const TotalRewardContainer = styled.View`
  flex: 1;
`;

const CurrentProgressContainer = styled.View`
  flex: 1;
`;

const CurrentProgressText = styled.Text`
  padding-right: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: right;
`;

class CounterDescription extends Component {
  renderCurrentProgress = () => {
    const { hadith, currentProgress } = this.props;

    if (hadith.validationRate > 1) {
      return (
        <CurrentProgressContainer>
          <CurrentProgressText>
            {currentProgress}/{hadith.validationRate}
          </CurrentProgressText>
        </CurrentProgressContainer>
      );
    }
    return null;
  };

  render() {
    const { hadith } = this.props;

    return (
      <CounterDescriptionContainer>
        <ModalButtonRow>
          <ModalButton>ℹ️</ModalButton>
        </ModalButtonRow>
        <DescriptionRow>
          <DescriptionText>{hadith.description}</DescriptionText>
        </DescriptionRow>
        <RewardsRow>
          <TotalRewardContainer>
            <CounterRewardBox hadithId={hadith.id} />
          </TotalRewardContainer>
          {this.renderCurrentProgress()}
        </RewardsRow>
      </CounterDescriptionContainer>
    );
  }
}

CounterDescription.propTypes = {
  hadith: PropTypes.object.isRequired, //eslint-disable-line
  currentProgress: PropTypes.number.isRequired,
};

export default CounterDescription;
