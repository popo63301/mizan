import React, { Component } from 'react';
import { Text, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { AdMobInterstitial } from 'react-native-admob';

import IntlProvider from './src/containers/IntlProvider';
import appStore from './src/redux/reducers';
import initState from './src/redux/initState';
import Router from './src/router';

const store = createStore(appStore, initState);

// function chouf() {
//   console.log(store.getState());
//   // var okay = store.getState()
//   // console.log(okay.decks.byId[2])
// }

// store.subscribe(chouf);

class App extends Component {
  componentDidMount() {
    this.showInterstitial();
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
        <IntlProvider textComponent={Text}>
          <Router />
        </IntlProvider>
      </Provider>
    );
  }
}

export default App;
