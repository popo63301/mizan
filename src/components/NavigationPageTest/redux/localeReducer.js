const localeReducer = (state = 'fr', action) => {
  switch (action.type) {
    case 'TOGGLE_LANGUAGE':
      const newLang = state === 'fr' ? 'en' : 'fr';
      return newLang;
    default:
      return state;
  }
};

export default localeReducer;
