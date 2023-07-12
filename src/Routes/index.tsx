import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import CardList from '../screens/MyCardsScreen';
import CardRegistration from '../screens/RegisterRegistrationScreen';

export type ParamsList = {
  CardList: undefined;
  CardRegistration: undefined;
};

const screenOptions = {
  headerShown: false,
};

const AppStack = createNativeStackNavigator<ParamsList>();

export function Routes() {
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
