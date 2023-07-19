import React, { useCallback, useState } from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, MaskInputStyled } from './styles';
import { cardFormValidationSchema } from '../Card/CardRegistrationForm/schema';

interface Props extends TextInputProps {
  mask?: any;
  name: string;
  label: string;
  value: string;
  width?: number;
}

function InputCustom({ mask, value, label, width, name, ...props }: Props) {
  const [isValid, setValid] = useState(true);

  const validateField = useCallback(() => {
    const fieldValidationSchema = (cardFormValidationSchema.fields as any)[
      name
    ];

    fieldValidationSchema
      .validate(value)
      .then(() => {
        setValid(true);
      })
      .catch(() => {
        setValid(false);
      });
  }, [name, value]);

  return (
    <Container width={width}>
      <Label>{label}</Label>
      <MaskInputStyled
        mask={mask}
        value={value}
        isDirty={!isValid}
        autoComplete="off"
        autoCorrect={false}
        accessibilityLabel={label}
        onSelectionChange={validateField}
        {...props}
      />
    </Container>
  );
}

export default InputCustom;
