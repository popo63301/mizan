import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CounterRewardBox from '../containers/CounterRewardBox';
import CounterModalInfo from '../containers/CounterModalInfo';

const CounterDescriptionContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: rgba(57, 204, 204, 0.2);
`;

const ModalButtonRow = styled.View`
  display: flex;
  flex-direction: row-reverse;
  flex: 1;
`;

const DescriptionRow = styled.View`
  flex: 4;
  justify-content: center;
  align-items: center;
`;

const DescriptionText = styled.Text`
  color: black;
  font-size: 18px;
  text-align: center;
  font-family: Capriola-Regular;
  margin-left: 15px;
  margin-right: 15px;
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
  color: black;
  padding-right: 10px;
  font-size: 20px;
  text-align: right;
  font-family: Capriola-Regular;
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
          <CounterModalInfo hadithId={hadith.id} />
        </ModalButtonRow>
        <DescriptionRow>
          <DescriptionText>
            <FormattedMessage id={hadith.description} />
          </DescriptionText>
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
