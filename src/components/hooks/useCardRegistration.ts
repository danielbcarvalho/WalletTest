import uuid from 'react-native-uuid';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ShowAlert } from '../ShowAlert';
import { ParamsList } from '../../Routes';
import { Card } from '../../models/CardModels';
import { cardService } from '../../services/card';
import { QueryKeys } from '../../services/QueryKeys';

import { useCardList } from './useCardList';

type CardRegistrationScreenProps = NativeStackNavigationProp<
  ParamsList,
  'CardRegistration'
>;

interface CardRegistrationFormData {
  cvv: string;
  name: string;
  number: string;
  expiry: string;
}

export function useCardRegistration() {
  const { t } = useTranslation();
  const navigation = useNavigation<CardRegistrationScreenProps>();
  const queryClient = useQueryClient();

  const { cards } = useCardList();

  const registerCardMutation = useMutation(cardService.register, {
    onSuccess: data => {
      queryClient.invalidateQueries([QueryKeys.CARD_LIST]);
      navigation.push('Home');
      navigation.navigate('CardRegistrationSuccess', { card: data });
    },
    onError: (error: any) => {
      ShowAlert({
        title: 'Error',
        message: error.message,
        onPress: () => navigation.navigate('Home'),
      });
    },
  });

  const handleCardRegisterForm = async (data: CardRegistrationFormData) => {
    try {
      if (cards.length >= 2) {
        ShowAlert({
          title: t('Ops, something went wrong'),
          message: t('Soon you will be able to register more cards'),
          onPress: () => navigation.navigate('Home'),
        });
      } else {
        const cardData: Card = {
          id: uuid.v4() as string,
          kind: 'green',
          ...data,
        };

        await registerCardMutation.mutateAsync(cardData);
      }
    } catch (error: any) {
      ShowAlert({
        title: t('Ops, something went wrong'),
        message: t('Try again later'),
        onPress: () => navigation.navigate('Home'),
      });
    }
  };

  return handleCardRegisterForm;
}
