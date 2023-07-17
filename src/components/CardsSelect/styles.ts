import { FlatList } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

interface Props {
  cardTop: boolean;
}

export const Container = styled.View`
  width: 100%;
  align-items: center;
`;

export const UseButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
`;

export const CardFlatList = styled.FlatList`
  width: 100%;
` as typeof FlatList;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.typography.p.fontSize};
    line-height: ${theme.typography.p.lineHeight};
    color: ${theme.pallete.textOnBackground.default};
  `}
  margin-top: 15px;
`;

export const CardContainer = styled.TouchableOpacity<Props>`
  margin-top: ${({ cardTop }) => (cardTop ? '-105px' : '0')};
  width: 100%;
`;
