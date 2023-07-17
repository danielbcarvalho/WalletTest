import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ParamsList } from '../../Routes';
import { Card } from '../../models/CardModels';
import CardsSelect from '../../components/CardsSelect';
import { useCardList } from '../../components/hooks/useCardList';

import { Container } from './styles';

export type CardListScreenProps = NativeStackNavigationProp<
  ParamsList,
  'CardList'
>;

function CardList() {
  const { cards, isLoading } = useCardList();
  const { t } = useTranslation();
  const { navigate } = useNavigation<CardListScreenProps>();

  if (isLoading) {
    return null;
  }

  function onUseCard(selectedCard: Card) {
    console.log('cartão selecionado', selectedCard);
  }

  return (
    <Container>
      <CardsSelect cards={cards ?? []} onUseCard={onUseCard} />
    </Container>
  );
}

export default CardList;
