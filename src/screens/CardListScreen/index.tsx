import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { useTranslation } from 'react-i18next';

import { ParamsList } from '../../Routes';
import { Container, Title } from './styles';
import { useCardList } from '../../components/hooks/useCardList';

export type CardListScreenProps = NativeStackNavigationProp<
  ParamsList,
  'CardList'
>;

function CardList() {
  const { cards } = useCardList();

  const { navigate } = useNavigation<CardListScreenProps>();
  const { t } = useTranslation();

  return (
    <Container onPress={() => navigate('CardRegistration')}>
      <Title>{t('my cards')}</Title>
      <Title>{cards?.map(card => card?.name).join(', ')}</Title>
    </Container>
  );
}

export default CardList;
