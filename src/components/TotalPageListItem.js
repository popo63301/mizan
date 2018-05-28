import React from 'react';
import { FormattedMessage } from 'react-intl';
import RewardImage from './RewardImage';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-right: 10%;
  padding-left: 10%;
`;

const LabelRow = styled.View`
  flex: 1;
`;

const ValueRow = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const LabelText = styled.Text`
  color: black;
  font-size: 20px;
  font-family: Capriola-Regular;
`;

const ValueText = styled.Text`
  margin-right: 5px;
  color: black;
  font-size: 24px;
  text-align: right;
  font-family: Capriola-Regular;
`;

const TotalPageListItem = ({
  emoji, rewardName, rewardValue, rewardId,
}) => (
  <Container>
    <LabelRow>
      <LabelText>
        <FormattedMessage id={rewardName} />:
      </LabelText>
    </LabelRow>
    <ValueRow>
      <ValueText>{rewardValue} x</ValueText>
      <RewardImage idReward={rewardId} height={40} width={40} />
    </ValueRow>
  </Container>
);

TotalPageListItem.propTypes = {
  emoji: PropTypes.string.isRequired,
  rewardName: PropTypes.string.isRequired,
  rewardValue: PropTypes.number.isRequired,
};
export default TotalPageListItem;
