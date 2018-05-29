import React, { Component } from 'react';
import { StatusBar, Platform, View } from 'react-native';
import { connect } from 'react-redux';
import { BackButton, NativeRouter, Route } from 'react-router-native';
import { AdMobInterstitial } from 'react-native-admob';

import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';
import OptionPage from './containers/OptionPage';
import TotalPage from './components/TotalPage';
import { reinitCounters } from './redux/actions/counter';

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
    return (
      <NativeRouter>
        <BackButton>
          <View style={{ display: 'flex', flex: 1 }}>
            {/* <Route exact path="/" component={OptionPage} /> */}
            <Route exact path="/" component={HomePage} />
            <Route path="/OptionPage" component={OptionPage} />
            <Route path="/CounterPage" component={CounterPage} />
            <Route path="/TotalPage" component={TotalPage} />
          </View>
        </BackButton>
      </NativeRouter>
    );
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
