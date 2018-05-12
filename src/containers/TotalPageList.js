import { connect } from 'react-redux';
import TotalPageList from '../components/TotalPageList';
import { getListRewardsIds } from '../redux/selectors/rewards';

const mapStateToProps = state => ({
  rewardsList: getListRewardsIds(state),
});

export default connect(mapStateToProps)(TotalPageList);
