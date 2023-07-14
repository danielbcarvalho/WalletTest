import 'react-native-gesture-handler';

import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/HomeScreen';
import CardList from '../screens/CardListScreen';
import CardRegistration from '../screens/CardRegistrationScreen';

export type ParamsList = {
  CardList: undefined;
  CardRegistration: undefined;
  Home: undefined;
};

const screenOptions = {
  headerShown: false,
};

const AppStack = createStackNavigator<ParamsList>();

export default function Routes() {
  return (
    <AppStack.Navigator initialRouteName="Home">
      <AppStack.Screen name="Home" component={Home} options={screenOptions} />
      <AppStack.Screen
        name="CardList"
        component={CardList}
        options={screenOptions}
      />
      <AppStack.Screen
        name="CardRegistration"
        component={CardRegistration}
        options={screenOptions}
      />
    </AppStack.Navigator>
  );
}
