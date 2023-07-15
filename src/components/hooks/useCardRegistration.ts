import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ParamsList } from '../../Routes';
import { cardService } from '../../services/card';
import { QueryKeys } from '../../services/QueryKeys';

type CardRegistrationScreenProps = NativeStackNavigationProp<
  ParamsList,
  'CardRegistration'
>;

interface CardRegistrationFormData {
  card: string;
  name: string;
  date: string;
  cvv: string;
}

export function useCardRegistration() {
  const { navigate } = useNavigation<CardRegistrationScreenProps>();
  const queryClient = useQueryClient();

  const registerCard = useMutation(cardService.register, {
    onSuccess: () => {
      queryClient.invalidateQueries([QueryKeys.CARD_LIST]);
      navigate('CardList');
    },
    onError: (error: any) => {
      Alert.alert('Error', error.message);
    },
  });

  const handleCardRegisterForm = async (data: CardRegistrationFormData) => {
    await registerCard.mutateAsync(data);
  };

  return handleCardRegisterForm;
}
