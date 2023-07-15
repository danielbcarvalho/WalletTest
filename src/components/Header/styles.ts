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

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 30px;
  margin-top: 25px;
`;
