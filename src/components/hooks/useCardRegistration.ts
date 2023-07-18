import { Alert } from 'react-native';
import uuid from 'react-native-uuid';
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
  cvv: string;
  name: string;
  number: string;
  expiry: string;
}

export function useCardRegistration() {
  const navigation = useNavigation<CardRegistrationScreenProps>();
  const queryClient = useQueryClient();

  const registerCard = useMutation(cardService.register, {
    onSuccess: data => {
      queryClient.invalidateQueries([QueryKeys.CARD_LIST]);
      navigation.push('Home');
      navigation.navigate('CardRegistrationSuccess', { card: data });
    },
    onError: (error: any) => {
      Alert.alert('Error', error.message);
    },
  });

  const handleCardRegisterForm = async (data: CardRegistrationFormData) => {
    await registerCard.mutateAsync({
      id: uuid.v4() as string,
      kind: 'black',
      ...data,
    });
  };

  return handleCardRegisterForm;
}
