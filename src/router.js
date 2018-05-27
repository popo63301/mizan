import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';
import OptionPage from './containers/OptionPage';
import TotalPage from './components/TotalPage';

export default createStackNavigator(
  {
    HomePage: { screen: HomePage },
    OptionPage: { screen: OptionPage },
    CounterPage: { screen: CounterPage },
    TotalPage: { screen: TotalPage },
  },
  { headerMode: 'none' },
);
