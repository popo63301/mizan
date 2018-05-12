import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';
import TotalPage from './components/TotalPage';
import NavigationPageTest from './components/NavigationPageTest';

export default createStackNavigator({
  HomePage: { screen: HomePage },
  TotalPage: { screen: TotalPage },
  CounterPage: { screen: CounterPage },
  NavigationPageTest: { screen: NavigationPageTest },
});
