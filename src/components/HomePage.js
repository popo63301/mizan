import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
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

class HomePage extends Component {
  static navigationOptions = ({ navigation: { navigate } }) => ({
    headerRight: <Button onPress={() => navigate('OptionPage')} title="Options" color="red" />,
  });

  render() {
    const { navigation } = this.props;
    return (
      <PageContainer>
        <ListContainer>
          <HomePageList navigation={navigation} />
        </ListContainer>
        <BottomBar>
          <TotalPageButton onPress={() => navigation.navigate('TotalPage')}>
            <View>
              <Text>Total Page</Text>
            </View>
          </TotalPageButton>
        </BottomBar>
      </PageContainer>
    );
  }
}

export default HomePage;
