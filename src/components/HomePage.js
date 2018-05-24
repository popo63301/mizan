import React, { Component } from 'react';
import { Button, Platform } from 'react-native';
import { AdMobBanner } from 'react-native-admob';
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

class HomePage extends Component {
  static navigationOptions = ({ navigation: { navigate } }) => ({
    headerLeft: <Button onPress={() => navigate('OptionPage')} title="Options" color="red" />,
    headerRight: <Button onPress={() => navigate('TotalPage')} title="TotalPage" color="blue" />,
  });

  getAdUnitId = () => {
    const os = Platform.OS;

    switch (os) {
      case 'android': {
        return 'ca-app-pub-5296245083041935/5065781235';
      }
      case 'ios': {
        return 'ca-app-pub-5296245083041935/5597808864';
      }
      default: {
        return 'ca-app-pub-5296245083041935/5065781235';
      }
    }
  };

  render() {
    const { navigation } = this.props;
    const addUnitId = this.getAdUnitId();

    return (
      <PageContainer>
        <ListContainer>
          <HomePageList navigation={navigation} />
        </ListContainer>
        <BottomBar>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID={addUnitId}
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.log('bahhhh', error)}
          />
        </BottomBar>
      </PageContainer>
    );
  }
}

export default HomePage;
