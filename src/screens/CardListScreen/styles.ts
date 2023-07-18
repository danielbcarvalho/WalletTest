import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0px 30px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.pallete.background.default};
`;
