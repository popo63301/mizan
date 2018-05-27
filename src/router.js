import React from 'react';
import { View } from 'react-native';
import { BackButton, NativeRouter, Route } from 'react-router-native';
import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';
import OptionPage from './containers/OptionPage';
import TotalPage from './components/TotalPage';

const Router = () => (
  <NativeRouter>
    <BackButton>
      <View style={{ display: 'flex', flex: 1 }}>
        <Route exact path="/" component={HomePage} />
        <Route path="/OptionPage" component={OptionPage} />
        <Route path="/CounterPage" component={CounterPage} />
        <Route path="/TotalPage" component={TotalPage} />
      </View>
    </BackButton>
  </NativeRouter>
);

export default Router;
