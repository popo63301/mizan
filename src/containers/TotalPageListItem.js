import { connect } from 'react-redux';
import TotalPageListItem from '../components/TotalPageListItem';
import { getTotalRewardByRewardId, getRewardNameByRewardId } from '../redux/selectors/rewards';

const mapStateToProps = (state, props) => ({
  rewardId: props.rewardId,
  rewardName: getRewardNameByRewardId(state, props),
  rewardValue: getTotalRewardByRewardId(state, props),
});

export default connect(mapStateToProps)(TotalPageListItem);
