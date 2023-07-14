import styled from 'styled-components/native';

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  font-family: ${({ theme }) => theme.typography.h1.fontFamily};
  color: ${({ theme }) => theme.pallete.textOnBackground.default};
  line-height: 52px;
`;
