import { combineReducers } from 'redux';
import hadithsReducer from './hadiths';
import rewardsReducer from './rewards';
import countersReducer from './counters';
import localeReducer from './locale';

const appStore = combineReducers({
  hadiths: hadithsReducer,
  rewards: rewardsReducer,
  counters: countersReducer,
  locale: localeReducer,
});

export default appStore;
