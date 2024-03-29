import React, { Component } from 'react';
import { Platform, View } from 'react-native';
import { AdMobBanner } from 'react-native-admob';
import { withNavigation } from 'react-navigation';

class AdBanner extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

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
      <View>
        <AdMobBanner
          adSize="fullBanner"
          adUnitID={addUnitId}
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.log('bahhhh', error)}
        />
      </View>
    );
  }
}

export default withNavigation(AdBanner);
