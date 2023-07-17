import { css } from 'styled-components';
import styled from 'styled-components/native';

interface Props {
  color?: string;
}

export const H4 = styled.Text<Props>`
  ${({ theme, color }) => css`
    font-size: ${theme.typography.h4.fontSize};
    font-family: ${theme.typography.h4.fontFamily};
    line-height: ${theme.typography.h4.lineHeight};
    color: ${color || theme.pallete.textOnBackground.default};
  `}
`;
