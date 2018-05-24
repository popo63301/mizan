import React, { Component } from 'react';
import { Platform } from 'react-native';
import styled from 'styled-components';
import { AdMobBanner } from 'react-native-admob';
import TotalPageList from '../containers/TotalPageList';

const Container = styled.View`
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

class TotalPage extends Component {
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
    const addUnitId = this.getAdUnitId();

    return (
      <Container>
        <ListContainer>
          <TotalPageList />
        </ListContainer>
        <BottomBar>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID={addUnitId}
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={error => console.log('bahhhh', error)}
          />
        </BottomBar>
      </Container>
    );
  }
}

export default TotalPage;
