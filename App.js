import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import appStore from './src/redux/reducers';
import initState from './src/redux/initState';
import Router from './src/router';

const store = createStore(appStore, initState);

function chouf() {
  console.log(store.getState());
  // var okay = store.getState()
  // console.log(okay.decks.byId[2])
}

store.subscribe(chouf);

console.log('store', store.getState());

const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
);

export default App;
