import 'react-native-gesture-handler';

import * as React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Home from '../screens/HomeScreen';
import Header from '../components/Header';
import CardList from '../screens/CardListScreen';
import CardRegistration from '../screens/CardRegistrationScreen';

export type ParamsList = {
  CardList: undefined;
  CardRegistration: undefined;
  Home: undefined;
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
      initialRouteName="CardRegistration">
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
    </AppStack.Navigator>
  );
}
