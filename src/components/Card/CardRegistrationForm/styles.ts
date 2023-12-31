import styled from 'styled-components/native';

export const BottomInputWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ScrollView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { flexGrow: 1 },
})``;
