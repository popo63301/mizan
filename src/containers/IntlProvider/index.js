import 'intl';
import fr from 'react-intl/locale-data/fr';
import { connect } from 'react-redux';
import { addLocaleData, IntlProvider } from 'react-intl';
import withMessages from './withMessage';

addLocaleData([...fr]);

const mapStateToProps = ({ locale }) => ({ locale });

export default connect(mapStateToProps)(withMessages(IntlProvider));
