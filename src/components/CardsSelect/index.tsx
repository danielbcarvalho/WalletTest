import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import Card from '../Card';
import { Card as CardModel } from '../../models/CardModels';

import {
  Text,
  Container,
  UseButton,
  CardFlatList,
  CardContainer,
} from './styles';

interface CardsSelectProps {
  cards: CardModel[];
  onUseCard: (selectedCard: CardModel) => void;
}

function CardsSelect({ cards, onUseCard }: CardsSelectProps) {
  const { t } = useTranslation();
  const [cardsData, setCardsData] = useState(cards);

  if (cards.length === 0) {
    return <Text>{t('ops, no card registered')}</Text>;
  }

  const topCardIndex = cards.length - 1;

  const isCardOnTheTop = (index: number) => index === topCardIndex;

  function renderUseCardButton() {
    return (
      <UseButton onPress={() => onUseCard(cardsData[topCardIndex])}>
        <Text>{t('use this card')}</Text>
      </UseButton>
    );
  }

  function renderCard({ item, index }: { item: CardModel; index: number }) {
    return (
      <CardContainer
        disabled={isCardOnTheTop(index)}
        activeOpacity={0.7}
        cardTop={isCardOnTheTop(index)}
        onPress={() => setCardOnTheTop(index)}>
        <Card card={item} />
      </CardContainer>
    );
  }

  const setCardOnTheTop = (index: number) => {
    if (!isCardOnTheTop(index)) {
      setCardsData([cardsData[topCardIndex], cardsData[index]]);
    }
  };

  return (
    <Container>
      <CardFlatList
        data={cardsData}
        bounces={false}
        renderItem={renderCard}
        ListFooterComponent={renderUseCardButton}
        keyExtractor={item => item.id.toString()}
      />
    </Container>
  );
}

export default CardsSelect;
