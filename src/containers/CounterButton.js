import { connect } from 'react-redux';
import CounterButton from '../components/CounterButton';
import { increaseCounter } from '../redux/actions/counter';

const mapDispatchToProps = {
  increaseCounter,
};

export default connect(null, mapDispatchToProps)(CounterButton);
