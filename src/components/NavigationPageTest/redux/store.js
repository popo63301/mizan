import { combineReducers } from 'redux';
import localeReducer from './localeReducer';

const appReducer = combineReducers({ locale: localeReducer });

export default appReducer;
