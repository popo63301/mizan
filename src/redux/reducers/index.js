import { combineReducers } from 'redux';
import hadithsReducer from './hadiths';
import rewardsReducer from './rewards';
import countersReducer from './counters';
import localeReducer from './locale';
import dateReducer from './date';

const appStore = combineReducers({
  hadiths: hadithsReducer,
  rewards: rewardsReducer,
  counters: countersReducer,
  locale: localeReducer,
  date: dateReducer,
});

export default appStore;
