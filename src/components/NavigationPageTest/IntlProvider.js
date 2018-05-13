import { IntlProvider } from 'react-intl';
import { connect } from 'react-redux';
import withMessages from './withMessage';
import fr from 'react-intl/locale-data/fr';
import { addLocaleData } from 'react-intl';

addLocaleData([...fr]);

const mapStateToProps = ({ locale }) => ({ locale, key: locale });

export default connect(mapStateToProps)(withMessages(IntlProvider));
