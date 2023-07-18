import React, { ReactNode } from 'react';
import { BackgroundAnimated, Container } from './styles';
interface Props {
  top?: boolean;
  children: ReactNode;
}

const StyledBackgroundContainer: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <BackgroundAnimated top />
      <BackgroundAnimated />
      {children}
    </Container>
  );
};

export default StyledBackgroundContainer;
