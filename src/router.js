import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';
import TotalPage from './components/TotalPage';
import NavigationPageTest from './components/NavigationPageTest';

export default createStackNavigator({
  NavigationPageTest: { screen: NavigationPageTest },
  HomePage: { screen: HomePage },
  CounterPage: { screen: CounterPage },
  TotalPage: { screen: TotalPage },
});
