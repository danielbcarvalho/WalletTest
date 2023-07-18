import React from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ParamsList } from '../../Routes';
import CardsSelect from '../../components/Card/CardsSelect';
import { useCardList } from '../../components/hooks/useCardList';

import { Container } from './styles';

export type CardListScreenProps = NativeStackNavigationProp<
  ParamsList,
  'CardList'
>;

function CardList() {
  const { isLoading, useThisCard } = useCardList();

  if (isLoading) {
    return null;
  }

  return <Container>{!useThisCard ? <CardsSelect /> : null}</Container>;
}

export default CardList;
