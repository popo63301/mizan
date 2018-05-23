import React from 'react';
import { FormattedMessage } from 'react-intl';
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
`;

const LabelText = styled.Text`
  font-size: 20px;
`;

const ValueText = styled.Text`
  font-size: 24px;
  text-align: right;
`;

const TotalPageListItem = ({ emoji, rewardName, rewardValue }) => (
  <Container>
    <LabelRow>
      <LabelText>
        <FormattedMessage id={rewardName} />:
      </LabelText>
    </LabelRow>
    <ValueRow>
      <ValueText>
        {rewardValue} x{emoji}
      </ValueText>
    </ValueRow>
  </Container>
);

TotalPageListItem.propTypes = {
  emoji: PropTypes.string.isRequired,
  rewardName: PropTypes.string.isRequired,
  rewardValue: PropTypes.number.isRequired,
};
export default TotalPageListItem;
