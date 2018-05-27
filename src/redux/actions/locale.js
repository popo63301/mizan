import { TOGGLE_LANGUAGE } from '../constants/locale';

export const toggleLanguage = language => ({
  type: TOGGLE_LANGUAGE,
  language,
});
