import { connect } from 'react-redux';
import CounterDescription from '../components/CounterDescription';
import { getHadithById } from '../redux/selectors/hadiths';
import { getCounterValueForHadithId, getCurrentProgress } from '../redux/selectors/counters';

const mapStateToProps = (state, ownProps) => ({
  hadith: getHadithById(state, ownProps),
  counterValue: getCounterValueForHadithId(state, ownProps),
  currentProgress: getCurrentProgress(state, ownProps),
});

export default connect(mapStateToProps)(CounterDescription);
