import { connect } from 'react-redux';
import HomePageListItem from '../components/HomePageListItem';
import { getHadithById } from '../redux/selectors/hadiths';

const mapStateToProps = (state, ownProps) => ({
  hadith: getHadithById(state, ownProps),
});

export default connect(mapStateToProps)(HomePageListItem);
