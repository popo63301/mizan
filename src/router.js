import { createStackNavigator } from 'react-navigation';
import HomePage from './components/HomePage';
import NavigationPageTest from './components/NavigationPageTest';

export default createStackNavigator({
  Home: { screen: HomePage },
  NavigationPageTest: { screen: NavigationPageTest },
});
