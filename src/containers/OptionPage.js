import { connect } from 'react-redux';
import OptionPage from '../components/OptionPage';
import { toggleLanguage } from '../redux/actions/locale';

const mapStateToProps = ({ locale }) => ({ locale });

const mapDispatchToProps = { toggleLanguage };

export default connect(mapStateToProps, mapDispatchToProps)(OptionPage);
