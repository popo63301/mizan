import { connect } from 'react-redux';
import CounterModalInfo from '../components/CounterModalInfo';
import { getHadithById } from '../redux/selectors/hadiths';

const mapStateToProps = (state, ownProps) => ({
  hadith: getHadithById(state, ownProps),
});

export default connect(mapStateToProps)(CounterModalInfo);
