import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import IntlProvider from './src/containers/IntlProvider';
import SplashScreen from './src/components/SplashScreen';
import Router from './src/router';
import { store, persistor } from './src/redux/configureStore';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<SplashScreen />} persistor={persistor}>
      <IntlProvider textComponent={Text}>
        <Router />
      </IntlProvider>
    </PersistGate>
  </Provider>
);

export default App;
