import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes';
import Provider from './src/Provider';

function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
