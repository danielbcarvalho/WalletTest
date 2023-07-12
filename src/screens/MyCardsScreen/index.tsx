import * as React from 'react';
import {useNavigation} from '@react-navigation/native';

import {Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamsList} from '../../../App';

// TODO: estudar diferenca type e interface
type ViewsNav = NativeStackNavigationProp<ParamsList, 'CardList'>;

function CardList() {
  const {navigate} = useNavigation<ViewsNav>();

  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={() => navigate('CardRegistration')}>
      <Text>Meus Cartões</Text>
    </TouchableOpacity>
  );
}

export default CardList;
