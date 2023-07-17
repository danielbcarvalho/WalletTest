import { css } from 'styled-components';
import styled from 'styled-components/native';

interface Props {
  type: 'register' | 'cardList';
}

export const Title = styled.Text<Props>`
  font-size: ${({ theme }) => theme.components.header.title.fontSize};
  font-family: ${({ theme }) => theme.components.header.title.fontFamily};
  color: ${({ theme, type }) => theme.components.header.title[type].color};
  line-height: 52px;
`;

export const Button = styled.TouchableOpacity``;

export const DisabledButton = styled.TouchableOpacity`
  width: 16px;
  height: 16px;
  padding-left: 30px;
`;

export const BackIcon = styled.Image`
  width: 45px;
  height: 45px;
  resize-mode: contain;
`;

export const RegisterIcon = styled.Image`
  width: 16px;
  height: 16px;
  padding-left: 30px;
  resize-mode: contain;
`;

export const RowContainer = styled.View<Props>`
  flex: 1;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 30px;
  padding-top: 30px;
  ${({ type }) =>
    type === 'register' &&
    css`
      background-color: #ffffff;
      shadow-color: #000;
      shadow-offset: 0px 2px;
      shadow-opacity: 0.3;
      shadow-radius: 4px;
      elevation: 4;
    `}
`;

export const Container = styled.View<Props>`
  ${({ theme, type }) => css`
    background-color: ${type === 'register' &&
    theme.components.header.title.register.backgroundColor};

    height: ${type === 'register' ? '160px' : 'auto'};
    border-radius: ${type === 'register' ? '50px' : '0px'};
  `}
  flex: 1;
`;
