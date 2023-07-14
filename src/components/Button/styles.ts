import { TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';

export type ButtonTypeStyleProps = 'primary' | 'secondary' | 'disabled';

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  /* flex: 1; */
  align-self: stretch;

  padding: 10px 20px;
  margin: 10px 0;
  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, type }) =>
    theme.components.button[type].backgroundColor};

  border-radius: ${({ theme }) => theme.components.button.radius};

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) =>
    css`
      color: ${theme.components.button[type].color};
      font-size: ${theme.components.button.fontSize};
      font-family: ${theme.components.button.fontFamily};
    `}
`;
