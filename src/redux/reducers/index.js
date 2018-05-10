import { combineReducers } from 'redux';
import hadithsReducer from './hadiths';
import rewardsReducer from './rewards';
import countersReducer from './counters';

const appStore = combineReducers({
  hadiths: hadithsReducer,
  rewards: rewardsReducer,
  counters: countersReducer,
});

export default appStore;
