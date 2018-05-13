import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import IntlProvider from './IntlProvider';
import initStore from './redux/store';
import Comp from './Comp';

const store = createStore(initStore);

const Page = () => (
  <Provider store={store}>
    <IntlProvider textComponent={Text}>
      <Comp />
    </IntlProvider>
  </Provider>
);

export default Page;
