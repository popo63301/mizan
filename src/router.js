import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';
import NavigationPageTest from './components/NavigationPageTest';

export default createStackNavigator({
  HomePage: { screen: HomePage },
  CounterPage: { screen: CounterPage },
  NavigationPageTest: { screen: NavigationPageTest },
});
