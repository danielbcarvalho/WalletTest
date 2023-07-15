import 'react-native-gesture-handler';

import * as React from 'react';
import {
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack';

import Home from '../screens/HomeScreen';
import Header from '../components/Header';
import { Card } from '../models/CardModels';
import CardList from '../screens/CardListScreen';
import CardRegistration from '../screens/CardRegistrationScreen';
import CardRegistrationSuccess from '../screens/CardRegistrationSuccess';

export type ParamsList = {
  Home: undefined;
  CardList: undefined;
  CardRegistration: undefined;
  CardRegistrationSuccess: {
    card: Card;
  };
};

const AppStack = createStackNavigator<ParamsList>();

export default function Routes() {
  return (
    <AppStack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
        headerTransparent: true,
        header: () => <Header type="cardList" />,
      }}
      initialRouteName="Home">
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="CardList"
        component={CardList}
        options={{
          headerTransparent: false,
          header: () => <Header type="register" />,
        }}
      />
      <AppStack.Screen name="CardRegistration" component={CardRegistration} />
      <AppStack.Screen
        name="CardRegistrationSuccess"
        component={CardRegistrationSuccess}
      />
    </AppStack.Navigator>
  );
}
