import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  color: ${({ theme }) => theme.pallete.textOnBackground.default};
`;

export const CardWrapper = styled.View`
  width: 100%;
  margin: 30px 0 20px 0;
`;
