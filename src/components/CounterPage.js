import React from 'react';
import styled from 'styled-components';
import CounterDescription from '../containers/CounterDescription';
import CounterButton from './CounterButton';

const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CounterBlocksContainer = styled.View`
  flex: 1;
`;

const CounterPage = () => (
  <PageContainer>
    <CounterBlocksContainer>
      <CounterDescription />
    </CounterBlocksContainer>
    <CounterBlocksContainer>
      <CounterButton />
    </CounterBlocksContainer>
  </PageContainer>
);

export default CounterPage;
