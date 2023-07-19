import React from 'react';
import { useTranslation } from 'react-i18next';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import Card from '../../components/Card';
import { ParamsList } from '../../Routes';
import { isCardOnTheTop } from '../../utils/card';
import { Card as CardModel } from '../../models/CardModels';
import { useCardList } from '../../components/hooks/useCardList';

import {
  Text,
  Container,
  UseButton,
  CardFlatList,
  CardContainer,
  ContentWrapper,
} from './styles';

export type CardListScreenProps = NativeStackNavigationProp<
  ParamsList,
  'CardList'
>;

function CardList() {
  const { t } = useTranslation();

  const { cards, setCardOnTop, onUseThisCard } = useCardList();

  if (cards.length === 0) {
    return (
      <Container>
        <Text>{t('ops, no card registered')}</Text>
      </Container>
    );
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
        activeOpacity={0.7}
        onPress={() => setCardOnTop(item.id)}
        cardTop={isCardOnTheTop(index, cards)}
        disabled={isCardOnTheTop(index, cards)}>
        <Card card={item} />
      </CardContainer>
    );
  }

  return (
    <Container>
      <ContentWrapper>
        <CardFlatList
          data={cards}
          renderItem={renderCard}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={renderUseCardButton}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
        />
      </ContentWrapper>
    </Container>
  );
}

export default CardList;
