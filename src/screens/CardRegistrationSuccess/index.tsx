import * as React from 'react';

import { useTranslation } from 'react-i18next';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import Card from '../../components/Card';
import { ParamsList } from '../../Routes';
import { Button } from '../../components/Button';
import BrandTitle from '../../components/BrandTitle';
import StyledBackgroundContainer from '../../components/Containers/StyledBackgoundContainer';

import { Title, CardWrapper } from './styles';

type CardRegistrationSuccessRouteProp = RouteProp<
  ParamsList,
  'CardRegistrationSuccess'
>;

type CardRegistrationSuccessScreenProp = NativeStackNavigationProp<
  ParamsList,
  'CardRegistrationSuccess'
>;

function CardRegistrationSuccess() {
  const { t } = useTranslation();
  const { params } = useRoute<CardRegistrationSuccessRouteProp>();
  const { navigate } = useNavigation<CardRegistrationSuccessScreenProp>();

  function handleAdvance() {
    navigate('CardList');
  }

  return (
    <StyledBackgroundContainer>
      <BrandTitle />
      <Title>{t('successfully registered card')}</Title>
      <CardWrapper>
        <Card card={params.card} />
      </CardWrapper>
      <Button onPress={handleAdvance} title={t('advance')} />
    </StyledBackgroundContainer>
  );
}

export default CardRegistrationSuccess;
