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
import CardPayment from '../screens/CardPaymentScreen';
import CardRegistration from '../screens/CardRegistrationScreen';
import WalletAnimatedScreen from '../screens/WalletAnimatedScreen';
import CardRegistrationSuccess from '../screens/CardRegistrationSuccess';

export type ParamsList = {
  Home: undefined;
  CardList: undefined;
  CardRegistration: undefined;
  CardRegistrationSuccess: {
    card: Card;
  };
  WalletAnimatedScreen: undefined;
  CardPayment: undefined;
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
          header: () => <Header type="register" />,
        }}
      />
      <AppStack.Screen name="CardRegistration" component={CardRegistration} />
      <AppStack.Screen
        name="CardRegistrationSuccess"
        component={CardRegistrationSuccess}
      />
      <AppStack.Screen
        name="WalletAnimatedScreen"
        component={WalletAnimatedScreen}
        options={{
          animationTypeForReplace: 'pop',
          headerShown: false,
        }}
      />
      <AppStack.Screen
        name="CardPayment"
        component={CardPayment}
        options={{
          header: () => <Header type="register" />,
        }}
      />
    </AppStack.Navigator>
  );
}
