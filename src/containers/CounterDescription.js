import { connect } from 'react-redux';
import CounterDescription from '../components/CounterDescription';
import { getHadithById } from '../redux/selectors/hadiths';
import { getCounterValueForHadithId, getCurrentProgress } from '../redux/selectors/counters';

const mapStateToProps = (state, ownProps) => ({
  hadith: ownProps.hadithId
    ? getHadithById(state, ownProps)
    : getHadithById(state, { hadithId: 'tree1' }),

  counterValue: ownProps.hadithId
    ? getCounterValueForHadithId(state, ownProps)
    : getCounterValueForHadithId(state, { hadithId: 'tree1' }),

  currentProgress: ownProps.hadithId
    ? getCurrentProgress(state, ownProps)
    : getCurrentProgress(state, { hadithId: 'tree1' }),
});

export default connect(mapStateToProps)(CounterDescription);
