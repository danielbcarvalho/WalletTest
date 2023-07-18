import React from 'react';
import { useTranslation } from 'react-i18next';

import Card from '..';
import { Card as CardModel } from '../../../models/CardModels';

import {
  Text,
  Container,
  UseButton,
  CardFlatList,
  CardContainer,
} from './styles';
import { useCardList } from '../../hooks/useCardList';
import { isCardOnTheTop } from '../../../utils/card';

function CardsSelect() {
  const { t } = useTranslation();

  const { cards, setCardOnTop, onUseThisCard } = useCardList();

  if (cards?.length === 0) {
    return <Text>{t('ops, no card registered')}</Text>;
  }

  function renderUseCardButton() {
    return (
      <UseButton onPress={onUseThisCard}>
        <Text>{t('use this card')}</Text>
      </UseButton>
    );
  }

  function renderCard({ item, index }: { item: CardModel; index: number }) {
    return (
      <CardContainer
        disabled={isCardOnTheTop(index, cards)}
        activeOpacity={0.7}
        cardTop={isCardOnTheTop(index, cards)}
        onPress={() => setCardOnTop(item.id)}>
        <Card card={item} />
      </CardContainer>
    );
  }

  return (
    <Container>
      <CardFlatList
        data={cards}
        bounces={false}
        renderItem={renderCard}
        ListFooterComponent={renderUseCardButton}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
}

export default CardsSelect;
