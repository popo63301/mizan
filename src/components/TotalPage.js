import React from 'react';
import styled from 'styled-components';
import AdBanner from './AdBanner';
import TotalPageList from '../containers/TotalPageList';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ListContainer = styled.ScrollView`
  flex: 6;
`;

const TotalPage = () => (
  <Container>
    <ListContainer>
      <TotalPageList />
    </ListContainer>
    <AdBanner />
  </Container>
);

export default TotalPage;
