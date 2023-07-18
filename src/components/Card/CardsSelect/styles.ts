import { FlatList } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

interface Props {
  cardTop: boolean;
}

export const Container = styled.View`
  flex: 1;
  width: 100%;
`;

export const UseButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
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

export const CardContainer = styled.TouchableOpacity<Props>`
  margin-bottom: ${({ cardTop }) => (cardTop ? '0' : '-105px')};
`;
