import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { ButtonTypeStyleProps, Container, Title } from './styles';

interface Props extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
  disabled?: boolean;
}

export function Button({
  title,
  type = 'primary',
  disabled = false,
  ...rest
}: Props) {
  return (
    <Container
      testID="multipurpose-button"
      type={disabled ? 'disabled' : type}
      disabled={disabled}
      {...rest}>
      <Title type={disabled ? 'disabled' : type}>{title}</Title>
    </Container>
  );
}
