import { connect } from 'react-redux';
import TotalPageListItem from '../components/TotalPageListItem';
import {
  getTotalRewardByRewardId,
  getRewardNameByRewardId,
  getEmojiRewardByRewardId,
} from '../redux/selectors/rewards';

const mapStateToProps = (state, props) => ({
  emoji: getEmojiRewardByRewardId(state, props),
  rewardName: getRewardNameByRewardId(state, props),
  rewardValue: getTotalRewardByRewardId(state, props),
});

export default connect(mapStateToProps)(TotalPageListItem);
