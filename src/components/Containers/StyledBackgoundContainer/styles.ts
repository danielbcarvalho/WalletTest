import { SafeAreaView } from 'react-native-safe-area-context';

import styled, { css } from 'styled-components/native';

interface Props {
  top?: boolean;
}

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme }) => theme.pallete.background.default};
  padding: 10px 30px;
  justify-content: center;
  align-items: center;
`;

export const BackgroundAnimated = styled.View<Props>`
  position: absolute;
  height: 230px;
  width: 370px;
  background-color: ${({ theme }) => theme.pallete.background.overlay};
  opacity: 0.2;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  ${({ top }) =>
    top
      ? css`
          transform: rotate(-39.93deg);
          top: -70px;
          right: 120px;
        `
      : css`
          transform: rotate(139deg);
          bottom: -70px;
          left: 120px;
        `}
`;
