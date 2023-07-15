import * as React from 'react';
import { Platform } from 'react-native';

import BrandTitle from '../../components/Title';
import CardRegistrationForm from '../../components/CardRegistrationForm';
import StyledBackgroundContainer from '../../components/StyledBackgoundContainer';
import { useCardRegistration } from '../../components/hooks/useCardRegistration';

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
