import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import rootReducer from './reducers';
import initState from './initState';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['counters', 'date', 'locale'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, initState);
export const persistor = persistStore(store);
