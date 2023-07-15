import { KeyboardAvoidingView, ScrollView } from 'react-native';
import styled from 'styled-components/native';

export const KeyboardAvoidingScrollView = styled(KeyboardAvoidingView)`
  flex: 1;
  background-color: ${({ theme }) => theme.pallete.background.default};
`;

export const StyledScrollView = styled(ScrollView)`
  flex: 1;
`;
