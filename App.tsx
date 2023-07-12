// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardList from './src/screens/MyCardsScreen';
import CardRegistration from './src/screens/RegisterRegistrationScreen';

export type ParamsList = {
  CardList: undefined;
  CardRegistration: undefined;
};

const screenOptions = {
  headerShown: false,
};

const Stack = createNativeStackNavigator<ParamsList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CardList">
        <Stack.Screen
          name="CardList"
          component={CardList}
          options={screenOptions}
        />
        <Stack.Screen
          name="CardRegistration"
          component={CardRegistration}
          options={screenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
