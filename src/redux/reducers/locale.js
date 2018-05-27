import I18n from 'react-native-i18n';
import { TOGGLE_LANGUAGE } from '../constants/locale';

const localeInit = I18n.currentLocale().substr(0, 2) || 'en';

const localeReducer = (state = localeInit, action) => {
  switch (action.type) {
    case TOGGLE_LANGUAGE: {
      return action.language;
    }
    default:
      return state;
  }
};

export default localeReducer;
