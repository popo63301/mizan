import { connect } from 'react-redux';
import HomePageList from '../components/HomePageList';
import { getListHadithsIds } from '../redux/selectors/hadiths';

const mapStateToProps = state => ({
  listHadithsIds: getListHadithsIds(state),
});

export default connect(mapStateToProps)(HomePageList);
