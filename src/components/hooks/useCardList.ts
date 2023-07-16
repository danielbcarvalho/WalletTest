import { useEffect } from 'react';
import { Alert } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { useNavigation } from '@react-navigation/native';

import { cardService } from '../../services/card';
import { QueryKeys } from '../../services/QueryKeys';
import { CardListScreenProps } from '../../screens/CardListScreen';

export function useCardList() {
  const { navigate } = useNavigation<CardListScreenProps>();

  const {
    isError,
    data: cards,
    isInitialLoading,
  } = useQuery([QueryKeys.CARD_LIST], () => cardService.list(), {
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  useEffect(() => {
    if (cards) {
      navigate('CardList');
    }

    if (isError) {
      Alert.alert('Something went wrong');
      navigate('Home');
    }

    if (isInitialLoading) {
      navigate('WalletAnimatedScreen');
    }
  }, [isError, isInitialLoading, navigate, cards]);

  return { cards, isError, isLoading: isInitialLoading };
}
