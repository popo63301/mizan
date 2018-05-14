import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';
import OptionPage from './containers/OptionPage';
import TotalPage from './components/TotalPage';

export default createStackNavigator({
  HomePage: { screen: HomePage },
  CounterPage: { screen: CounterPage },
  OptionPage: { screen: OptionPage },
  TotalPage: { screen: TotalPage },
});
