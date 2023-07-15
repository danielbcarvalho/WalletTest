import * as React from 'react';
import { Alert } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useTranslation } from 'react-i18next';

import { ParamsList } from '../../Routes';
import { Container, Title } from './styles';
import { cardService } from '../../services/card';
import { QueryKeys } from '../../services/QueryKeys';

type CardListScreenProps = NativeStackNavigationProp<ParamsList, 'CardList'>;

function CardList() {
  const { data: cards, isError } = useQuery([QueryKeys.CARD_LIST], () =>
    cardService.list(),
  );

  const { navigate } = useNavigation<CardListScreenProps>();
  const { t } = useTranslation();

  if (isError) {
    Alert.alert('Something went wrong');
    navigate('Home');
    return null;
  }

  return (
    <Container onPress={() => navigate('CardRegistration')}>
      <Title>{t('my cards')}</Title>
      <Title>{cards?.map(card => card?.name).join(', ')}</Title>
    </Container>
  );
}

export default CardList;
