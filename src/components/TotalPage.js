import React from 'react';
import styled from 'styled-components';
import NavigationBar from './NavigationBar';
import AdBanner from './AdBanner';
import TotalPageList from '../containers/TotalPageList';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
  background: rgba(57, 204, 204, 0.2);
`;

const ListContainer = styled.ScrollView`
  flex: 6;
`;

const TotalPage = ({ history }) => (
  <Container>
    <NavigationBar history={history} isBack />
    <ListContainer>
      <TotalPageList />
    </ListContainer>
    <AdBanner />
  </Container>
);

export default TotalPage;
