import { Navigation } from 'react-native-navigation';
import Home from './HomeScreen';

export default function registerScreens(store, Provider) {
  Navigation.registerComponent('DetoxTest.Home', () => Home, store, Provider);
}
