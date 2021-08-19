import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import Routes from './src/router';
import {Provider} from 'react-redux';

import Store from './src/store/';

const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default App;
