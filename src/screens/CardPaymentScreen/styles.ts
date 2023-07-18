import { css } from 'styled-components';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  padding: 0px 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallete.background.default};
`;

export const ContentWrapper = styled.View`
  flex: 1;
  width: 100%;
`;

export const ButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 20px;
`;

export const CardFlatList = styled.FlatList`` as typeof FlatList;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.p.fontSize};
    line-height: ${theme.typography.p.lineHeight};
    color: ${theme.pallete.textOnBackground.default};
  `}
  margin-top: 15px;
`;

export const SelectedCard = styled.TouchableOpacity`
  margin: 300px 0 100px 0;
  width: 100%;
`;

export const DisabledCard = styled.TouchableOpacity`
  position: absolute;
  bottom: -940px;
  width: 100%;
  opacity: 0.4;
`;
