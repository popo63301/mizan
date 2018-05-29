import React, { Component } from 'react';
import { Text, StatusBar, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { AdMobInterstitial } from 'react-native-admob';
import { PersistGate } from 'redux-persist/integration/react';

import IntlProvider from './src/containers/IntlProvider';
import Router from './src/router';
import { store, persistor } from './src/redux/configureStore';

class App extends Component {
  componentDidMount() {
    // this.showInterstitial();
    StatusBar.setBackgroundColor('#528D6D');
  }

  showInterstitial = () => {
    const os = Platform.OS;
    switch (os) {
      case 'android': {
        AdMobInterstitial.setAdUnitID('ca-app-pub-5296245083041935/2344356925');
        break;
      }
      case 'ios': {
        AdMobInterstitial.setAdUnitID('ca-app-pub-5296245083041935/4284727191');
        break;
      }
      default: {
        AdMobInterstitial.setAdUnitID('ca-app-pub-5296245083041935/2344356925');
        break;
      }
    }

    AdMobInterstitial.requestAd()
      .then(() => AdMobInterstitial.showAd())
      .catch(e => console.log('problem Interstitial', e));
  };
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <IntlProvider textComponent={Text}>
            <Router />
          </IntlProvider>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
