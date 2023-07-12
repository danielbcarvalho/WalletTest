import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamsList} from '../../../App';

// TODO: estudar diferenca type e interface
type MyCardsNav = NativeStackNavigationProp<ParamsList, 'CardList'>;

function CardList() {
  const {navigate} = useNavigation<MyCardsNav>();
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={() => navigate('CardRegistration')}>
      <Text>{t('my cards')}</Text>
    </TouchableOpacity>
  );
}

export default CardList;
