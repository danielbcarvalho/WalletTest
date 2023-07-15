import React from 'react';

import { Masks } from 'react-native-mask-input';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

import { Button } from '../Button';
import InputCustom from '../InputCustom';
import { CardProps } from '../../screens/CardRegistrationScreen';

import { BottomInputWrapper } from './styles';
import { cardFormValidationSchema } from './schema';
import { getMaskCVV, getMaskDateMMYY } from '../../utils/mask-input';
import { useTranslation } from 'react-i18next';

interface Props {
  onCardRegisterForm: (card: CardProps) => void;
}

interface FormValues {
  card: string;
  name: string;
  date: string;
  cvv: string;
}

function CardRegistrationForm({ onCardRegisterForm }: Props) {
  const { t } = useTranslation();
  const { control, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: {
      card: '',
      name: '',
      date: '',
      cvv: '',
    },
    resolver: yupResolver(cardFormValidationSchema),
  });

  const onSubmit = (data: FormValues) => {
    const card: CardProps = {
      name: data.name,
      card: data.card,
      cvv: data.cvv,
      date: data.date,
    };
    onCardRegisterForm(card);
  };

  return (
    <>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <InputCustom
            accessibilityLabel={t('card number')}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label={t('card number')}
            placeholder=""
            keyboardType="numeric"
            mask={Masks.CREDIT_CARD}
          />
        )}
        name="card"
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
            />
          )}
          name="date"
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
