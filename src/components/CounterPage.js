import React from 'react';
import styled from 'styled-components';
import CounterDescription from './CounterDescription';

const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const CounterDescriptionContainer = styled.View`
  flex: 1;
`;

const CounterPage = () => (
  <PageContainer>
    <CounterDescriptionContainer>
      <CounterDescription />
    </CounterDescriptionContainer>
    <CounterDescriptionContainer />
  </PageContainer>
);

export default CounterPage;
