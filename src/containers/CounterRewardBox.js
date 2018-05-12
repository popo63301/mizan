import { connect } from 'react-redux';
import CounterRewardBox from '../components/CounterRewardBox';
import {
  getHadithById,
  getListRewardByHadithId,
  getEmojisListForRewardListByHadithId,
} from '../redux/selectors/hadiths';
import { getCounterValueForHadithId } from '../redux/selectors/counters';

const mapStateToProps = (state, ownProps) => ({
  hadith: getHadithById(state, ownProps),
  counterValue: getCounterValueForHadithId(state, ownProps),
  listRewards: getListRewardByHadithId(state, ownProps),
  emojis: getEmojisListForRewardListByHadithId(state, ownProps),
});

export default connect(mapStateToProps)(CounterRewardBox);
