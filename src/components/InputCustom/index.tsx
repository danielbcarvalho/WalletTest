import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label, MaskInputStyled } from './styles';

interface Props extends TextInputProps {
  mask?: any;
  label: string;
  width?: number;
}
function InputCustom({ mask, value, label, width, ...props }: Props) {
  return (
    <Container width={width}>
      <Label>{label}</Label>
      <MaskInputStyled
        accessibilityLabel={label}
        mask={mask}
        value={value}
        onChangeText={props.onChangeText}
        autoComplete="off"
        autoCorrect={false}
        {...props}
      />
    </Container>
  );
}

export default InputCustom;
