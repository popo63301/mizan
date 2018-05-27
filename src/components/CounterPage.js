import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CounterDescription from '../containers/CounterDescription';
import CounterButton from '../containers/CounterButton';

const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CounterBlocksContainer = styled.View`
  flex: 1;
`;

const CounterPage = ({
  history: {
    location: {
      state: { hadithId },
    },
  },
}) => (
  <PageContainer>
    <CounterBlocksContainer>
      <CounterDescription hadithId={hadithId} />
    </CounterBlocksContainer>
    <CounterBlocksContainer>
      <CounterButton hadithId={hadithId} />
    </CounterBlocksContainer>
  </PageContainer>
);

CounterPage.propTypes = {
  navigation: PropTypes.object.isRequired, //eslint-disable-line
};

export default CounterPage;
