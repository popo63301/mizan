import React from 'react';
import styled from 'styled-components';
import TotalPageList from '../containers/TotalPageList';

const Container = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ListContainer = styled.ScrollView`
  flex: 1;
`;

const TotalPage = () => (
  <Container>
    <ListContainer>
      <TotalPageList />
    </ListContainer>
  </Container>
);

export default TotalPage;
