import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

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

const App = () => (
  <Provider store={store}>
    <IntlProvider textComponent={Text}>
      <Router />
    </IntlProvider>
  </Provider>
);

export default App;
