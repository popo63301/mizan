import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';
import HomePageList from '../containers/HomePageList';

const PageContainer = styled.View`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ListContainer = styled.ScrollView`
  flex: 6;
`;

const BottomBar = styled.View`
  flex: 1;
  background-color: white;
`;

const TotalPageButton = styled.TouchableHighlight`
  flex: 1;
`;

console.log('TotalPageButton', TotalPageButton);
const HomePage = ({ navigation }) => (
  <PageContainer>
    <ListContainer>
      <HomePageList navigation={navigation} />
    </ListContainer>
    <BottomBar>
      <TotalPageButton onPress={() => navigation.navigate('NavigationPageTest')}>
        <View>
          <Text>Total Page</Text>
        </View>
      </TotalPageButton>
    </BottomBar>
  </PageContainer>
);

export default HomePage;
