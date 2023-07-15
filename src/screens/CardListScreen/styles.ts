import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallete.background.default};
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.pallete.textOnBackground.default};
`;
