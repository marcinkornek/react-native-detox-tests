import React from 'react';
import { Text } from 'react-native';
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Text>Beer</Text>
  </Provider>
);

export default App;
