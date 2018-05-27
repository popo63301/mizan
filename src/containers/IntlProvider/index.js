import 'intl';
import fr from 'react-intl/locale-data/fr';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import withMessages from './withMessage';

addLocaleData([...fr]);

const languages = ['en', 'fr'];

const mapStateToProps = ({ locale }) => {
  if (languages.includes(locale)) {
    return { locale, key: locale };
  }
  return { locale: 'en', key: 'en' };
};

export default connect(mapStateToProps)(withMessages(IntlProvider));
