import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { Text, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ParamsList } from '../../../App';

// TODO: estudar diferenca type e interface
type ViewsNav = NativeStackNavigationProp<ParamsList, 'CardRegistration'>;

function CardRegistration() {
  const { navigate } = useNavigation<ViewsNav>();
  const { t } = useTranslation();

  return (
    <TouchableOpacity
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onPress={() => navigate('CardList')}>
      <Text>{t('register card')}</Text>
    </TouchableOpacity>
  );
}

export default CardRegistration;
