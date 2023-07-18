import { Alert } from 'react-native';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { Card } from '../../models/CardModels';
import { cardService } from '../../services/card';
import { QueryKeys } from '../../services/QueryKeys';
import { isCardOnTheTop, topCardIndex } from '../../utils/card';
import { CardListScreenProps } from '../../screens/CardListScreen';

const FIVE_MINUTES = 1000 * 60 * 5;

export function useCardList() {
  const queryClient = useQueryClient();
  const { navigate } = useNavigation<CardListScreenProps>();
  const [useThisCard, setUseThisCard] = useState<boolean>(false);
  const [payWithThisCard, setPayWithThisCard] = useState<boolean>(false);

  const {
    isError,
    data: cards,
    isInitialLoading,
  } = useQuery<Card[]>([QueryKeys.CARD_LIST], () => cardService.list(), {
    staleTime: FIVE_MINUTES,
  });

  function setCardOnTop(selectedCardId: string) {
    if (cards) {
      const cardSelectedIndex = cards.findIndex(
        card => card.id === selectedCardId,
      );

      if (!isCardOnTheTop(cardSelectedIndex, cards)) {
        queryClient.setQueryData(
          [QueryKeys.CARD_LIST],
          [cards[topCardIndex(cards)], cards[cardSelectedIndex]],
        );
      }
    }
  }

  function onPayWithThisCard(value: boolean) {
    setPayWithThisCard(value);
  }

  function onUseThisCard() {
    setUseThisCard(true);
    navigate('CardPayment');
  }

  useEffect(() => {
    if (isError) {
      Alert.alert('Something went wrong');
      navigate('Home');
    }

    if (isInitialLoading) {
      navigate('WalletAnimatedScreen');
    }
  }, [cards, isError, navigate, isInitialLoading]);

  return {
    cards: cards ?? [],
    isError,
    useThisCard,
    setCardOnTop,
    onUseThisCard,
    payWithThisCard,
    onPayWithThisCard,
    isLoading: isInitialLoading,
  };
}
