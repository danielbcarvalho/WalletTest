import * as React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {Text, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ParamsList} from '../../Routes';
import {useQuery} from '@tanstack/react-query';

// TODO: estudar diferenca type e interface
type MyCardsNav = NativeStackNavigationProp<ParamsList, 'CardList'>;

function CardList() {
  const cards = useQuery(['cards'], async () => {
    return {
      cards: [
        {
          id: '4ec42ba9-50af-40d2-af90-8312edbd9ca2',
          number: '3529 5435 3355 8727',
          cvv: '317',
          name: 'John Doe',
        },
      ],
    };
  });

  const {navigate} = useNavigation<MyCardsNav>();
  const {t} = useTranslation();
  return (
    <TouchableOpacity
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
      onPress={() => navigate('CardRegistration')}>
      <Text>{t('my cards')}</Text>
      <Text>{cards?.data?.cards.map(card => card.name)}</Text>
    </TouchableOpacity>
  );
}

export default CardList;
