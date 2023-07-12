import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CardList from '../screens/MyCardsScreen';
import CardRegistration from '../screens/RegisterRegistrationScreen';

export type ParamsList = {
  CardList: undefined;
  CardRegistration: undefined;
};

const screenOptions = {
  headerShown: false,
};

const AppStack = createStackNavigator<ParamsList>();

export default function Routes() {
  return (
    <AppStack.Navigator initialRouteName="CardList">
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
