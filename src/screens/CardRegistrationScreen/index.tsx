import * as React from 'react';
import { Platform } from 'react-native';

import BrandTitle from '../../components/BrandTitle';
import CardRegistrationForm from '../../components/Card/CardRegistrationForm';
import { useCardRegistration } from '../../components/hooks/useCardRegistration';
import StyledBackgroundContainer from '../../components/Containers/StyledBackgoundContainer';

import { KeyboardAvoidingScrollView, StyledScrollView } from './styles';

function CardRegistration() {
  const onCardRegisterForm = useCardRegistration();

  return (
    <KeyboardAvoidingScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StyledScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <StyledBackgroundContainer>
          <BrandTitle />
          <CardRegistrationForm onCardRegisterForm={onCardRegisterForm} />
        </StyledBackgroundContainer>
      </StyledScrollView>
    </KeyboardAvoidingScrollView>
  );
}

export default CardRegistration;
