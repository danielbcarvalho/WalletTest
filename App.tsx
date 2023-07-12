import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes';
import Provider from './src/Provider';
import { ThemeProvider } from './src/theme';

function App() {
  return (
    <ThemeProvider>
      <Provider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
