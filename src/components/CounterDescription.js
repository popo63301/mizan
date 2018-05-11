import React, { Component } from 'react';
import styled from 'styled-components';

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

const TotalRewardText = styled.Text`
  padding-left: 10px;
  font-size: 20px;
  font-weight: bold;
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
  renderCurrentProgress = () => (
    <CurrentProgressContainer>
      <CurrentProgressText>8/10</CurrentProgressText>
    </CurrentProgressContainer>
  );

  render() {
    return (
      <CounterDescriptionContainer>
        <ModalButtonRow>
          <ModalButton>ℹ️</ModalButton>
        </ModalButtonRow>
        <DescriptionRow>
          <DescriptionText>
            Récitez la sourate "Qul Huwa Allâhu Ahad" puis faire ceci
          </DescriptionText>
        </DescriptionRow>
        <RewardsRow>
          <TotalRewardContainer>
            <TotalRewardText>400x 🌴</TotalRewardText>
          </TotalRewardContainer>
          {this.renderCurrentProgress()}
        </RewardsRow>
      </CounterDescriptionContainer>
    );
  }
}
export default CounterDescription;
