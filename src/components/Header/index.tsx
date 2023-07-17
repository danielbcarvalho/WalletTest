import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavigationProp, useNavigation } from '@react-navigation/native';

import { ParamsList } from '../../Routes';
import MyCardExtendedHeader from '../MyCardsTitle';

import {
  Title,
  Button,
  BackIcon,
  Container,
  RegisterIcon,
  DisabledButton,
  RowContainer,
} from './styles';

interface HeaderProps {
  type: 'cardList' | 'register';
}

function Header({ type }: HeaderProps) {
  const title = type === 'cardList' ? 'register' : 'Wallet Test';
  const { t } = useTranslation();
  const navigation = useNavigation<NavigationProp<ParamsList>>();

  function handleGoBack() {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('Home');
    }
  }

  function handleCardRegistration() {
    navigation.navigate('CardRegistration');
  }

  const goBackImageSource = require('../../../assets/images/btnback.png');
  const addImageSource = require('../../../assets/images/btnadd.png');

  return (
    <Container type={type}>
      <RowContainer type={type}>
        <Button onPress={handleGoBack} accessibilityLabel={t('go back')}>
          <BackIcon source={goBackImageSource} />
        </Button>
        <Title type={type}>{t(title)}</Title>
        {type === 'register' ? (
          <Button
            onPress={handleCardRegistration}
            accessibilityLabel={t('register card')}>
            <RegisterIcon source={addImageSource} />
          </Button>
        ) : (
          <DisabledButton testID="disabled-button" />
        )}
      </RowContainer>
      {type === 'register' && <MyCardExtendedHeader />}
    </Container>
  );
}

export default Header;
