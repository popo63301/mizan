import React, { Component } from 'react';
import { StatusBar, Platform } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import { AdMobInterstitial } from 'react-native-admob';

import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';
import OptionPage from './containers/OptionPage';
import TotalPage from './components/TotalPage';
import { reinitCounters } from './redux/actions/counter';

const RouterStackNavigator = createStackNavigator(
  {
    HomePage: { screen: HomePage },
    OptionPage: { screen: OptionPage },
    CounterPage: { screen: CounterPage },
    TotalPage: { screen: TotalPage },
  },
  { headerMode: 'none' },
);

class Router extends Component {
  componentDidMount() {
    const { lastDate, reinitCounters } = this.props;
    StatusBar.setBackgroundColor('#528D6D');
    this.props.reinitCounters(lastDate);
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
    return <RouterStackNavigator />;
  }
}

const mapStateToProps = state => ({
  lastDate: state.date,
  counters: state.counters,
});

const mapDispatchToProps = {
  reinitCounters,
};
export default connect(mapStateToProps, mapDispatchToProps)(Router);
