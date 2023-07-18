import React from 'react';

import { useTranslation } from 'react-i18next';
import { Masks } from 'react-native-mask-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import { useFocusEffect } from '@react-navigation/native';

import { Button } from '../../Button';
import InputCustom from '../../InputCustom';

import { BottomInputWrapper } from './styles';
import { cardFormValidationSchema } from './schema';
import { getMaskCVV, getMaskDateMMYY } from '../../../utils/mask-input';

interface Props {
  onCardRegisterForm: (card: FormValues) => void;
}

interface FormValues {
  number: string;
  name: string;
  expiry: string;
  cvv: string;
}

function CardRegistrationForm({ onCardRegisterForm }: Props) {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState,
    reset: clearForm,
  } = useForm<FormValues>({
    defaultValues: {
      number: '',
      name: '',
      expiry: '',
      cvv: '',
    },
    resolver: yupResolver(cardFormValidationSchema),
    mode: 'all',
  });

  const onSubmit = (data: FormValues) => {
    const card: FormValues = {
      name: data.name,
      number: data.number,
      cvv: data.cvv,
      expiry: data.expiry,
    };
    onCardRegisterForm(card);
  };

  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = () => clearForm();

      return () => unsubscribe();
    }, [clearForm]),
  );

  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => {
          return (
            <InputCustom
              accessibilityLabel={t('card number')}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label={t('card number')}
              placeholder=""
              keyboardType="numeric"
              mask={Masks.CREDIT_CARD}
              name="number"
            />
          );
        }}
        name="number"
      />
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputCustom
            accessibilityLabel={t('card holder name')}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label={t('card holder name')}
            keyboardType="default"
            autoCapitalize="words"
            name="name"
          />
        )}
        name="name"
      />
      <BottomInputWrapper>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputCustom
              accessibilityLabel={t('expiration date')}
              placeholder="00/00"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label={t('expiration date')}
              keyboardType="numeric"
              width={48}
              mask={getMaskDateMMYY}
              name="expiry"
            />
          )}
          name="expiry"
        />
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputCustom
              accessibilityLabel={t('cvv')}
              placeholder="***"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              label={t('cvv')}
              keyboardType="numeric"
              width={48}
              mask={getMaskCVV}
              name="cvv"
            />
          )}
          name="cvv"
        />
      </BottomInputWrapper>
      <Button
        title={t('advance')}
        accessibilityLabel={t('advance')}
        onPress={handleSubmit(onSubmit)}
        disabled={!formState.isValid}
      />
    </>
  );
}

export default CardRegistrationForm;
