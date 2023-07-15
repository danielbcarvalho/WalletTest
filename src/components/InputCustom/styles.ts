import styled from 'styled-components/native';
import MaskInput from 'react-native-mask-input';

interface ContainerProps {
  width?: number;
}

export const Container = styled.View<ContainerProps>`
  width: ${({ width }) => (width ? `${width}%` : '100%')};
  margin: 16px 10px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.components.input.label.fontSize};
  font-family: ${({ theme }) => theme.components.input.label.fontFamily};
  color: ${({ theme }) => theme.components.input.label.color};
  margin-bottom: 6px;
`;

export const MaskInputStyled = styled(MaskInput)`
  padding: 0 16px;
  margin-top: 4px;
  height: 45px;
  background-color: ${({ theme }) => theme.components.input.backgroundColor};
  color: ${({ theme }) => theme.components.input.color};
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
  font-size: ${({ theme }) => theme.components.input.fontSize};
  font-family: ${({ theme }) => theme.components.input.fontFamily};
`;
