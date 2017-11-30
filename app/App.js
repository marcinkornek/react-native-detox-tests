import { Provider } from 'react-redux';
import { Navigation } from 'react-native-navigation';
import registerScreens from 'DetoxTest/app/screens';
import store from 'DetoxTest/app/store';

registerScreens(store, Provider);

const navigatorStyle = {};

const App = Navigation.startSingleScreenApp({
  screen: {
    screen: 'DetoxTest.Home',
    navigatorStyle,
  },
  appStyle: {
    orientation: 'portrait',
  },
});

export default App;
