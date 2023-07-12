import * as React from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useTranslation } from 'react-i18next';

import { ParamsList } from '../../Routes';
import { Container, Title } from './styles';

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

  const { navigate } = useNavigation<MyCardsNav>();
  const { t } = useTranslation();
  return (
    <Container
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={() => navigate('CardRegistration')}>
      <Title>{t('my cards')}</Title>
      <Title>{cards?.data?.cards.map(card => card.name)}</Title>
    </Container>
  );
}

export default CardList;
