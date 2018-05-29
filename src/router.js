import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { BackButton, NativeRouter, Route } from 'react-router-native';
import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';
import OptionPage from './containers/OptionPage';
import TotalPage from './components/TotalPage';
import { reinitCounters } from './redux/actions/counter';

class Router extends Component {
  componentDidMount() {
    const { lastDate, reinitCounters } = this.props;
    this.props.reinitCounters(lastDate);
  }
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
