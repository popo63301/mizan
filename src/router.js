import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';
import NavigationPageTest from './components/NavigationPageTest';

export default createStackNavigator({
  CounterPage: { screen: CounterPage },
  HomePage: { screen: HomePage },
  NavigationPageTest: { screen: NavigationPageTest },
});
