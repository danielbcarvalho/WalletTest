import * as React from 'react';
import { Platform } from 'react-native';
import { SubmitHandler } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { ParamsList } from '../../Routes';
import BrandTitle from '../../components/Title';
import CardRegistrationForm from '../../components/CardRegistrationForm';
import StyledBackgroundContainer from '../../components/StyledBackgoundContainer';

import { KeyboardAvoidingScrollView, StyledScrollView } from './styles';

type CardRegistrationScreenProps = NativeStackNavigationProp<
  ParamsList,
  'CardRegistration'
>;

export interface CardProps {
  id?: string;
  name: string;
  card: string;
  cvv: string;
  date: string;
}

function CardRegistration() {
  const onCardRegisterForm: SubmitHandler<{
    card: string;
    name: string;
    date: string;
    cvv: string;
  }> = data => {
    console.log(
      '🚀 ~ file: index.tsx:23 ~ handleCardRegisterForm ~ card:',
      data,
    );
  };
  const { navigate } = useNavigation<CardRegistrationScreenProps>();

  return (
    <KeyboardAvoidingScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <StyledScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled">
        <StyledBackgroundContainer>
          <BrandTitle />
          <CardRegistrationForm
            onCardRegisterForm={data => {
              onCardRegisterForm(data);
              navigate('CardList');
            }}
          />
        </StyledBackgroundContainer>
      </StyledScrollView>
    </KeyboardAvoidingScrollView>
  );
}

export default CardRegistration;
