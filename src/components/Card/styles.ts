import { css } from 'styled-components';
import styled from 'styled-components/native';

interface Props {
  kind: 'black' | 'green';
}
export const Container = styled.View<Props>`
  border-radius: 16px;
  display: flex;
  width: 100%;
  height: 180px;
  padding: 20px;
  justify-content: space-around;
  align-items: flex-start;
  gap: 10px;
  background-color: ${({ theme, kind }) =>
    theme.components.card[kind].backgroundColor};
`;

export const TextWrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Title = styled.Text<Props>`
  ${({ theme, kind }) => css`
    font-family: ${theme.components.card.title.fontFamily};
    font-size: ${theme.components.card.title.fontSize};
    line-height: ${theme.components.card.title.lineHeight};
    color: ${theme.components.card[kind].color};
  `};
`;

export const Name = styled.Text<Props>`
  ${({ theme, kind }) => css`
    font-family: ${theme.components.card.name.fontFamily};
    font-size: ${theme.components.card.name.fontSize};
    line-height: ${theme.components.card.name.lineHeight};
    color: ${theme.components.card[kind].color};
  `};
`;

export const Text = styled.Text<Props>`
  ${({ theme, kind }) => css`
    font-family: ${theme.components.card.text.fontFamily};
    font-size: ${theme.components.card.text.fontSize};
    line-height: ${theme.components.card.text.lineHeight};
    color: ${theme.components.card[kind].color};
    text-align: center;
  `};
`;
